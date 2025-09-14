'use client';
import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Bell, BookOpen, CircleQuestionMark, Clock, DollarSign, FileText, Home, LucideIcon, Target, User } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react'

type NavItem = {
    label: string;
    path: string; // relative path after /organization/[organizationId]
    icon: LucideIcon;
};

const navItems: NavItem[] = [
    { label: "Dashboard", path: "", icon: Home },
    { label: "profile", path: "profile", icon: User },
    { label: "attendance", path: "attendance", icon: Clock },
    { label: "payroll", path: "payroll", icon: DollarSign },
    { label: "requests", path: "requests", icon: FileText },
    { label: "performance", path: "performance", icon: Target },
    { label: "learninig", path: "learninig", icon: BookOpen },
    { label: "updates", path: "updates", icon: Bell },
    { label: "support", path: "support", icon: CircleQuestionMark },
];

export default function NavMain() {
    const pathname = usePathname();
    const { employeeId } = useParams<{ employeeId: string }>();
    return (
        <SidebarGroup>
            {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
            <SidebarMenu>
                {navItems.map((item, idx) => {
                    const href = `/employee/${employeeId}${item.path ? `/${item.path}` : ""}`;
                    const isActive = pathname === href;

                    return (
                        <SidebarMenuItem key={idx}>
                            <SidebarMenuButton
                                asChild
                                className={cn(
                                    "relative flex items-center gap-2 pl-3",
                                    "hover:bg-blue-500/90 hover:text-white",
                                    isActive
                                        ? "text-white font-bold bg-blue-500"
                                        : "text-muted-foreground hover:bg-muted hover:text-black"
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
    )
}
