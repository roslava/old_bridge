import Image from "next/image";
import RailWayMap from "./img/Vladikavkaz_Railway_1899_Stavropol_small.png"
import RailWayMapWay from "./img/Vladikavkaz_Railway_1899_Stavropol_small_way.gif"

export default function IdeaMap() {
    return (
        <div className="relative w-full rounded-[8px] overflow-hidden aspect-[957/390] w-full">
            <Image
                src={RailWayMap}
                width={957}
                height={390}
                alt="Карта"
                className="w-full absolute z-1"/>
            <Image
                src={RailWayMapWay}
                width={957}
                height={390}
                alt="Путь"
                className="w-full absolute z-2 mix-blend-multiply animate-flicker"/>
        </div>
    )
}