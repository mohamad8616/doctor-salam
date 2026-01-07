import { LayoutDashboard, Stethoscope, Users, Calendar, FileText, User, ClipboardList } from "lucide-react";

export const adminMenuItems = [
  {
    title: "داشبورد",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "پزشکان",
    href: "/admin/doctors",
    icon: Stethoscope,
  },
  {
    title: "بیماران",
    href: "/admin/patients",
    icon: Users,
  },
  {
    title: "نوبت‌ها",
    href: "/admin/appointments",
    icon: Calendar,
  },
];

export const doctorMenuItems = [
  {
    title: "داشبورد",
    href: "/doctor/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "نوبت‌ها",
    href: "/doctor/appointments",
    icon: Calendar,
  },
  {
    title: "نسخه‌ها",
    href: "/doctor/prescriptions",
    icon: FileText,
  },
  {
    title: "پروفایل",
    href: "/doctor/profile",
    icon: User,
  },
];

export const patientMenuItems = [
  {
    title: "داشبورد",
    href: "/patient/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "نوبت‌های من",
    href: "/patient/appointments",
    icon: Calendar,
  },
  {
    title: "رزرو نوبت",
    href: "/patient/book",
    icon: ClipboardList,
  },
];
