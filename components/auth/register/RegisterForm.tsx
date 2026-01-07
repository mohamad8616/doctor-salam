"use client";
import { Card } from "@/components/ui/card";
import LoginSocialProvider from "../login/Login.social.provider";
import RegisterCredentials from "./Register.credentials";

export function RegisterForm() {
  return (
    <Card className="w-full max-w-md mx-auto p-8 space-y-5">
      {/* Login Social Providers */}
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

      {/* Register Credentials */}
      <RegisterCredentials />
    </Card>
  );
}
