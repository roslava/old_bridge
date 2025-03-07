'use client';

import { usePathname } from 'next/navigation';

export default function ClientBody({ children }) {
    const pathname = usePathname();

    return (
        <body className={`${pathname === '/' ? 'overflow-hidden' : ''} bg-thm-background-light text-thm-foreground-light dark:bg-thm-background-dark dark:text-thm-foreground-dark`}>
        {children}
        </body>
    );
}