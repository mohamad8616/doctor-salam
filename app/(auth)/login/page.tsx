import { LoginForm } from "@/components/auth/LoginForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به سیستم نوبت دهی آنلاین",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6">
        <LoginForm />
      </div>
    </div>
  );
}
