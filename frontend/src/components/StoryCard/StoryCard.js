import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StoryCard({ fact, openModal }) {
    const [showInfo, setShowInfo] = useState(false);

// console.log('rrr', fact.small_detail.url)
    return (
        <div
            onMouseOver={() => setShowInfo(true)}
            onMouseOut={() => setShowInfo(false)}
            className="relative bg-thm-background-light text-thm-foreground dark:bg-white text-thm-foreground p-0 flex flex-col rounded-md overflow-hidden shadow-md cursor-pointer"
        >
            {fact.cover && (
                <div id="infoBlock" className="h-full w-full aspect-square overflow-hidden">
                    <Image
                        src={fact.cover[0].url}
                        alt={fact.title}
                        width={600}
                        height={600}
                    />
                </div>
            )}

            {/* Блок с информацией */}
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        initial={{ y: '50%', opacity: 0 }} // Начальное состояние (снизу и прозрачный)
                        animate={{ y: 0, opacity: 1 }}     // Конечное состояние (на месте и непрозрачный)
                        exit={{ y: '100%', opacity: 0 }}   // Анимация при исчезновении
                        transition={{ duration: 0.5, ease: 'easeInOut' }} // Параметры анимации
                        className="absolute inset-0 bg-primary-orange-85 z-2 flex items-end backdrop-blur-sm
                        bg-[url('/img/bg-rep-line.png')]
                        "
                        onClick={() => openModal(fact)} // Вызов функции openModal
                    >
                        <div className="flex flex-col justify-end p-3 xl:p-6  absolute inset-0">
                            {/*<p className="leading-4 text-sm font-bold">{fact.lead}</p>*/}
                            <div className="hidden text-base mb-6 font-medium">Бла бла бла</div>
                            {/*<div*/}
                            {/*    className="h-5 rounded-[12px] w-20 bg-gradient-to-r from-thm-background-dark to-background-dark-orange mb-8 animate-gradient-x"></div>*/}
                            <h4 className="font-family_heading xl:text-h3 text-h4 uppercase text-old-white">{fact.title}</h4>
                            <motion.div
                                initial={{y: '90%', opacity: 0}}
                                animate={{y: '-70%', opacity: 1}}
                                // exit={{ y: '100%', opacity: 0 }}
                                transition={{duration: 1, ease: 'easeInOut'}}
                                className="w-20 h-20 rounded-full absolute top-20 transform-x-1/2 translate-x-1/2 border border-[8px] border-primary-orange drop-shadow-xlo"
                            >
                                <span
                                    className="animate-ping-slow absolute inline-flex inset-0 rounded-full bg-white opacity-75"></span>
                                <span
                                    className="absolute inline-flex inset-0 rounded-full overflow-hidden">

                                                {fact.small_detail !== null && (
                                                    <div id="infoBlock" className="h-full w-full aspect-square overflow-hidden">
                                                        <Image
                                                            src={fact.small_detail.url}
                                                            alt={fact.title}
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </div>
                                                )}
                                </span>

                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}