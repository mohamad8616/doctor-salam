"use server";

import { redirect } from "next/navigation";
import z from "zod";
import { auth } from "./auth";

const SignupSchema = z.object({
  name: z
    .string("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),
  email: z.email("Email is not valid"),
  password: z
    .string("Password is required")
    .min(6, "The password must be at least 6 characters long")
    .max(50, "The password must be at most 50 characters long"),
});

export const signup = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const result = SignupSchema.safeParse(data);
  if (!result.success) {
    throw new Error(result.error.message);
  }
  console.log(formData, result);
  try {
    const res = await auth.api.signUpEmail({
      body: {
        email: result.data.email,
        password: result.data.password,
        name: result.data.name,
        callbackURL: process.env.BETTER_AUTH_URL,
      },
    });
    console.log("action log:", res);
    return { status: "success", response: res };
  } catch (error) {
    console.error("Signup failed:", error);
    return { status: "error", response: error };
  }
  redirect("/login");
};

const LoginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "The password must be at least 6 characters long")
    .max(100),
});
export const signIn = async (formData: FormData) => {
  //VALIDATION
  const data = Object.fromEntries(formData);
  const result = LoginSchema.safeParse(data);

  const res = await auth.api.signInEmail({
    body: {
      email: result.data?.email as string,
      password: result.data?.password as string,
    },
  });
};
