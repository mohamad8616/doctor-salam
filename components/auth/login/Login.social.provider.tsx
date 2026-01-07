import { Button } from "@/components/ui/button";
import { signInGithub, signInGoogle } from "@/lib/auth-client";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
const LoginSocialProvider = () => {
  return (
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
  );
};

export default LoginSocialProvider;
