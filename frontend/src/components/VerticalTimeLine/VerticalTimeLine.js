'use client';

import Link from "next/link";
import {useEffect, useState, useRef} from 'react';
import {ArrowLongRightIcon} from '@heroicons/react/24/solid'
import {XMarkIcon} from '@heroicons/react/24/solid'

export default function VerticalTimeLine({years, isVerticalTimeLineOpen, setIsVerticalTimeLineOpen}) {
    const [activeYear, setActiveYear] = useState(null); // Состояние для активного года
    const observerRef = useRef(null); // Ref для хранения Intersection Observer

    // Обработка клика по ссылке
    useEffect(() => {
        const handleAnchorClick = (event) => {
            const targetId = event.target.getAttribute('href').substring(1); // Получаем id элемента (без #)
            const targetElement = document.getElementById(targetId); // Находим элемент по id

            if (targetElement) {
                event.preventDefault(); // Отменяем стандартное поведение ссылки

                // Вычисляем позицию элемента с учетом отступа
                const offset = 125; // Отступ от верха
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                // Прокручиваем страницу до нужной позиции
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth', // Плавная прокрутка
                });
            }
        };

        // Находим все ссылки внутри блока с id="vertical-timeline-block"
        const links = document.querySelectorAll('#vertical-timeline-block a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', handleAnchorClick);
        });

        // Очищаем обработчики событий при размонтировании компонента
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    // Отслеживание видимости блоков с годами
    useEffect(() => {
        const handleIntersection = (entries) => {
            let topEntry = null;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Если блок виден, проверяем, является ли он самым верхним
                    if (!topEntry || entry.target.getBoundingClientRect().top < topEntry.target.getBoundingClientRect().top) {
                        topEntry = entry;
                    }
                }
            });

            if (topEntry) {
                const year = topEntry.target.id.replace('-id', ''); // Получаем год из id блока
                setActiveYear(year); // Устанавливаем активный год
            }
        };

        // Создаем Intersection Observer
        observerRef.current = new IntersectionObserver(handleIntersection, {
            root: null, // Отслеживаем относительно viewport
            rootMargin: '0px', // Отступы вокруг root
            threshold: 0.5, // Порог видимости (0.5 = 50% видимости элемента)
        });

        // Задержка для инициализации Observer после загрузки страницы
        const initObserver = setTimeout(() => {
            const yearBlocks = years.map((year) => document.getElementById(`${year.Year}-id`));
            yearBlocks.forEach((block) => {
                if (block) observerRef.current.observe(block);
            });
        }, 500); // Задержка 500 мс

        // Очищаем таймер и observer при размонтировании компонента
        return () => {
            clearTimeout(initObserver);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [years]);

    // Проверка видимости блоков при загрузке страницы
    useEffect(() => {
        const checkVisibleBlocks = () => {
            let topBlock = null;

            years.forEach((year) => {
                const block = document.getElementById(`${year.Year}-id`);
                if (block) {
                    const rect = block.getBoundingClientRect();
                    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                        // Если блок виден, проверяем, является ли он самым верхним
                        if (!topBlock || rect.top < topBlock.getBoundingClientRect().top) {
                            topBlock = block;
                        }
                    }
                }
            });

            if (topBlock) {
                const year = topBlock.id.replace('-id', ''); // Получаем год из id блока
                setActiveYear(year); // Устанавливаем активный год
            }
        };

        // Проверяем видимость блоков после загрузки страницы
        checkVisibleBlocks();

        // Добавляем обработчик для проверки видимости при прокрутке
        window.addEventListener('scroll', checkVisibleBlocks);

        // Очищаем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', checkVisibleBlocks);
        };
    }, [years]);

    return (
        <div id="vertical-timeline-block"
             className={`${isVerticalTimeLineOpen ? 'w-[80px] p-[10px]' : 'h-[90px] w-[30px] group '}  fixed top-[120px] bg-thm-background-dark left-[0] rounded-r-[16px] drop-shadow cursor-pointer border border-1 border-l-0 border-white/5 hidden sm:block`}>
            {isVerticalTimeLineOpen ?
                (<XMarkIcon
                    onClick={() => setIsVerticalTimeLineOpen(false)}
                    className="size-6 text-old-white/50 hover:text-old-white text-center w-full mb-[7px] cursor-pointer"/>) :
                (
                    <div
                        onClick={() => setIsVerticalTimeLineOpen(true)}
                        className="absolute inset-0 flex flex-col flex items-center">
                        <ArrowLongRightIcon
                            className="absolute -left-1 top-1 size-7 text-old-white/50 group-hover:text-primary-orange text-center mb-[7px]"/>
                        <div
                            className="absolute  bottom-[25px] -rotate-90 tracking-[3px] w-[50px] h-[20px] text-sm font-semibold text-old-white group-hover:text-white">
                            ГОДЫ
                        </div>
                    </div>
                )
            }
            {isVerticalTimeLineOpen && years.map((item) => (
                <div
                    key={item.Year + 'A'}
                    className='h-[32px] cursor-pointer relative'>
                    <div

                        className={`h-[32px] cursor-pointer relative `}
                    >
                        <Link
                            className={`${
                                activeYear === item.Year ? 'bg-deep-black-orange text-primary-orange font-medium group-hover:bg-primary-orange group-hover:text-deep-black-orange' : 'bg-deep-black text-old-white hover:text-white'
                            } w-full  text-center cursor-pointer absolute leading-0  px-[10px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full`}
                            href={`#${item.Year}-id`}
                        >
                            {item.Year}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}