import React from 'react'
import StatCard from '../components/ui/stat-card'
import { Building, DollarSignIcon, PlusIcon, SearchIcon, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { columns } from '../components/departments-table/columns'
import { DataTable } from '../components/departments-table/data-table'
import { departmentsData } from '../components/departments-table/mock-data'

export default function DepartmentsManagementView() {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Department Management
                </h1>
                <p className="text-muted-foreground mt-2">
                    Organize your company structure and manage departmental information.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Departments" data={4} Icon={Building} />
                <StatCard title="Total Employees" data={97} Icon={Users} />
                <StatCard title="Avg Department Size" data={24} Icon={Building} />
                <StatCard title="Total Budget" data={"$5.7M"} Icon={DollarSignIcon} />
            </div>

            <div className="min-h-screen w-full border rounded-lg p-6 space-y-6">
                <div className="flex justify-between items-center w-full">
                    <h2 className="flex items-center">
                        <SearchIcon className="mr-2 size-7" />
                        <span className="text-2xl font-semibold">Department Directory</span>
                    </h2>
                    <Button>
                        <PlusIcon className="mr-2" />
                        <span>Add Department</span>
                    </Button>
                </div>
                <DataTable
                    columns={columns}
                    data={departmentsData ?? []}
                    isLoading={false}
                />
            </div>

        </div>
    )
}