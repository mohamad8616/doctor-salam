"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  adminMenuItems,
  doctorMenuItems,
  patientMenuItems,
} from "./Dashboard.userItems";




export function Sidebar({ role }: {role:string}) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems =
    role === "ADMIN"
      ? adminMenuItems
      : role === "DOCTOR"
      ? doctorMenuItems
      : patientMenuItems;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div className="flex h-full w-64 flex-col border-l bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">منو</h2>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          خروج
        </Button>
      </div>
    </div>
  );
}
