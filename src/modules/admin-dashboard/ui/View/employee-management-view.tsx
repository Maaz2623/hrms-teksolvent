"use client";

import {
  ActivitySquare,
  Building2Icon,
  DollarSignIcon,
  PlusIcon,
  SearchIcon,
  Users,
} from "lucide-react";
import StatCard from "../components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "../components/employee-table/data-table";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { columns } from "../components/employee-table/columns";
import { useState } from "react";
import { AddEmployeeSheet } from "../components/add-employee-sheet";

interface Props {
  organizationId: string;
}

export const EmployeeManagementView = ({ organizationId }: Props) => {
  const trpc = useTRPC();

  const [open, setOpen] = useState(false);

  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery(
    trpc.employees.getEmployees.queryOptions({
      organizationId: organizationId,
    })
  );

  const activeEmployees = employees?.filter(
    (emp) => emp.status === "active"
  ).length;

  return (
    <>
      <AddEmployeeSheet
        organizationId={organizationId}
        open={open}
        setOpen={setOpen}
      />
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-lg p-6 border border-primary/20">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Employee Management
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your organization&apos;s employees, their details, and
            employment information.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Employees"
            data={employees?.length ?? 0}
            Icon={Users}
          />
          <StatCard
            title="Active"
            data={activeEmployees ?? 0}
            Icon={ActivitySquare}
          />
          <StatCard title="Departments" data={23} Icon={Building2Icon} />
          <StatCard title="Avg Salary" data={14250000} Icon={DollarSignIcon} />
        </div>

        <div className="min-h-screen w-full border rounded-lg p-6 space-y-6">
          <div className="flex justify-between items-center w-full">
            <h2 className="flex items-center">
              <SearchIcon className="mr-2 size-7" />
              <span className="text-2xl font-semibold">Employee Directory</span>
            </h2>
            <Button onClick={() => setOpen(true)}>
              <PlusIcon className="mr-2" />
              <span>Add Employee</span>
            </Button>
          </div>
          <DataTable
            columns={columns}
            data={employees ?? []} // 👈 Fix: ensure it’s always an array
            isLoading={isLoading} // 👈 Pass loading state to table
          />
          {isError && (
            <div className="text-sm text-red-500 mt-2 max-w-[500px]">
              Failed to load employees.
            </div>
          )}
        </div>
      </div>
    </>
  );
};
