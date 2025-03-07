'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import StoryCard from "@/components/StoryCard/StoryCard";
import FactModal from "@/components/FactModal/FactModal";

export default function StoryInDetail({ years }) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFact, setSelectedFact] = useState(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const openModal = (fact) => {
        setSelectedFact(fact);
        console.log('fact fact', fact);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative pb-[40px]">
            {years.map((year) => (
                year.facts.length > 0 && (
                    <div className="relative" key={year.id}>
                        <div id={`${year.Year+'-id'}`} className={`custom-pseudo before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[4px] 
                              before:bg-gradient-to-r
                              dark:before:from-old-white dark:before:to-thm-background-dark-2
                              before:from-thm-background-dark-2 before:to-from-old-white 
                              after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0
                              after:h-[4px] after:bg-gradient-to-r 
                              dark:after:from-old-white dark:after:to-thm-background-dark-2
                              after:from-thm-background-dark-2 after:to-from-old-white  
                              pt-[6px]  my-[20px] ${resolvedTheme === 'dark' ? 'border-old-white' : 'border-thm-foreground-light'}`}>
                            <h3 className="text-h4 md:text-h3 leading-none font-family_heading dark:text-old-white">{year.Year}</h3>
                        </div>
                        <div className="grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                            {year.facts.map((fact) => (
                                <div key={fact.id}>
                                    <StoryCard fact={fact} openModal={openModal} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            ))}

            {/* Modal window */}
            <FactModal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedFact={selectedFact}
            />
        </div>
    );
}