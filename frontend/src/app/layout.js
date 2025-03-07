import 'normalize.css';
import './globals.css';
import ThemeProviders from '@/context/theme-providers';
import Header from '@/components/Header/Header';
import siteMetadata from '@/data/siteMetadata';
import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Footer from '@/components/Footer/Footer';
import ClientBody from '@/components/ClientBody/ClientBody';

const rubik = Rubik({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-rubik',
});

const teko = localFont({
    src: './fonts/TekoRegular.ttf',
    variable: '--font-teko',
});

const trixie = localFont({
    src: './fonts/TrixieCyr-Plain.ttf',
    variable: '--font-trixie',
});

export const metadata = {
    title: siteMetadata.siteTitle,
    description: siteMetadata.description,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${rubik.variable} ${teko.variable} ${trixie.variable} scrollbar-thin`} suppressHydrationWarning>
        <ClientBody>
            <ThemeProviders>
                <PageWrapper>
                    <Header />
                    {children}
                    <Footer />
                </PageWrapper>
            </ThemeProviders>
        </ClientBody>
        </html>
    );
}