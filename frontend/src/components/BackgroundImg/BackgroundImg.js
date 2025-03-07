import Image from "next/image";
import useMousePosition from "@/hooks/useMousePosition";

export default function BackgroundImg({src, alt}){
    const {x, y} = useMousePosition();
    return(

            <Image
                src={src}
                alt={alt}
                width={900}
                height={900}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) translate(${x * 0.01}px, ${y * 0.01}px)`,
                    minWidth: '105%',
                    minHeight: '105%',
                    objectFit: 'cover',
                    filter: 'blur(7px)',
                    zIndex: '0',
                }}
                className="rounded-lg"
            />

    )
}