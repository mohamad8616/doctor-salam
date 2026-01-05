import {
  FaAppleAlt,
  FaBook,
  FaBrain,
  FaCalendarAlt,
  FaChild,
  FaCut,
  FaEye,
  FaFemale,
  FaFlask,
  FaHeartbeat,
  FaHospitalAlt,
  FaMars,
  FaPills,
  FaQuestionCircle,
  FaRunning,
  FaStethoscope,
  FaUserMd,
  FaUsers,
  FaVenus
} from "react-icons/fa";

import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { FooterLink, SocialLink } from "./footer.types";

/* ---------------- Health Categories ---------------- */

export const HEALTH_CATEGORIES: FooterLink[] = [
  {
    id: 1,
    name: "تغذیه و رژیم درمانی",
    href: "/categories/nutrition",
    icon: <FaAppleAlt />,
  },
  {
    id: 2,
    name: "ورزش و تناسب اندام",
    href: "/categories/fitness",
    icon: <FaRunning />,
  },
  {
    id: 3,
    name: "سلامت روان",
    href: "/categories/mental-health",
    icon: <FaBrain />,
  },
  {
    id: 4,
    name: "سلامت خانواده",
    href: "/categories/family-health",
    icon: <FaUsers />,
  },
  {
    id: 5,
    name: "پیشگیری و مراقبت",
    href: "/categories/prevention",
    icon: <FaHeartbeat />,
  },
  {
    id: 6,
    name: "سلامت بانوان",
    href: "/categories/women-health",
    icon: <FaVenus />,
  },
  {
    id: 7,
    name: "سلامت مردان",
    href: "/categories/men-health",
    icon: <FaMars />,
  },
  {
    id: 8,
    name: "سلامت کودکان",
    href: "/categories/children-health",
    icon: <FaChild />,
  },
];

/* ---------------- Medical Specialties ---------------- */

export const MEDICAL_SPECIALTIES: FooterLink[] = [
  { id: 1, name: "داخلی", href: "/specialties/internal", icon: <FaUserMd /> },
  {
    id: 2,
    name: "قلب و عروق",
    href: "/specialties/cardiology",
    icon: <FaHeartbeat />,
  },
  {
    id: 3,
    name: "ارتوپدی",
    href: "/specialties/orthopedics",
    icon: <FaStethoscope />,
  },
  {
    id: 4,
    name: "گوارش",
    href: "/specialties/gastroenterology",
    icon: <FaStethoscope />,
  },
  {
    id: 5,
    name: "چشم پزشکی",
    href: "/specialties/ophthalmology",
    icon: <FaEye />,
  },
  {
    id: 6,
    name: "زنان و زایمان",
    href: "/specialties/gynecology",
    icon: <FaFemale />,
  },
  { id: 7, name: "اطفال", href: "/specialties/pediatrics", icon: <FaChild /> },
  { id: 8, name: "جراحی", href: "/specialties/surgery", icon: <FaCut /> },
];

/* ---------------- Useful Links ---------------- */

export const USEFUL_LINKS: FooterLink[] = [
  { id: 1, name: "مقالات سلامت", href: "/articles", icon: <FaBook /> },
  { id: 2, name: "پرسش و پاسخ پزشکی", href: "/qa", icon: <FaQuestionCircle /> },
  {
    id: 3,
    name: "نوبت دهی اینترنتی",
    href: "/appointment",
    icon: <FaCalendarAlt />,
  },
  { id: 4, name: "داروخانه آنلاین", href: "/pharmacy", icon: <FaPills /> },
  { id: 5, name: "تست آنلاین سلامت", href: "/tests", icon: <FaFlask /> },
  { id: 6, name: "بیمارستان‌ها", href: "/hospitals", icon: <FaHospitalAlt /> },
];

/* ---------------- Social Links ---------------- */

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 1, label: "اینستاگرام", href: "#", icon: <FaInstagram /> },
  { id: 2, label: "تلگرام", href: "#", icon: <FaTelegram /> },
  { id: 3, label: "توییتر", href: "#", icon: <FaTwitter /> },
  { id: 4, label: "لینکدین", href: "#", icon: <FaLinkedin /> },
  { id: 5, label: "یوتیوب", href: "#", icon: <FaYoutube /> },
];
