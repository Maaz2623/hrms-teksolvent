import React from 'react'
import StatCard from '../components/ui/stat-card'
import { Building, Calendar, ChartColumn, Clock, UserCheck, Users, Zap } from 'lucide-react'
import NotificationItem from '../components/ui/notification-item'
import QuickActionItem from '../components/ui/quick-action-item'

export default function AdminDashboardView() {
    return (
        <div className='space-y-6'>

            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h1 className='text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Dashboard</h1>
                <p className="text-muted-foreground mt-2">Welcome to your HRMS dashboard. Overview of your organization&apos;s performance.</p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
                <StatCard
                    title='Total Employees'
                    data={156}
                    Icon={Users}
                />
                <StatCard
                    title='Total Departments'
                    data={8}
                    Icon={Building}
                />
                <StatCard
                    title='Pending Leave Requests'
                    data={23}
                    Icon={Calendar}
                />
                <StatCard
                    title='Present Today'
                    data={142}
                    Icon={UserCheck}
                />
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
                <div className="rounded-lg border bg-card text-card-foreground shadow-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2'>
                            <Clock className='size-5' />
                            Recent Activity
                        </h3>
                    </div>
                    <div className='p-5 pt-0'>
                        <div className='space-y-4'>
                            <NotificationItem
                                title="Sarah Wilson Submitted sick leave request"
                                time="5 minutes ago"
                                status="pending"
                            />
                            <NotificationItem
                                title="John Doe Submitted vacation request"
                                time="2 hours ago"
                                status="approved"
                            />
                            <NotificationItem
                                title="MIchael Chen Submitted casual leave request"
                                time="1 day ago"
                                status="rejected"
                            />
                            <NotificationItem
                                title="Marketing department budget updated"
                                time="2 days ago"
                            />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                            <Zap className='size-5' /> Quick Actions
                        </h3>
                    </div>

                    <div className='p-6 pt-0'>
                        <div className='grid gap-3'>
                            <QuickActionItem title={'Add New Employee'} Icon={Users} />
                            <QuickActionItem title={'Create Department'} Icon={Building} />
                            <QuickActionItem title={'Review Leave Requests'} Icon={Calendar} />
                            <QuickActionItem title={'View Attendance Reports'} Icon={ChartColumn} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
