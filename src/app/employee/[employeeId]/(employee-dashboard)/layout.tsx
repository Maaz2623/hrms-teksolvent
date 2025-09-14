import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import EmployeeDashboardSidebar from '@/modules/employee-dashboard/ui/components/employee-dashboard-sidebar';
import { TopBar } from '@/modules/employee-dashboard/ui/components/top-bar';
import ForcedLight from '@/modules/employee-dashboard/ui/components/forced-light';

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <ForcedLight />
      <EmployeeDashboardSidebar />
      <SidebarInset>
        <div className="border-b w-full">
          <TopBar />
        </div>
        <main className="p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
