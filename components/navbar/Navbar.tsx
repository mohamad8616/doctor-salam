"use client";

import { authClient } from "@/lib/auth-client";

import { Home, Info, Search } from "lucide-react";

import LargeNavbar from "./LargeNavbar";
import SmallNavbar from "./SmallNavbar";
import { usePathname } from "next/navigation";

export const navItems = [
  {
    title: "خانه",
    href: "/",
    icon: Home,
  },
  {
    title: "جستجو",
    href: "/find",
    icon: Search,
  },
  {
    title: "درباره",
    href: "/about",
    icon: Info,
  },
];

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const pathname = usePathname();
  const isDashboard =
    pathname?.startsWith("/dashboard") ||
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/doctor") ||
    pathname?.startsWith("/patient");

  // Don't show navbar in dashboard pages
  if (isDashboard) {
    return null;
  }

  return (
    <>
      {/* Desktop Navbar */}
      <LargeNavbar session={session} />
      <SmallNavbar session={session} />
    </>
  );
};

export default Navbar;
