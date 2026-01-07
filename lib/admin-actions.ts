"use server";

import { getSession } from "@/lib/actions";
import { prisma } from "@/prisma/prisma";
import { auth } from "./auth";
import { adminCreateUserSchema } from "./validations";



//ADMIN ROLE - CREATE USER
export const adminCreateUser = async (formData: FormData) => {
  //VALIDATION
  const data = Object.fromEntries(formData);
  const validateData = adminCreateUserSchema.safeParse(data);
  if (!validateData.success) {
    throw new Error(validateData.error.message);
  }
  //AUTHENTICATION
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
  if (session.user?.role !== "admin") {
    throw new Error("Unauthorized");
  }
  try {
    const user = await auth.api.createUser({
      body: {
        email: "user@example.com", // required
        password: "some-secure-password", // required
        name: "James Smith", // required
        role: "admin",
        data: { customField: "customValue" },
      },
    });
  } catch (error) {
    console.error(error);
    return { status: "error", response: error };
  }
};

export const promoteToDoctor = async (userId: string) => {
  await prisma.$transaction(async (tx) => {
    // 1. Update role
    const user = await tx.user.update({
      where: { id: userId },
      data: { role: "DOCTOR" },
    });

    // 2. Create doctor profile
    await tx.doctorProfile.create({
      data: {
        userId: user.id,
        specialty: "General Medicine",
        verified: true, // or false, depending on your flow
      },
    });
  });
};
