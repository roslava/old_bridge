import siteMetadata from '@/data/siteMetadata'
import Link from "next/link";
import MobileNav from '@/components/MobileNav/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch'

const Header = () => {
    let headerClass = 'flex items-center w-full bg-thm-background-light-90 dark:bg-thm-background-dark/90  shadow-inner-custom-light dark:shadow-inner-custom-dark justify-between py-[10px] px-[20px] drop-shadow-xl backdrop-blur'
    if (siteMetadata.stickyNav) {
        headerClass += ' sticky top-0 z-[50]'
    }
    return (
        <header className={`${headerClass} border-b border-b-[1px] border-b-white/5`}>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                    <div className="mr-8">
                        {/*<Logo />*/}
                    </div>
                    {typeof siteMetadata.headerTitle === 'string' ? (
                        <div className="h-6 font-semibold sm:block">
                            {siteMetadata.headerTitle}
                        </div>
                    ) : (
                        siteMetadata.headerTitle
                    )}
                </div>
            </Link>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                <div
                    className="hidden items-center space-x-4 md:flex sm:space-x-6 mt-[3px] tracking-[2px] text-thm-background-dark-90 dark:text-old-white">

                    <Link
                        className="block text-xl uppercase font-family_heading dark:hover:text-white hover:text-thm-background-dark"
                        href="/"> Главная </Link>
                    <Link
                        className="block text-xl uppercase font-family_heading  dark:hover:text-white hover:text-thm-background-dark"
                        href="/photo-gallery"> Фотогалерея </Link>
                    <Link
                        className="block text-xl uppercase font-family_heading dark:hover:text-white hover:text-thm-background-dark"
                        href="/story-in-detail"> История в деталях </Link>
                    <Link
                        className="block text-xl uppercase font-family_heading dark:hover:text-white hover:text-thm-background-dark"
                        href="/location"> Как добраться </Link>
                </div>
                {/*<SearchButton />*/}
                <ThemeSwitch/>
                <MobileNav/>
            </div>
        </header>
    )
}

export default Header