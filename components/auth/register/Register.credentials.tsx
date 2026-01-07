"use client";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SpinnerIsSubmitting } from "@/components/ui/isSubmittigSpinner";
import { Label } from "@/components/ui/label";
import { Password } from "../../ui/password";
import RegisterSubmitFn from "./RegisterSubmitFn";

const RegisterCredentials = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    RegisterSubmitFn();
  return (
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
          <Password id="password" {...register("password")} />
          {errors.password && (
            <p className="text-sm text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">تکرار رمز عبور</Label>
          <Password id="confirmPassword" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <p className="text-sm text-destructive">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {isSubmitting ? (
          <SpinnerIsSubmitting text="در حال ثبت نام" />
        ) : (
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            ثبت نام
          </Button>
        )}
      </form>
    </CardContent>
  );
};

export default RegisterCredentials;
