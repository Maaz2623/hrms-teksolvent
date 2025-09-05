export type Leave = {
    id: string,
    employee: {
        id: string,
        name: string,
    },
    leaveType: string,
    createdAt: Date,
    fromDate: Date,
    toDate: Date,
    priority: "low" | "normal" | "high",
    status: "Manager Review" | "Approved" | "Rejected" | "Pending",
};

export type LeavesType = Leave[];

export const mockLeavesData: LeavesType = [
    {
        id: "L001",
        employee: {
            id: "E001",
            name: "Alice Johnson",
        },
        leaveType: "Annual Leave",
        createdAt: new Date("2025-08-15"),
        fromDate: new Date("2025-09-10"),
        toDate: new Date("2025-09-14"),
        priority: "normal",
        status: "Approved",
    },
    {
        id: "L002",
        employee: {
            id: "E002",
            name: "Bob Smith",
        },
        leaveType: "Sick Leave",
        createdAt: new Date("2025-09-01"),
        fromDate: new Date("2025-09-02"),
        toDate: new Date("2025-09-05"),
        priority: "high",
        status: "Manager Review",
    },
    {
        id: "L003",
        employee: {
            id: "E003",
            name: "Charlie Brown",
        },
        leaveType: "Work From Home",
        createdAt: new Date("2025-09-03"),
        fromDate: new Date("2025-09-06"),
        toDate: new Date("2025-09-06"),
        priority: "low",
        status: "Pending",
    },
    {
        id: "L004",
        employee: {
            id: "E004",
            name: "Diana Prince",
        },
        leaveType: "Maternity Leave",
        createdAt: new Date("2025-07-20"),
        fromDate: new Date("2025-09-01"),
        toDate: new Date("2025-12-01"),
        priority: "high",
        status: "Approved",
    },
    {
        id: "L005",
        employee: {
            id: "E005",
            name: "Ethan Hunt",
        },
        leaveType: "Casual Leave",
        createdAt: new Date("2025-09-04"),
        fromDate: new Date("2025-09-08"),
        toDate: new Date("2025-09-09"),
        priority: "normal",
        status: "Rejected",
    },
];
