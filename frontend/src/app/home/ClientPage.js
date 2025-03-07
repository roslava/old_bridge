'use client';
import { useState } from 'react';
import TimeLine from '@/components/Timeline/Timeline';
import useScrollHandler from '@/hooks/useScrollHandler';
import useSegmentClick from '@/hooks/useSegmentClick';
import ShowBlock from '@/components/ShowBlock/ShowBlock';

export default function Home({homeScreens, photoLensSlides}) {
    const { currentSegment, scrollPercent, updateSegment } = useScrollHandler();
    const { handleSegmentClick } = useSegmentClick(updateSegment);

    return (
        <div className="flex flex-col items-center justify-between min-h-[100vh] overflow-hidden pb-[10px]">
            <ShowBlock homeScreens={homeScreens} photoLensSlides={photoLensSlides} currentSegment={currentSegment} />
            <TimeLine onSegmentClick={handleSegmentClick} />
        </div>
    );
}