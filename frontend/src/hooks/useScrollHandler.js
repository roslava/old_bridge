import { useState, useEffect } from 'react';

export default function useScrollHandler() {
    const [currentSegment, setCurrentSegment] = useState('');
    const [scrollPercent, setScrollPercent] = useState(0);

    const updateSegment = (percent) => {
        let newSegment = '';
        if (percent <= 20) {
            newSegment = 'A';
        } else if (percent <= 40) {
            newSegment = 'B';
        } else if (percent <= 60) {
            newSegment = 'C';
        } else if (percent <= 80) {
            newSegment = 'D';
        } else {
            newSegment = 'E';
        }

        if (newSegment !== currentSegment) {
            setCurrentSegment(newSegment);
        }

        const timeLine = document.getElementById('timeLine');
        if (timeLine) {
            timeLine.style.background = `linear-gradient(to right, #4CAF50 ${percent}%, #ddd ${percent}%)`;
        }
    };

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
            const delta = event.deltaY;
            const newScrollPercent = Math.min(Math.max(scrollPercent + delta * 0.1, 0), 100);
            setScrollPercent(newScrollPercent);
            updateSegment(newScrollPercent);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [scrollPercent]);

    return { currentSegment, scrollPercent, updateSegment };
}