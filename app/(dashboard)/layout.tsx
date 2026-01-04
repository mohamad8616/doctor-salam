"use client";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/router";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (!session) return null;

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  const userRole = (session.user.role as string) || "patient";

  return (
    <div className="flex h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar role={userRole as "ADMIN" | "DOCTOR" | "PATIENT"} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
