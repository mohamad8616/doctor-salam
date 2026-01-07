import { Prisma } from "@prisma/client";

export type Session = {
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
    banned: boolean | null | undefined;
    role?: string | null | undefined;
    banReason?: string | null | undefined;
    banExpires?: Date | null | undefined;
  };
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
    impersonatedBy?: string | null | undefined;
  };
} | null;

export const ROLES = {
  PATIENT: "PATIENT",
  DOCTOR: "DOCTOR",
  ADMIN: "ADMIN",
} as const;

export type UserWithDoctorProfile = Prisma.UserGetPayload<{
  include: { doctorProfile: true };
}>;

