"use client";

import { Employee } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Edit2, Trash2 } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// For initials avatar
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: "Employee",
    cell: ({ row }) => {
      const employee = row.original;
      const fullName = `${employee.firstName} ${employee.lastName}`;
      return (
        <div className="flex items-center gap-3 min-w-[180px] max-w-[220px]">
          {/* Avatar Circle */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold shrink-0">
            {getInitials(fullName)}
          </div>
          <div className="overflow-hidden">
            <div className="font-semibold truncate">{fullName}</div>
            <div className="text-xs text-muted-foreground truncate">
              ID: {employee.employeeCode || employee.id}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) =>
      row.original.department ? (
        <Badge variant="secondary" className="truncate max-w-[120px]">
          {row.original.department}
        </Badge>
      ) : (
        "-"
      ),
  },
  {
    accessorKey: "designation",
    header: "Designation",
    cell: ({ row }) => (
      <span className="truncate max-w-[150px] block">
        {row.original.designation || "-"}
      </span>
    ),
  },
  {
    id: "contact",
    header: "Contact",
    cell: ({ row }) => (
      <div className="space-y-1 text-sm max-w-[220px] overflow-hidden">
        {row.original.email && (
          <div className="flex items-center gap-1 truncate">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate">{row.original.email}</span>
          </div>
        )}
        {row.original.phone && (
          <div className="flex items-center gap-1 truncate">
            <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate">{row.original.phone}</span>
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "dateOfJoining",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hire Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) =>
      row.original.dateOfJoining ? (
        <div className="flex items-center gap-1 whitespace-nowrap">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          {new Date(row.original.dateOfJoining).toLocaleDateString()}
        </div>
      ) : (
        "-"
      ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status ?? "unknown";
      return (
        <Badge
          variant={status === "active" ? "default" : "outline"}
          className={`truncate max-w-[90px] ${
            status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex gap-2">
        <Button size="icon" variant="ghost">
          <Edit2 className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="ghost">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];
