'use client';

import { ThemeProvider } from 'next-themes';
import siteMetadata from '@/data/siteMetadata';

export default function ThemeProviders({ children }) {
    const theme = siteMetadata.theme || 'system';
    return (
        <ThemeProvider attribute="class" defaultTheme={theme} enableSystem>
            {children}
        </ThemeProvider>
    );
}