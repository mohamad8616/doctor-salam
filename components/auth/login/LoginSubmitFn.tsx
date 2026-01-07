import { signIn } from "@/lib/actions";
import { loginSchema, type LoginInput } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginSubmitFn = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const formdata = new FormData();
      formdata.append("email", data.email);
      formdata.append("password", data.password);
      const result = await signIn(formdata);

      if (result.status === "error") {
        setError("root", { message: "خطایی رخ داد. لطفا دوباره تلاش کنید." });
        return;
      }

      const role = result?.role?.toLowerCase();

      // Redirect based on user role
      router.push(`${role}/dashboard`);
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("root", { message: "خطایی رخ داد. لطفا دوباره تلاش کنید." });
    }
  };
  return { register, handleSubmit, onSubmit, errors, isLoading , isSubmitting};
};

export default LoginSubmitFn;
