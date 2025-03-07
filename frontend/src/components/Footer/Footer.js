'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/') {
        return null;
    }

    return (
        <div className="w-full h-[300px] bg-deep-black border-t-[1px] border-t-white/5 flex justify-center">
            <div className="flex justify-center items-end flex-row 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full pl-4 pr-4 pt-[30px]">
                <div className="hidden items-center space-x-4 md:flex sm:space-x-6 mt-[3px] tracking-[2px] h-[40px]">
                    <Link
                        className="block text-xl uppercase font-family_heading text-old-white hover:text-white"
                        href="/"
                    >
                        Главная
                    </Link>
                    <Link
                        className="block text-xl uppercase font-family_heading text-old-white hover:text-white"
                        href="/photo-gallery"
                    >
                        Фотогалерея
                    </Link>
                    <Link
                        className="block text-xl uppercase font-family_heading text-old-white hover:text-white"
                        href="/story-in-detail"
                    >
                        История в деталях
                    </Link>
                    <Link
                        className="block text-xl uppercase font-family_heading text-old-white hover:text-white"
                        href="/story-in-detail"
                    >
                        Как добраться
                    </Link>
                </div>
            </div>
        </div>
    );
}