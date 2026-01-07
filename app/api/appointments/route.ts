import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";

/**
 * GET /api/appointments
 *
 * Role-based appointment fetching:
 * - ADMIN   → all appointments
 * - DOCTOR  → only appointments assigned to that doctor
 * - PATIENT → only their own appointments
 */
export async function GET(request: NextRequest) {
  try {
    // 1️⃣ Authenticate user
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = session.user.role;
    let appointments;

    /**
     * 2️⃣ ADMIN: can see all appointments
     */
    if (role === "ADMIN") {
      appointments = await db.appointment.findMany({
        include: {
          // Load doctor + doctor’s user info
          doctor: {
            include: {
              user: {
                select: { id: true, name: true, email: true },
              },
            },
          },
          // Patient is already a User
          patient: {
            select: { id: true, name: true, email: true },
          },
        },
        orderBy: { scheduledAt: "desc" },
      });
    } else if (role === "DOCTOR") {

    /**
     * 3️⃣ DOCTOR: only their assigned appointments
     */
      // Find doctor profile linked to this user
      const doctorProfile = await db.doctorProfile.findUnique({
        where: { userId: session.user.id },
      });

      if (!doctorProfile) {
        return NextResponse.json(
          { error: "Doctor profile not found" },
          { status: 404 }
        );
      }

      appointments = await db.appointment.findMany({
        where: { doctorId: doctorProfile.id },
        include: {
          patient: {
            select: { id: true, name: true, email: true },
          },
        },
        orderBy: { scheduledAt: "desc" },
      });
    } else if (role === "PATIENT") {

    /**
     * 4️⃣ PATIENT: only their own appointments
     */
      appointments = await db.appointment.findMany({
        where: { patientId: session.user.id },
        include: {
          doctor: {
            include: {
              user: {
                select: { id: true, name: true, email: true },
              },
            },
          },
        },
        orderBy: { scheduledAt: "desc" },
      });
    } else {

    /**
     * 5️⃣ Invalid role (should never happen)
     */
      return NextResponse.json({ error: "Invalid role" }, { status: 403 });
    }

    return NextResponse.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


/**
 * POST /api/appointments
 *
 * - Only PATIENTs can create appointments
 * - Appointment is always created as PENDING
 */
export async function POST(request: NextRequest) {
  try {
    // 1️⃣ Authenticate user
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    // Only patients can create appointments
    if (!session || session.user.role !== "PATIENT") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2️⃣ Validate request body
    const body = await request.json();
    const validatedData = appointmentSchema.parse(body);

    // 3️⃣ Create appointment
    const appointment = await db.appointment.create({
      data: {
        patientId: session.user.id,          // patient is the logged-in user
        doctorId: validatedData.doctorId,    // doctor profile ID
        scheduledAt: validatedData.scheduledAt,
        reason: validatedData.reason,
        status: "PENDING",
      },
      include: {
        doctor: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
        patient: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);

    // Zod validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error", details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}