import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminDashboardSidebar } from "@/modules/admin-dashboard/ui/components/admin-dashboard-sidebar";
import { TopBar } from "@/modules/admin-dashboard/ui/components/top-bar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminDashboardSidebar />
      <SidebarInset>
        <div className="border-b w-full">
          <TopBar />
        </div>
        <main className="p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
