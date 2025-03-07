// components/ShowBlock.js
import DefaultScreen from "@/components/DefaultScreen/DefaultScreen";
import { segmentComponents } from "@/components/SegmentComponents/SegmentComponents";

export default function ShowBlock({homeScreens, currentSegment, photoLensSlides }) {
    // Выбираем компонент по значению currentSegment
    const SegmentComponent = segmentComponents[currentSegment];

    return (
        <div
            id="ShowBlock"
            className="flex justify-center mb-[40px] flex-1 w-full"
        >
            <div>
                {SegmentComponent ? <SegmentComponent homeScreens={homeScreens} photoLensSlides={photoLensSlides} /> : <DefaultScreen />}
            </div>
        </div>
    );
}