import React from 'react'
import StatCard from '../components/ui/stat-card'
import { Users, Calendar, User, CircleCheckBig, CircleX, Clock, SearchIcon, PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DataTable } from '../components/leave-management-table/data-table'
import { columns } from '../components/leave-management-table/columns'
import { mockLeavesData } from '../components/leave-management-table/mock-data'

export default function LeaveManagementView() {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Leave Management
                </h1>
                <p className="text-muted-foreground mt-2">
                    Track and manage employee leave requests with comprehensive approval workflows.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
                <StatCard title="Total Requests" data={4} Icon={Calendar} />
                <StatCard title="Manager Review" data={4} Icon={User} />
                <StatCard title="HR Review" data={4} Icon={Users} />
                <StatCard title="Approved" data={4} Icon={CircleCheckBig} />
                <StatCard title="Rejected" data={4} Icon={CircleX} />
                <StatCard title="Total Days" data={4} Icon={Clock} />
            </div>

            <div className="min-h-screen w-full border rounded-lg p-6 space-y-6">
                <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                    <h2 className="flex items-center">
                        <SearchIcon className="mr-2 size-7" />
                        <span className="text-2xl font-semibold">Leave Requests</span>
                    </h2>
                    <Button>
                        <PlusIcon className="mr-2" />
                        <span>New Request</span>
                    </Button>
                </div>
                <DataTable
                    columns={columns}
                    data={mockLeavesData ?? []}
                    isLoading={false}
                />
            </div>
        </div>
    )
}
