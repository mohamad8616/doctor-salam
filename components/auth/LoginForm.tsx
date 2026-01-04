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
import LoginSubmitFn from "./LoginSubmitFn";

export function LoginForm() {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    LoginSubmitFn();
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>ورود به حساب کاربری</CardTitle>
        <CardDescription>برای ادامه، وارد حساب کاربری خود شوید</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Error Message */}
          {errors.root?.message && (
            <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
              {errors.root?.message}
            </div>
          )}

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
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "در حال ورود..." : "ورود"}
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
