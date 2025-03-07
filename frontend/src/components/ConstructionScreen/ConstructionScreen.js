import BackgroundImg from "@/components/BackgroundImg/BackgroundImg";
export default function ConstructionScreen({homeScreens}) {
    return (
        <>
            <div className="absolute z-[1] inset-0 flex flex-col items-center py-[80px]">
                <div className="max-w-[1536px] w-full min-h-full p-[23px] flex flex-1">
                    <h1 className="md:text-h1 text-6xl font-family_heading uppercase ">{homeScreens[0].title}</h1>
                </div>
            </div>
            <BackgroundImg src={homeScreens[0].media[0].url} alt="троительство железной дороги"/>
        </>
    )
}