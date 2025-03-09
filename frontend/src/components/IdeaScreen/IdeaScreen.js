import BackgroundImg from "@/components/BackgroundImg/BackgroundImg";
import LeadIdea from "@/components/leads/LeadIdea/LeadIdea"
import IdeaMap from "@/components/IdeaMap/IdeaMap";
import PrjazhkaPlusOldCoin from "@/components/PrjazhkaPlusOldCoin/PrjazhkaPlusOldCoin";
import ShellRock from "@/components/ShellRock/ShellRock";
import SteamEngineWheel from "@/components/SteamEngineWheel/SteamEngineWheel";
import PhotoLens from "@/components/PhotoLens/PhotoLens";
import { useState } from 'react';
import ImgSrc from "@/assets/img/Stavropol-railway-station_1905.jpg"
import ToolTipBox from "@/components/ToolTipBox/ToolTipBox";
import RegularTextBlock from "@/components/RegularTextBlock/RegularTextBlock";
import VladikavkazRailwayMap from "@/assets/img/Vladikavkaz_Railway_1899.webp"
import Modal from "@/components/Modal/Modal";

// photoLensSlides - массив объектов. В каждом объекте есть src. Надо чтобы при повороте колеса перебирался масив photoLensSlides, и  через определенный градус src из очередного объекта передавалось в <PhotoLens src={src} к качестве пропса/>

export default function IdeaScreen({homeScreens, photoLensSlides = []}) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalType, setModalType] = useState('text');
    const [modalCaption, setModalCaption] = useState('');

    const handleRotationChange = (slideIndex) => {
        if (photoLensSlides.length > 0) {
            setCurrentSlideIndex(slideIndex % photoLensSlides.length);
        }
    };

    const handleReadMore = () => {
        setModalType('text');
        setModalContent(homeScreens[4].full_text);
        setIsModalOpen(true);
    };

    const handleMapClick = () => {
        setModalType('image');
        setModalContent(VladikavkazRailwayMap);
        setModalCaption('Схематическая карта Владикавказской железной дороги');
        setIsModalOpen(true);
    };

    // Use default image if no slides are available or current slide has no url
    const currentImageUrl = photoLensSlides.length > 0 
        ? (photoLensSlides[currentSlideIndex]?.url || ImgSrc)
        : ImgSrc;

    // Get current caption or default text
    const currentCaption = photoLensSlides.length > 0 
        ? (photoLensSlides[currentSlideIndex]?.caption || "")
        : "";

    return (
        <>
            <div className="absolute z-[1] inset-0 flex flex-col items-center py-[80px]">
                <div className="relative max-w-[1536px] w-full min-h-full p-[23px] flex flex-col flex-1">
                    <h1 className="md:text-h1 text-6xl font-family_heading uppercase">{homeScreens[4].title}</h1>
                    <div className="flex w-full justify-between">
                        <div className="w-1/3 space-y-[20px]">
                            <LeadIdea text={homeScreens[4].lead}/>
                            <div onClick={handleMapClick} className="cursor-pointer">
                                <IdeaMap/>
                            </div>
                            <RegularTextBlock text={homeScreens[4].part_of_the_text} handleReadMore={handleReadMore}/>
                                     </div>
                        <div className="relative w-[520px] h-[478px]">
                            <div className="absolute z-[0] -left-[450px] -top-[210px]">
                                <SteamEngineWheel 
                                    photoLensSlides={photoLensSlides}
                                    onRotationChange={handleRotationChange}
                                />
                            </div>
                            <div className="absolute z-[9]">
                                <PrjazhkaPlusOldCoin/>
                            </div>
                            <div className="z-[0] absolute top-[70px] right-[9px]">
                                <ShellRock/>
                            </div>
                            <div className="-ml-[100px] h-[403px] w-[411px] z-10 absolute -bottom-[50px]">
                                <PhotoLens src={currentImageUrl}/>
                            </div>
                        </div>
                        <div className="absolute z-[10] top-[250px] right-[550px] pointer-events-none font-trixie">
                            <ToolTipBox text={currentCaption}/>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundImg src={homeScreens[4].media[0].url} alt="Идея создания железной дороги"/>
            <Modal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                type={modalType}
                content={modalContent}
                imageCaption={modalCaption}
            />
        </>
    );
}