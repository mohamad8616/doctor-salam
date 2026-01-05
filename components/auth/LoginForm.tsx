"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInGithub, signInGoogle } from "@/lib/auth-client";
import karola from "@/public/karola.webp";
import Image from "next/image"; // Assuming you are using Next.js
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { Password } from "../ui/password";
import LoginSubmitFn from "./LoginSubmitFn";
import Link from "next/link";

export function LoginForm() {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    LoginSubmitFn();

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
          <div className="grid grid-cols-2 gap-4">
            <form action={signInGithub} className="w-full">
              <Button variant="outline" type="submit" className="w-full gap-2">
                <IoLogoGithub className="h-5 w-5" />
                <span>گیت‌هاب</span>
              </Button>
            </form>
            <form action={signInGoogle} className="w-full">
              <Button variant="outline" type="submit" className="w-full gap-2">
                <IoLogoGoogle className="h-5 w-5 text-red-500" />
                <span>گوگل</span>
              </Button>
            </form>
          </div>

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
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {/* Global Error Message */}
            {errors.root?.message && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md text-center font-medium">
                {errors.root?.message}
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={errors.email ? "border-destructive" : ""}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">رمز عبور</Label>
                {/* Optional: Add Forgot Password link here */}
                <a href="#" className="text-xs text-primary hover:underline">فراموشی رمز؟</a>
              </div>
              <Password
                id="password"
                {...register("password")}
                className={errors.password ? "border-destructive" : ""}
              />
              {errors.password && (
                <p className="text-xs text-destructive font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full mt-2" disabled={isLoading}>
              {isLoading ? "در حال پردازش..." : "ورود به حساب"}
            </Button>
          </form>
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
