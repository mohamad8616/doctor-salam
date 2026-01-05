"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RegisterSubmitFn from "./RegisterSubmitFn";
import { Password } from "../ui/password";
import { signInGithub, signInGoogle } from "@/lib/auth-client";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";

export function RegisterForm() {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    RegisterSubmitFn();

  return (
    <Card className="w-full max-w-md mx-auto p-8 space-y-5">
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
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {errors.root && (
            <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
              {errors.root.message}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">نام</Label>
            <Input
              id="name"
              type="text"
              placeholder="نام و نام خانوادگی"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">رمز عبور</Label>
            <Password id="password"  {...register("password")} />
            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">تکرار رمز عبور</Label>
            <Password
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "در حال ثبت نام..." : "ثبت نام"}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
