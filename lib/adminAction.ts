"use server";

import { prisma } from "@/prisma/prisma";

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
