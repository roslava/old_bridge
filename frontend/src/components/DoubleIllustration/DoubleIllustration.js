import StavropolRailwayStationIllustration
    from "@/components/StavropolRailwayStationIllustration/StavropolRailwayStationIllustration";
import TuapseRailwayStationIllustration
    from "@/components/TuapseRailwayStationIllustration/TuapseRailwayStationIllustration";

export default function DoubleIllustration(){
    return (
        <div className="flex relative min-w-[520px]">
            <div className="">
                <StavropolRailwayStationIllustration/>
            </div>
            <div className="absolute left-[240px]">
                <TuapseRailwayStationIllustration/>
            </div>
        </div>
    )
}