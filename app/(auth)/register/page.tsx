import { RegisterForm } from "@/components/auth/register/RegisterForm";
import karola from "@/public/karola.webp";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ثبت نام",
  description: "ثبت نام در سیستم نوبت دهی آنلاین",
};

export default function RegisterPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen overflow-hidden">
      {/* LEFT SIDE: Register Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto grid w-full max-w-[400px] gap-6">
          {/* Header */}
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              ایجاد حساب کاربری
            </h1>
            <p className="text-balance text-muted-foreground">
              اطلاعات خود را برای عضویت وارد کنید
            </p>
            <div className="mt-1 text-center text-sm text-muted-foreground">
              قبلا ثبت نام کرده‌اید؟{" "}
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary font-medium"
              >
                وارد شوید
              </Link>
            </div>
          </div>

          {/* The Form Component */}
          <RegisterForm />
        </div>
      </div>

      {/* RIGHT SIDE: Visual/Image (Hidden on mobile) */}
      <div className="hidden bg-muted lg:block relative h-full w-full">
        <Image
          src={karola}
          alt="Register Background"
          fill
          className="h-full w-full object-cover dark:brightness-[0.7]"
          priority
        />
        {/* Optional Overlay Text */}
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12 text-white">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium leading-relaxed">
              &ldquo;عضویت در این سیستم اولین قدم برای نظم‌دهی به برنامه‌های
              کاری شماست.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
