import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SpinnerIsSubmitting } from "@/components/ui/isSubmittigSpinner";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import LoginSubmitFn from "./LoginSubmitFn";

const LoginCredentials = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    LoginSubmitFn();
  return (
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
          <a href="#" className="text-xs text-primary hover:underline">
            فراموشی رمز؟
          </a>
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

      {isSubmitting ? (
        <SpinnerIsSubmitting text="در حال ورود به حساب " />
      ) : (
        <Button
          type="submit"
          className="w-full mt-2 disabled:cursor-not-allowed disabled:opacity-90"
          disabled={isSubmitting}
        >
          ورود به حساب
        </Button>
      )}
    </form>
  );
};

export default LoginCredentials;
