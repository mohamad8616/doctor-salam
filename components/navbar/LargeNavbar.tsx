import { Session } from "@/lib/types";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import ModeToggle from "../theme/ThemeToggle";
import { Button } from "../ui/button";
import { navItems } from "./Navbar";

const LargeNavbar = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  const role = session?.user?.role;
  return (
    <nav className="hidden md:flex items-center justify-between px-6 py-1 border-b bg-background sticky top-0 right-0 z-50">
      <div className="flex items-center gap-6">
        <Logo />

        <div className="flex items-center gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />

        {session ? (
          <Link href={`${role?.toLowerCase()}/dashboard`}>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              پنل کاربری
            </Button>
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                ورود
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">ثبت نام</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LargeNavbar;
