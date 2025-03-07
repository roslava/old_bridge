import { useState } from 'react';

export default function useSegmentClick(updateSegment) {
    const handleSegmentClick = (segment) => {
        let percent = 0;
        switch (segment) {
            case 'A':
                percent = 0;
                break;
            case 'B':
                percent = 25;
                break;
            case 'C':
                percent = 50;
                break;
            case 'D':
                percent = 75;
                break;
            case 'E':
                percent = 100;
                break;
            default:
                percent = 0;
        }

        updateSegment(percent);
    };

    return { handleSegmentClick };
}