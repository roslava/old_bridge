import Image from "next/image";
import PrjazhkaImg from "./img/VLK_prjazhka.gif";

export default function Prjazhka(){
    return(
        <div className="w-[339px] rounded-[14px] overflow-hidden bg-red-400">
            <Image
                src={PrjazhkaImg}
                width={339}
                height={224}
                alt="Монета"
            />
        </div>
    )
}