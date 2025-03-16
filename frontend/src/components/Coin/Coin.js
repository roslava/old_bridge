import OldCoin from "./img/old_coin.gif";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Coin() {
    const faceViewStyle = `relative w-[100px] min-h-[100px] h-[100px] overflow-hidden rounded-[50px] cursor-pointer`;
    const [coinPosition, setCoinPosition] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        let timeout;

        if (isHovered) {
            // При наведении: сначала 100px, затем 200px
            setCoinPosition(100);
            timeout = setTimeout(() => {
                setCoinPosition(200);
            }, 100);
        } else {
            // При уходе: сначала 100px, затем 0px
            setCoinPosition(100);
            timeout = setTimeout(() => {
                setCoinPosition(0);
            }, 100);
        }

        // Очистка таймера при следующем вызове useEffect или размонтировании
        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [isHovered]); // Зависимость от состояния isHovered

    return (
        <div
            className={faceViewStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDragStart={(e) => e.preventDefault()}
        >
            <Image
                src={OldCoin}
                width={300}
                height={100}
                alt="Монета"
                style={{
                    position: "absolute",
                    left: `-${coinPosition}px`,
                         }}
                className={`absolute min-w-[300px] min-h-[100px] -left-[${coinPosition}px] shadow-lg`}
            />
        </div>
    );
}