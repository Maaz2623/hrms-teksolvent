"use client";

import { Building2 } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useParams } from "next/navigation";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

export function CompanySwitcher() {
  const { organizationId } = useParams<{ organizationId: string }>();
  const trpc = useTRPC();

  const {
    data: organization,
    isLoading,
    isError,
  } = useQuery(
    trpc.organizations.getOrganization.queryOptions({
      organizationId: organizationId as string,
    })
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="flex items-center gap-2 cursor-default"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Building2 className="size-4" />
          </div>

          <div className="grid flex-1 text-left text-sm leading-tight">
            {isLoading ? (
              <>
                <Skeleton className="h-4 w-32 rounded" />
                <Skeleton className="h-3 w-20 rounded mt-1" />
              </>
            ) : isError ? (
              <>
                <span className="truncate font-medium">Unknown company</span>
                <span className="text-xs text-red-500">
                  Error fetching data
                </span>
              </>
            ) : (
              <>
                <span className="truncate font-medium">
                  {organization?.name}
                </span>
                <span className="text-xs text-muted-foreground">Admin</span>
              </>
            )}
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
