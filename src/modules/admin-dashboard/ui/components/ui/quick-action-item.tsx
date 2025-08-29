import { Button } from '@/components/ui/button';
import { LucideProps } from 'lucide-react';
import React from 'react'

type QuickActionItemProp = {
    title: string;
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};

export default function QuickActionItem({ title, Icon }: QuickActionItemProp) {
    return (
        <Button size={"lg"} variant={"ghost"} className='border p-4! h-auto justify-start cursor-pointer gap-4 '>
            <Icon className='size-5' />
            {title}
        </Button>
    )
}
