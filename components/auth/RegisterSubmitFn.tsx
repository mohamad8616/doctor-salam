"use client";
import { signup } from "@/lib/actions";
import { registerSchema, type RegisterInput } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterSubmitFn = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isLoading },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInput) => {
    try {
      // Validate the form data
      const validatedData = registerSchema.parse(data);
      if (!validatedData) throw new Error("Invalid form data");

      //Create form data
      const formdata = new FormData();
      formdata.append("name", validatedData.name);
      formdata.append("email", validatedData.email);
      formdata.append("password", validatedData.password);

      // Call the signup action
      const result = await signup(formdata);

      // Handle the result
      if (result.status === "error") {
        setError("root", {
          message: "ثبت نام ناموفق بود. لطفا دوباره تلاش کنید",
        });

        return;
      }

      router.push("/");
    } catch (err) {
      // Handle the error
      console.error(err);
      setError("root", { message: "خطایی رخ داد. لطفا دوباره تلاش کنید." });
    }
  };

  return { register, handleSubmit, onSubmit, errors, isLoading };
};

export default RegisterSubmitFn;
