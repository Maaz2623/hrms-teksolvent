"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, User, Eye } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Attendance } from "./mock-data";

export const columns: ColumnDef<Attendance>[] = [
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
        accessorKey: "employee",
        header: "Employee",
        cell: ({ row }) => {
            const attendance = row.original;
            return (
                <div className="flex items-center gap-3 min-w-[180px] max-w-[220px]">
                    {/* Avatar Circle */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground border font-bold shrink-0">
                        <User />
                    </div>
                    <div className="overflow-hidden">
                        <div className="font-semibold truncate">{attendance.employee.name}</div>
                        <div className="text-xs text-muted-foreground truncate">
                            ID: {attendance.employee.id}
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
        accessorKey: "checkin",
        header: "Check In",
        cell: ({ row }) => {
            const attendance = row.original;
            if (attendance.status === "absent" || !attendance.checkIn)
                return "-";
            return (formatDate(attendance.checkIn))
        },
    },
    {
        accessorKey: "checkout",
        header: "Check Out",
        cell: ({ row }) => {
            const attendance = row.original;
            if (attendance.status === "absent" || !attendance.checkOut)
                return "-";
            return (formatDate(attendance.checkOut))
        },
    },
    {
        accessorKey: "workhours",
        header: "Work Hours",
        cell: ({ row }) => (calculateWorkHours(row.original).totalHours),
    },
    {
        accessorKey: "overtime",
        header: "Overtime",
        cell: ({ row }) => (calculateWorkHours(row.original).overtime),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status ?? "unknown";
            return (
                <Badge
                    variant={"default"}
                    className={`truncate w-full max-w-[70px] capitalize ${status === "present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"}`}
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

function calculateWorkHours(attendance: Attendance) {
    if (attendance.status === "absent" || !attendance.checkIn) {
        return { totalHours: "-", overtime: "-" };
    }

    const checkOut = attendance.checkOut;

    if (!checkOut) {
        return { totalHours: "In Progress", overtime: "-" };
    }

    const msDiff = checkOut.getTime() - attendance.checkIn.getTime();
    const totalMinutes = Math.floor(msDiff / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const totalHoursStr = `${hours > 0 ? `${hours}h` : ""} ${minutes > 0 ? `${minutes}m` : ""}`;

    // Calculate overtime
    const overtimeMills = totalMinutes - 8 * 60;
    const overtimeHours = Math.floor(overtimeMills / 60);
    const overtimeMinutes = overtimeMills % 60;
    const overtimeStr =
        overtimeMills > 0
            ? `${overtimeHours > 0 ? `${overtimeHours}h` : ""} ${overtimeMinutes > 0 ? `${overtimeMinutes}m` : ""}`
            : "-";

    return {
        totalHours: totalHoursStr,
        overtime: overtimeStr,
    };
}


function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    }).format(date);
}