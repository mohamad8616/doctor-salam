import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("ایمیل معتبر نیست"),
  password: z.string().min(8, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    email: z.string().email("ایمیل معتبر نیست"),
    password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزهای عبور مطابقت ندارند",
    path: ["confirmPassword"],
  });

export const appointmentSchema = z.object({
  doctorId: z.string().min(1, "لطفا پزشک را انتخاب کنید"),

  // Single datetime used everywhere (API + Prisma)
  scheduledAt: z.coerce
    .date()
    .refine(
      (date) => date instanceof Date && !isNaN(date.getTime()),
      "لطفا تاریخ و زمان را انتخاب کنید"
    ),

  reason: z.string().optional(),
});

export const prescriptionSchema = z.object({
  appointmentId: z.string().min(1, "لطفا نوبت را انتخاب کنید"),
  diagnosis: z.string().optional(),
  medications: z.array(
    z.object({
      name: z.string().min(1, "نام دارو الزامی است"),
      dosage: z.string().optional(),
      frequency: z.string().optional(),
      duration: z.string().optional(),
    })
  ),
  instructions: z.string().optional(),
});

export const adminCreateUserSchema = z.object({
  name: z
    .string("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),
  email: z.email("Email is not valid"),
  password: z
    .string("Password is required")
    .min(6, "The password must be at least 6 characters long")
    .max(50, "The password must be at most 50 characters long"),
  role: z.enum(["PATIENT", "DOCTOR"]).optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type PrescriptionInput = z.infer<typeof prescriptionSchema>;
export type AdminCreateUserInput = z.infer<typeof adminCreateUserSchema>;
