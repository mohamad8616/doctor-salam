"use client";
import karola from "@/public/karola.webp";
import Image from "next/image";
import Link from "next/link";
import LoginCredentials from "./Login.credentials";
import LoginSocialProvider from "./Login.social.provider";

export function LoginForm() {
  return (
    <div className="w-full lg:grid lg:min-h-150 lg:grid-cols-2  h-screen overflow-hidden ">
      {/* SECTION 1: The Login Form (Left on LTR, Right on RTL) */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-11/12 mx-auto sm:w-full">
        <div className="mx-auto grid w-full max-w-100 gap-6">
          {/* Header Text */}
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">ورود به حساب</h1>
            <p className="text-balance text-muted-foreground">
              برای دسترسی به داشبورد، اطلاعات خود را وارد کنید
            </p>
            <p className="text-sm text-muted-foreground">
              حساب کاربری ندارید؟{" "}
              <Link
                href="/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                ثبت نام کنید
              </Link>
            </p>
          </div>

          {/* Social Logins - Grouped side by side */}
          <LoginSocialProvider />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                یا ورود با ایمیل
              </span>
            </div>
          </div>

          {/* Email Form */}
          <LoginCredentials />
        </div>
      </div>

      {/* SECTION 2: The Image (Hidden on mobile) */}
      <div className="hidden bg-blue-500 lg:block relative h-full w-full">
        <Image
          src={karola}
          alt="Login Background"
          fill
          className="h-full w-full object-cover dark:brightness-[0.7]"
          priority
        />
      </div>
    </div>
  );
}
