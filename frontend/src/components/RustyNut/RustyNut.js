import Image from "next/image";
import RustyNutImg from "./img/RustyNut.png";

export default function RustyNut(){
    return(
        <>
            <Image
                src={RustyNutImg}
                width={90}
                height={224}
                alt="Монета"
            />
        </>
    )
}