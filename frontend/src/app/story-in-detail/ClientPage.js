'use client'

import VerticalTimeLine from "@/components/VerticalTimeLine/VerticalTimeLine";
import StoryInDetail from "@/components/StoryInDetailBlock/StoryInDetailBlock";
import {useState} from "react";

export default function ClientPage({years}) {
    const [isVerticalTimeLineOpen, setIsVerticalTimeLineOpen] = useState(true);
    return (
        <div className="flex flex-col w-full items-center md:pt-[37px] pt-[30px]">
            <div
                className={`flex flex-row 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full pl-4 pr-4 ${isVerticalTimeLineOpen ? 'sm:pl-[120px]' : 'sm:pl-[50px]'}`}>
                <VerticalTimeLine isVerticalTimeLineOpen={isVerticalTimeLineOpen}
                                  setIsVerticalTimeLineOpen={setIsVerticalTimeLineOpen} years={years}/>
                <div className="">
                    <h1 className="md:text-h1 text-6xl font-family_heading uppercase">
                        История в деталях
                    </h1>
                    <StoryInDetail years={years}/>
                </div>
            </div>
        </div>
    );
}