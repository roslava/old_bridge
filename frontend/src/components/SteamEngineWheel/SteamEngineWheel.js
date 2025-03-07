import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SteamEngineWheelImg from "./img/steam_engine_weel.webp";

export default function SteamEngineWheel({ photoLensSlides, onRotationChange }) {
    const [rotation, setRotation] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const wheelRef = useRef(null);
    const prevAngle = useRef(null);
    const velocity = useRef(0);
    const animationFrame = useRef(null);

    const getAngle = (x, y, centerX, centerY) => {
        return Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    };

    const handleMouseMove = (e) => {
        if (!isHovering || !wheelRef.current) return;

        const rect = wheelRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const currentAngle = getAngle(e.clientX, e.clientY, centerX, centerY);

        if (prevAngle.current !== null) {
            let delta = currentAngle - prevAngle.current;

            if (delta > 180) delta -= 360;
            if (delta < -180) delta += 360;

            setRotation(rotation + delta);
            velocity.current = delta;
        }

        prevAngle.current = currentAngle;
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        prevAngle.current = null;
        cancelAnimationFrame(animationFrame.current);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        prevAngle.current = null;
        startInertia();
    };

    const startInertia = () => {
        cancelAnimationFrame(animationFrame.current);

        const animate = () => {
            if (Math.abs(velocity.current) < 0.0001) {
                velocity.current = 0;
                return;
            }

            setRotation(prev => prev + velocity.current);
            velocity.current *= 0.800;
            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);
    };

    // Наблюдатель за вращением для смены слайдов
    useEffect(() => {
        if (!photoLensSlides?.length) return;

        const normalizedRotation = ((rotation % 360) + 360) % 360;
        const slideIndex = Math.floor(normalizedRotation / 60); // Меняем каждые 60 градусов
        const actualSlideIndex = slideIndex % photoLensSlides.length;
        
        onRotationChange(actualSlideIndex);
    }, [rotation, photoLensSlides, onRotationChange]);

    useEffect(() => {
        return () => cancelAnimationFrame(animationFrame.current);
    }, []);

    return (
        <div
            ref={wheelRef}
            className="flex w-[1100px] h-[1100px] max-w-[1100px] max-h-[1100px] rounded-[50%] overflow-hidden"
            style={{
                transform: `rotate(${rotation}deg)`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <Image src={SteamEngineWheelImg} width={1100} height={1100} alt="Колесо паровоза" />
        </div>
    );
}
