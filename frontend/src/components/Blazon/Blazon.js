import Stavropol_logo from "./img/Stavropol_logo.webp";
import Image from "next/image";

export default function Blazon(){
    return(
        <>
            <Image
                src={Stavropol_logo}
                width={200}
                height={212}
                alt="Старинный Герб Ставрополя"
                // style={{
                //     position: "absolute",
                //     left: `-${coinPosition}px`,
                // }}
                // className={`mix-blend-multiply`}
            />
        </>
    )
}