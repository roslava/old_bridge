import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MapImg from "./img/Vladikavkaz_Railway_1899.avif";

export default function Map({ onClose }) {
    const [position, setPosition] = useState({ y: 0 });
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Блокируем прокрутку body
        document.body.style.overflow = "hidden";
        
        // Добавляем обработчик прокрутки на уровне документа
        const preventScrollHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };
        
        document.addEventListener('wheel', preventScrollHandler, { passive: false });
        
        // Очищаем при размонтировании
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener('wheel', preventScrollHandler);
        };
    }, []);

    const handleMouseMove = (event) => {
        const { clientY } = event;
        const container = containerRef.current;
        const image = imageRef.current;
        
        if (!container || !image) return;

        const containerRect = container.getBoundingClientRect();
        
        // Добавляем отступы от краёв (20% от высоты контейнера)
        const padding = containerRect.height * 0.2;
        const effectiveHeight = containerRect.height - (padding * 2);
        
        // Вычисляем позицию курсора относительно эффективной области (0 до 1)
        const relativeY = Math.max(0, Math.min(1, 
            (clientY - (containerRect.top + padding)) / effectiveHeight
        ));
        
        // Вычисляем высоту изображения после масштабирования по ширине контейнера
        const scale = containerRect.width / 2433;
        const scaledImageHeight = 1900 * scale;
        
        // Вычисляем максимальное смещение
        const maxOffset = scaledImageHeight - containerRect.height;
        
        // Вычисляем целевую позицию
        const targetY = -(relativeY * maxOffset);
        const clampedY = Math.max(Math.min(targetY, 0), -maxOffset);
        
        setPosition({ y: clampedY });
    };

    const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 z-[100] overflow-hidden"
            onWheel={preventScroll}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-[101] w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
                <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                    />
                </svg>
            </button>
            <div 
                ref={imageRef}
                className="absolute inset-0 w-full"
                onMouseMove={handleMouseMove}
                onTouchMove={(e) => handleMouseMove(e.touches[0])}
                onWheel={preventScroll}
            >
                <Image
                    src={MapImg}
                    alt="Карта"
                    width={2433}
                    height={1900}
                    style={{
                        transform: `translateY(${position.y}px)`,
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%'
                    }}
                    className="transition-transform duration-300 ease-out"
                />
            </div>
        </div>
    );
}
