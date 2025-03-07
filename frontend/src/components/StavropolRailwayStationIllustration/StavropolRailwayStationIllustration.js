import RoundIllustration from "@/components/RoundIllustration/RoundIllustration";
import ImgSrc from "./img/Stavropol-railway-station_1905.jpg"
export default function StavropolRailwayStationIllustration(){
    return(
        <>
            <RoundIllustration src={ImgSrc} height="800" width="1129" d={280} alt="Ставропоьский железнолорожный вокзал, 1905 год."/>
        </>
    )
}