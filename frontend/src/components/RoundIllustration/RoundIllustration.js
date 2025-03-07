import Image from "next/image";
import { useState, useEffect } from "react";

export default function RoundIllustration({ src, alt, width, d, className = '' }) {
    const [currentSrc, setCurrentSrc] = useState(src);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (src !== currentSrc) {
            setIsTransitioning(true);
            // После начала затухания старого изображения
            const timer = setTimeout(() => {
                setCurrentSrc(src);
                setIsTransitioning(false);
            }, 250); // Половина времени transition-duration

            return () => clearTimeout(timer);
        }
    }, [src, currentSrc]);

    return (
        <div
            style={{
                display: 'flex',
                width: `${d}px`,
                height: `${d}px`,
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image
                src={currentSrc}
                alt={alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes={`(max-width: ${width}px) 100vw, (max-width: ${width}px) 50vw, 33vw`}
                className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'} ${className}`}
            />
        </div>
    );
}
