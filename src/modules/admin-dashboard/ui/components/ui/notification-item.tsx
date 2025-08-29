import { Badge } from '@/components/ui/badge'
import React from 'react'

type NotificationItemProp = {
    title: string;
    time: string;
    status?: "approved" | "rejected" | "pending" | "none";
};

export default function NotificationItem({ title, time, status = "none" }: NotificationItemProp) {
    return (
        <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors'>
            <div className="size-2 bg-primary rounded-full" />
            <div className="flex-1">
                <p className="text-sm font-medium">{title}</p>
                <div className='flex items-center gap-2 mt-1'>
                    <p className="text-xs text-muted-foreground">{time}</p>
                    {status != "none" && <Badge
                        variant={status === "approved" ? "default" : status === "pending" ? "secondary" : "destructive"}
                    >
                        {status}
                    </Badge>}
                </div>
            </div>
        </div >
    )
}
