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

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { label: "Employees", href: "/employees", icon: UsersIcon },
  { label: "Departments", href: "/departments", icon: BuildingIcon },
  { label: "Leave Management", href: "/leave-management", icon: CalendarIcon },
  { label: "Attendance", href: "/attendance", icon: UserCheckIcon },
];

export function NavMain() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                className={cn(
                  "relative flex items-center gap-2 pl-3",
                  isActive
                    ? "text-primary font-bold bg-muted before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-blue-500 before:rounded-r"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Link href={item.href}>
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
