'use client';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'

export default function ForcedLight() {
    const { setTheme, theme } = useTheme();
    useEffect(() => {
        if (theme != "light")
            setTheme("light");
    }, [theme, setTheme])
    return (<></>)
}
