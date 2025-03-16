'use client'

import Link from "next/link";
import {Dialog, Transition} from '@headlessui/react'
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock'
import {Fragment, useState, useEffect, useRef} from 'react'
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch'

const MobileNav = () => {
    const [navShow, setNavShow] = useState(false)
    const navRef = useRef(null)

    const onToggleNav = () => {
        setNavShow((status) => {
            if (status) {
                if (navRef.current) {
                    enableBodyScroll(navRef.current)
                }
            } else {
                if (navRef.current) {
                    disableBodyScroll(navRef.current, {
                        reserveScrollBarGap: true,
                    })
                }
            }
            return !status
        })
    }

    useEffect(() => {
        return () => {
            clearAllBodyScrollLocks()
        }
    }, [])

    return (
        <>
            <button aria-label="Toggle Menu" onClick={onToggleNav}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-8 w-8 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <Transition show={navShow} as={Fragment}>
                <Dialog as="div" onClose={onToggleNav} unmount={false}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        unmount={false}
                    >
                        <div className="fixed inset-0 z-60 bg-black/25"/>
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        leave="transition ease-in duration-200 transform"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="translate-x-full opacity-0"
                        unmount={false}
                    >
                        <Dialog.Panel className="fixed right-0 top-0 z-[1000] h-full w-[300px] bg-white dark:bg-gray-950 flex flex-col justify-between">
                            <div>
                                <nav
                                    ref={navRef}
                                    className="mt-8 flex flex-col items-start overflow-y-auto pl-12 pt-2 text-left"
                                >
                                    <Link onClick={onToggleNav}
                                          className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                                          href="/">Главная</Link>
                                    <Link onClick={onToggleNav}
                                          className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                                          href="/photo-gallery">Фотогалерея</Link>
                                    <Link onClick={onToggleNav}
                                          className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                                          href="/story-in-detail">История в деталях</Link>
                                    <Link onClick={onToggleNav}
                                          className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                                          href="/location">Как добраться</Link>
                                </nav>

                                <button
                                    className="fixed right-4 top-7 z-80 h-16 w-16 p-4 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                                    aria-label="Toggle Menu"
                                    onClick={onToggleNav}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mb-8 pl-12">
                                <ThemeSwitch />
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}

export default MobileNav