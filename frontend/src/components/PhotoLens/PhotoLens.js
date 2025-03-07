import RoundIllustration from "@/components/RoundIllustration/RoundIllustration";
import PhotoLensImg from "./img/photo_lens.webp";
import PhotoLensReflectionImg from "./img/photo_lens_reflection.webp";
import Image from "next/image";

export default function PhotoLens({src}) {
    return (
        <div className="relative w-[411px] h-[403px]">
            <div className="absolute top-0 left-0">
                <Image src={PhotoLensImg} width={411} height={403} alt="Объектив"/>
            </div>
            <div className="w-[281px] h-[281px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <RoundIllustration 
                    src={src} 
                    width={281} 
                    d={281} 
                    alt="123"
                    className="transition-opacity duration-500 ease-in-out" 
                />
            </div>
            <div className="w-[281px] h-[281px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={PhotoLensReflectionImg} width={281} height={281} alt="Отражение в объективе"/>
            </div>
        </div>
    )
}