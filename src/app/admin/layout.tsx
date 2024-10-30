import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "@/features/common/components/sidebar";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <Sidebar />

      <div>
        <SidebarTrigger />

        <div className="w-full p-4">{children}</div>
      </div>
    </SidebarProvider>
  );
}
