"use server";

import { headers } from "next/headers";
import z from "zod";
import { auth } from "./auth";

//Signup
const SignupSchema = z.object({
  name: z
    .string("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),
  email: z.email("Email is not valid").toLowerCase(),
  password: z
    .string("Password is required")
    .min(6, "رمز عبور بید")
    .max(50, "رمز عبور بید"),
});

export const signup = async (formData: FormData) => {
  //VALIDATION
  const data = Object.fromEntries(formData);
  const validateData = SignupSchema.safeParse(data);
  if (!validateData.success) {
    throw new Error(validateData.error.message);
  }
  //END VALIDATION
  try {
    //SIGNUP
    const res = await auth.api.signUpEmail({
      body: {
        email: validateData.data.email,
        password: validateData.data.password,
        name: validateData.data.name,
        callbackURL: process.env.BETTER_AUTH_URL,
        rememberMe: true,
      },
    });

    return { status: "success", response: res };
  } catch (error) {
    console.error("Signup failed:", error);
    return { status: "error", response: error };
  }
};

//Login
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
  const validateData = LoginSchema.safeParse(data);

  try {
    const res = await auth.api.signInEmail({
      body: {
        email: validateData.data?.email as string,
        password: validateData.data?.password as string,
      },
    });

    return { status: "success", response: res };
  } catch (error) {
    console.error(error);
    return { status: "error", response: error };
  }
};

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return null;
  }
  return session;
};
