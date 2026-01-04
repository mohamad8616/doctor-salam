"use server";

import { getSession } from "@/hooks/getSession";
import z from "zod";
import { auth } from "./auth";

const adminCreateUserSchema = z.object({
  name: z
    .string("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),
  email: z.email("Email is not valid"),
  password: z
    .string("Password is required")
    .min(6, "The password must be at least 6 characters long")
    .max(50, "The password must be at most 50 characters long"),
  role: z.enum(["PATIENT", "DOCTOR"]).optional(),
});
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
