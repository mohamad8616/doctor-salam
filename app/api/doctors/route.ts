// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/lib/db";
// import { auth } from "@/lib/auth";
// import { Role } from "@prisma/client";

// export async function GET(request: NextRequest) {
//   try {
//     /**
//      * 1️⃣ Authenticate the request
//      * We MUST use request.headers in route handlers
//      */
//     const session = await auth.api.getSession({
//       headers: request.headers,
//     });

//     if (!session) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     /**
//      * 2️⃣ Authorization check
//      * Only ADMIN users are allowed to access this route
//      */
//     const role = session.user.role as Role;

//     if (role !== Role.ADMIN) {
//       return NextResponse.json({ error: "Forbidden" }, { status: 403 });
//     }

//     /**
//      * 3️⃣ Fetch active doctors
//      * Each doctor is linked to a User record
//      */
//     const doctors = await db.doctor.findMany({
//       where: {
//         isActive: true,
//       },
//       include: {
//         user: {
//           select: {
//             id: true,
//             name: true,
//             email: true,
//             image: true,
//             role: true,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     /**
//      * 4️⃣ Return result
//      */
//     return NextResponse.json(doctors, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching doctors:", error);

//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
