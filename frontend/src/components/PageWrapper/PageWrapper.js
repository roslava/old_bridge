// frontend/src/components/PageWrapper/PageWrapper.js
'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function PageWrapper({ children }) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Не рендерить ничего до гидратации
    }

    return (
        <div className={`${resolvedTheme === 'dark' ? 'bg-thm-background-dark' : 'bg-thm-background-light'} flex flex-col min-h-[100vh] justify-between items-center`}>

            {children}

        </div>
    );
}