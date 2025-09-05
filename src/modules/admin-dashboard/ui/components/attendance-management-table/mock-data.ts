export type Attendance = {
    id: string;
    employee: {
        id: string,
        name: string,
    },
    checkIn: Date | null;
    checkOut: Date | null;
    status: "absent" | "present" | "late";
}

export type AttendanceType = Attendance[];

export const mockAttendanceData: AttendanceType = [
    {
        id: "A001",
        employee: {
            id: "E001",
            name: "Alice Johnson",
        },
        checkIn: new Date("2025-09-05T09:00:00"),
        checkOut: new Date("2025-09-05T17:00:00"),
        status: "present", // normal 8 hrs
    },
    {
        id: "A002",
        employee: {
            id: "E002",
            name: "Bob Smith",
        },
        checkIn: new Date("2025-09-05T08:30:00"),
        checkOut: new Date("2025-09-05T18:30:00"),
        status: "present", // ✅ overworked 10 hrs
    },
    {
        id: "A003",
        employee: {
            id: "E003",
            name: "Charlie Brown",
        },
        checkIn: null,
        checkOut: null,
        status: "absent", // absent
    },
    {
        id: "A004",
        employee: {
            id: "E004",
            name: "Diana Prince",
        },
        checkIn: new Date("2025-09-05T09:15:00"),
        checkOut: null, // still working, pending
        status: "late",
    },
    {
        id: "A005",
        employee: {
            id: "E005",
            name: "Ethan Hunt",
        },
        checkIn: new Date("2025-09-05T07:45:00"),
        checkOut: new Date("2025-09-05T16:30:00"),
        status: "present", // worked 8.75 hrs → overtime
    },
];
