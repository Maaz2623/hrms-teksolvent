export type Department = {
    id: string;
    name: string;
    manager: {
        id: string;
        name: string;
    };
    location: string;
    employees: {
        id: string;
        name: string;
    }[];
    budget: number;
    status: "active" | "inactive" | "pending";
};

export type DepartmentsDataType = Department[];

export const departmentsData: DepartmentsDataType = [
    {
        id: "D001",
        name: "Engineering",
        manager: { id: "M001", name: "Alice Johnson" },
        location: "New York",
        employees: [
            { id: "E001", name: "John Doe" },
            { id: "E002", name: "Emma Brown" },
        ],
        budget: 120000,
        status: "active",
    },
    {
        id: "D002",
        name: "Human Resources",
        manager: { id: "M002", name: "Michael Smith" },
        location: "San Francisco",
        employees: [
            { id: "E003", name: "Liam Wilson" },
            { id: "E004", name: "Sophia Miller" },
            { id: "E005", name: "Noah Davis" },
        ],
        budget: 95000,
        status: "pending",
    },
    {
        id: "D003",
        name: "Sales & Marketing",
        manager: { id: "M003", name: "Olivia Taylor" },
        location: "Chicago",
        employees: [
            { id: "E006", name: "James Anderson" },
            { id: "E007", name: "Isabella Thomas" },
        ],
        budget: 110000,
        status: "active",
    },
    {
        id: "D004",
        name: "Finance",
        manager: { id: "M004", name: "David Martinez" },
        location: "Austin",
        employees: [
            { id: "E008", name: "Mason Garcia" },
            { id: "E009", name: "Mia Rodriguez" },
        ],
        budget: 87000,
        status: "inactive",
    },
];
