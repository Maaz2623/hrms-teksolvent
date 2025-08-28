"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, Building2, Briefcase } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CompanySwitcher() {
  const { isMobile } = useSidebar();

  const [companies, setCompanies] = React.useState([
    {
      name: "Vanguox Technologies",
      logo: Building2,
    },
    {
      name: "Acme Corp",
      logo: Briefcase,
    },
  ]);

  const [activeCompany, setActiveCompany] = React.useState(companies[0]);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [newCompanyName, setNewCompanyName] = React.useState("");


  const handleCreateCompany = () => {
    if (!newCompanyName.trim()) return;

    const newCompany = {
      name: newCompanyName,
      logo: Building2,
    };

    setCompanies((prev) => [...prev, newCompany]);
    setActiveCompany(newCompany);
    setNewCompanyName("");
    setIsDialogOpen(false);
  };

  if (!activeCompany) return null;

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <activeCompany.logo className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {activeCompany.name}
                  </span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-muted-foreground text-xs">
                Companies
              </DropdownMenuLabel>
              {companies.map((company, index) => (
                <DropdownMenuItem
                  key={company.name}
                  onClick={() => setActiveCompany(company)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <company.logo className="size-3.5 shrink-0" />
                  </div>
                  {company.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="gap-2 p-2"
                onClick={() => setIsDialogOpen(true)}
              >
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">
                  Add company
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create a new company</DialogTitle>
            <DialogDescription>
              Add a company to manage employees, payroll and HR operations.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Company Name</Label>
              <Input
                id="name"
                value={newCompanyName}
                onChange={(e) => setNewCompanyName(e.target.value)}
                placeholder="Enter company name"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleCreateCompany}>Create</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
