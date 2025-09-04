import { LucideProps } from 'lucide-react'
import React from 'react'

type StatCardProp = {
    title: string;
    data: number | string;
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
};

export default function StatCard({ title, data, Icon }: StatCardProp) {
    return (
        <div className='rounded-lg border bg-card text-card-foreground shadow border-l-4 border-l-primary/20'>
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-muted-foreground">{title}</h3>
                <div className='p-2 bg-primary rounded'>
                    <Icon className='size-4 text-primary-foreground' />
                </div>
            </div>
            <div className="p-6 pt-0">
                <div className='text-2xl font-bold'>{data}</div>
            </div>
        </div>
    )
}
