"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, User, CircleCheckBig, CircleX, Clock, Eye } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Leave } from "./mock-data";

export const columns: ColumnDef<Leave>[] = [
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
        accessorKey: "leaveType",
        header: "Employee",
        cell: ({ row }) => {
            const leave = row.original;
            return (
                <div className="flex items-center gap-3 min-w-[180px] max-w-[220px]">
                    {/* Avatar Circle */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground border font-bold shrink-0">
                        <User />
                    </div>
                    <div className="overflow-hidden">
                        <div className="font-semibold truncate">{leave.employee.name}</div>
                        <div className="text-xs text-muted-foreground truncate">
                            ID: {leave.employee.id}
                        </div>
                    </div>
                </div>
            );
        },
        filterFn: (row, columnID, filterValue) => {
            if (row.original.employee.name.toLowerCase().includes(filterValue.toLowerCase()))
                return true;
            return false;
        }
    },
    {
        accessorKey: "type",
        header: "Leave Type",
        cell: ({ row }) => (
            <div className="rounded border p-2 w-fit">
                {row.original.leaveType}
            </div>
        ),
    },
    {
        accessorKey: "period",
        header: "Period",
        cell: ({ row }) => (
            <div className="text-xs flex flex-col justify-center gap-2">
                <span suppressHydrationWarning>
                    {row.original.fromDate.toLocaleDateString()}
                    {" - "}
                    {row.original.toDate.toLocaleDateString()}
                </span>
                <span className="text-muted-foreground" suppressHydrationWarning>{"Applied: "}{row.original.createdAt.toLocaleDateString()}</span>
            </div>
        ),
    },
    {
        accessorKey: "days",
        header: "Days",
        cell: ({ row }) => (
            <span className="truncate max-w-[150px] block">
                {getLeaveDays(row.original)} Days
            </span>
        ),
    },
    {
        id: "priority",
        header: "Priority",
        cell: ({ row }) => {
            const varient = {
                "low": "outline",
                "normal": "secondary",
                "high": "destructive",
            } as const;
            return (<Badge variant={varient[row.original.priority]} className="capitalize">{row.original.priority}</Badge>)
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const leave = row.original;
            const Icon = leave.status === "Approved" ? CircleCheckBig : leave.status === "Rejected" ? CircleX : leave.status === "Pending" ? Clock : User;
            return (
                <div className="flex items-center gap-2">
                    <Icon className="size-4" />
                    <Badge variant="outline">{leave.status}</Badge>
                </div>
            )
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: () => (
            <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                    <Eye className="h-4 w-4" />
                </Button>
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

function getLeaveDays(leave: Leave): number {
    const oneDay = 1000 * 60 * 60 * 24;
    const diff = leave.toDate.getTime() - leave.fromDate.getTime();
    return Math.floor(diff / oneDay) + 1; // inclusive
}