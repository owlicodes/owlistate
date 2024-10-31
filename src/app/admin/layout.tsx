import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "@/features/common/components/sidebar";
import { auth } from "@/lib/auth";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (session?.user.role !== "admin") {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarTrigger />
      <div className="w-full p-4">{children}</div>
    </SidebarProvider>
  );
}
