import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./Navbar";
import SmallScreenToolbar from "./SmallScreenToolbar";
import { Session } from "@/lib/types";


 
const SmallNavbar = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Bottom Navbar */}
      <SmallScreenToolbar />

      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-background">
        <div className="grid grid-cols-4 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
          {session ? (
            <Link
              href="/dashboard"
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
                pathname?.startsWith("/dashboard") ||
                  pathname?.startsWith("/admin") ||
                  pathname?.startsWith("/doctor") ||
                  pathname?.startsWith("/patient")
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <User className="h-5 w-5" />
              <span>پنل</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-muted-foreground"
            >
              <User className="h-5 w-5" />
              <span>ورود</span>
            </Link>
          )}
        </div>
      </nav>

      {/* Spacer for mobile bottom navbar */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default SmallNavbar;
