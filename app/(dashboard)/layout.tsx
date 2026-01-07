import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  const session = await getSession();
  if (!session?.session) redirect("/login");

  const userRole = session.role!;

  return (
    <div className="flex h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar role={userRole} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
