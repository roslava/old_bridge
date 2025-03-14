import Image from "next/image";
import SmallLanternSlidesImg from './img/SmallLanternSlides.webp'
export default function SmallLanternSlides({src}){
    return(
        <>
            <div className="isolate relative w-[230px] h-[192px] overflow-hidden rounded-[6px] backdrop-blur-[1.5px]">

                    <Image
                        src={src}
                        unoptimized
                        width={250}
                        height={192}
                        alt="Small Lantern Slides"
                        className="absolute z-[6]  "
                        style={{ opacity: 0.7, mixBlendMode: "screen" }}
                    />

                <Image
                    src={SmallLanternSlidesImg}
                    unoptimized
                    width={250}
                    height={192}
                    alt="Small Lantern Slides"
                    // style={{mixBlendMode: "normal", opacity: 1}}
                    className="absolute z-[10]"
                />
            </div>
        </>
    )
}


// import Image from "next/image";
// import Stavropol_logo from "@/components/Blazon/img/Stavropol_logo.webp";
//
