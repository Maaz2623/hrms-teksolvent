import { CircleCheckBig, CircleX, Clock, SearchIcon, PlusIcon, TrendingUp, Calendar } from 'lucide-react'
import React from 'react'
import StatCard from '../components/ui/stat-card'
import { Button } from '@/components/ui/button'
import { DataTable } from '../components/attendance-management-table/data-table'
import { columns } from '../components/attendance-management-table/columns'
import { mockAttendanceData } from '../components/attendance-management-table/mock-data'

export default function AttendanceManagementView() {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Attendance Management
                </h1>
                <p className="text-muted-foreground mt-2">
                    Monitor employee attendance, work hours, and generate comprehensive reports.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                <StatCard title="Present Today" data={4} Icon={CircleCheckBig} />
                <StatCard title="Absent Today" data={1} Icon={CircleX} />
                <StatCard title="Attendance Rate" data={"75%"} Icon={TrendingUp} />
                <StatCard title="Avg Work Hours" data={"8.5h"} Icon={Clock} />
            </div>

            <div className="min-h-screen w-full border rounded-lg p-6 space-y-6">
                <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                    <h2 className="flex items-center">
                        <SearchIcon className="mr-2 size-7" />
                        <span className="text-xl md:text-2xl font-semibold">Attendance Records</span>
                    </h2>
                    <div className='flex flex-wrap gap-2 items-center'>
                        <Button>
                            <Calendar className="mr-2" />
                            <span>View Calendar</span>
                        </Button>
                        <Button>
                            <PlusIcon className="mr-2" />
                            <span>New Record</span>
                        </Button>
                    </div>
                </div>
                <DataTable
                    columns={columns}
                    data={mockAttendanceData ?? []}
                    isLoading={false}
                />
            </div>
        </div>
    )
}
