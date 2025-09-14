import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, CircleAlert, Clock5, TrendingUp } from 'lucide-react'
import React from 'react'

export default function EmployeeDashboardView() {
    return (
        <section className='space-y-6'>
            <div className='bg-blue-500 rounded-xl p-4 sm:p-6 text-white shadow'>
                <h1 className='text-xl sm:text-2xl font-bold mb-2'>Welcome back, John!</h1>
                <p className='text-blue-100 text-sm sm:text-base'>Ready to make today productive? Here&apos;s what&apos;s happening in your workspace.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='rounded-lg border shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                    <div className='flex flex-col space-y-1.5 p-6 pb-3'>
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Quick Punch</h3>
                    </div>
                    <div className='p-6 pt-0'>
                        <div className="flex items-center justify-between">
                            <div className="">
                                <p className='text-xl sm:text-2xl font-bold text-green-500 block'>In</p>
                                <p className="text-xs text-muted-foreground">Last: 9:00 AM</p>
                            </div>
                            <Button className="bg-green-600 cursor-pointer hover:bg-green-500">
                                <Clock5 />
                                Punch Out
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='rounded-lg border shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                    <div className='flex flex-col space-y-1.5 p-6 pb-3'>
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Leave Balance</h3>
                    </div>
                    <div className='p-6 pt-0'>
                        <div className="">
                            <p className='text-xl sm:text-2xl font-bold text-blue-500 block'>24</p>
                            <div className='flex gap-2 items-center justify-between flex-wrap'>
                                <p className="text-xs text-muted-foreground">Casual: 12</p>
                                <p className="text-xs text-muted-foreground">Earned: 8</p>
                                <p className="text-xs text-muted-foreground">Sick: 4</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='rounded-lg border shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                    <div className='flex flex-col space-y-1.5 p-6 pb-3'>
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">Pending requests</h3>
                    </div>
                    <div className='p-6 pt-0'>
                        <div className="flex items-center justify-between">
                            <p className='text-xl sm:text-2xl font-bold text-orange-500 block'>3</p>
                            <div className="inline-flex gap-1 items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors bg-[#f59f0a]/10 text-[#f59f0a] border-[#f59f0a]/20 text-xs">
                                <CircleAlert className='size-3' />
                                Review
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rounded-lg border shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                    <div className='flex flex-col space-y-1.5 p-6 pb-3'>
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">This Month</h3>
                    </div>
                    <div className='p-6 pt-0'>
                        <div className="">
                            <p className='text-xl sm:text-2xl font-bold text-blue-500 block'>22/23</p>
                            <div className='flex gap-2 items-center justify-between flex-wrap mt-2'>
                                <div className='flex justify-between items-center w-full'>
                                    <p className="text-xs text-muted-foreground">Working Days</p>
                                    <p className="text-xs text-green-500">95.6%</p>
                                </div>
                                <Progress max={100} value={95} classNameIndicatior='bg-blue-500' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow lg:col-span-2">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                        <TrendingUp className='text-blue-500' />
                        Recent Activity
                    </h3>
                    <p className="text-sm text-muted-foreground">Your latest workplace activities</p>
                </div>

                <div className="p-6 pt-0">
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-4 p-3 rounded-lg bg-muted">
                            <div className='bg-green-500/10 text-green-500 p-2 rounded-full'><CheckCircle className='size-4' /></div>
                            <div className='flex-1'>
                                <p className="text-sm font-medium">Punched In</p>
                                <p className="text-xs text-muted-foreground">9:00 AM</p>
                            </div>
                            <Badge className='bg-blue-500 rounded-full'>Completed</Badge>
                        </div>
                    </div>
                </div>

                <div className="p-6 pt-0">
                    <div className='space-y-4'>
                        <div className="flex items-center space-x-4 p-3 rounded-lg bg-muted">
                            <div className='bg-green-500/10 text-green-500 p-2 rounded-full'><CheckCircle className='size-4' /></div>
                            <div className='flex-1'>
                                <p className="text-sm font-medium">Punched In</p>
                                <p className="text-xs text-muted-foreground">9:00 AM</p>
                            </div>
                            <Badge className='bg-blue-500 rounded-full'>Completed</Badge>
                        </div>
                    </div>
                </div>

            </div>


        </section >
    )
}
