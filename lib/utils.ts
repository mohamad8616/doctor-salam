import { Role } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getSession } from "./actions";
import { UserWithDoctorProfile } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function requireRole(role: Role) {
  return async () => {
    const session = await getSession();
    if (!session || session.user.role !== role) {
      throw new Error("Forbidden");
    }
    return session;
  };
}

export const isDoctor = async (user: UserWithDoctorProfile) => {
  const isDoctor = user.role === "DOCTOR" && user.doctorProfile !== null;
  return isDoctor;
};
