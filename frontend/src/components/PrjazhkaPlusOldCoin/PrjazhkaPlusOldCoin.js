import Prjazhka from "@/components/Prjazhka/Prjazhka";
import OldCoin from "@/components/Coin/Coin";
import {useState} from "react";

export default function PrjazhkaPlusOldCoin(){
    const [rotateCoin, setRotateCoin] = useState(0)
       return (
        <div
            onMouseEnter={()=> setRotateCoin(20)}
            onMouseLeave={()=> setRotateCoin(0)}
            className="flex w-[343px] h-[228px] relative animate-float">

            <div

                className="absolute z-10 cursor-pointer">

                <Prjazhka/>
            </div>
            <div
                className="absolute z-20 -left-[50px] -top-[20px] h-[100px] w-[100px] flex justify-center"
                    style={{
                        transform: `rotate(${rotateCoin}deg)`,
                        transition: 'all 2s'
                    }}
                     >
                <OldCoin/>
            </div>
        </div>
    )
}