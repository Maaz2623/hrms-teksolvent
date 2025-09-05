"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Building, Users } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Department } from "./mock-data";

export const columns: ColumnDef<Department>[] = [
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
        accessorKey: "name",
        header: "Department",
        cell: ({ row }) => {
            const department = row.original;
            return (
                <div className="flex items-center gap-3 min-w-[180px] max-w-[220px]">
                    {/* Avatar Circle */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground border font-bold shrink-0">
                        <Building />
                    </div>
                    <div className="overflow-hidden">
                        <div className="font-semibold truncate">{department.name}</div>
                        <div className="text-xs text-muted-foreground truncate">
                            ID: {department.id}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "manager",
        header: "Manager",
        cell: ({ row }) => row.original.manager ? (row.original.manager.name) : ("-"),
    },
    {
        accessorKey: "location",
        header: "Location",
        cell: ({ row }) => (
            <span className="truncate max-w-[150px] block">
                {row.original.location || "-"}
            </span>
        ),
    },
    {
        id: "employees",
        header: "Employees",
        cell: ({ row }) => (
            <div className="flex flex-row gap-2 text-sm overflow-hidden">
                <Users className="size-5" />
                {row.original.employees.length}
            </div>
        ),
    },
    {
        accessorKey: "budget",
        header: "budget",
        cell: ({ row }) => row.original.budget ? (<>{row.original.budget}</>) : ("-"),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status ?? "unknown";
            return (
                <Badge
                    variant={status === "active" ? "default" : "outline"}
                    className={`truncate max-w-[90px] ${status === "active"
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
