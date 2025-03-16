import siteMetadata from '@/data/siteMetadata'
import Link from "next/link";
import MobileNav from '@/components/MobileNav/MobileNav'

const Header = () => {
    let headerClass = 'flex items-center w-full justify-between py-[10px] px-[20px]'
    if (siteMetadata.stickyNav) {
        headerClass += ' sticky top-0 z-[50]'
    }
    return (
        <header className={`${headerClass}`}>
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
            <div className="flex items-center">
                <MobileNav/>
            </div>
        </header>
    )
}

export default Header