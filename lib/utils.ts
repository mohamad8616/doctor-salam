import { Role, User } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { headers } from "next/headers";
import { twMerge } from "tailwind-merge";
import { auth } from "./auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return null;
  }
  return session;
};

export function requireRole(role: Role) {
  return async () => {
    const session = await getSession();
    if (!session || session.user.role !== role) {
      throw new Error("Forbidden");
    }
    return session;
  };
}

export const isDoctor = async (user: User) => {
  const isDoctor = user.role === "DOCTOR" && user.doctorProfile !== null;
};
