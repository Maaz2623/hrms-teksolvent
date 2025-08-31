"use client";

import {
  BuildingIcon,
  CalendarIcon,
  HomeIcon,
  UserCheckIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItem = {
  label: string;
  path: string; // relative path after /organization/[organizationId]
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Dashboard", path: "", icon: HomeIcon },
  { label: "Employees", path: "employees", icon: UsersIcon },
  { label: "Departments", path: "departments", icon: BuildingIcon },
  { label: "Leave Management", path: "leave-management", icon: CalendarIcon },
  { label: "Attendance", path: "attendance", icon: UserCheckIcon },
];

export function NavMain() {
  const pathname = usePathname();
  const { organizationId } = useParams<{ organizationId: string }>();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => {
          const href = `/organization/${organizationId}${
            item.path ? `/${item.path}` : ""
          }`;
          const isActive = pathname === href;

          return (
            <SidebarMenuItem key={href}>
              <SidebarMenuButton
                asChild
                className={cn(
                  "relative flex items-center gap-2 pl-3",
                  isActive
                    ? "text-primary font-bold bg-muted before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-blue-500 before:rounded-r"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Link href={href}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
