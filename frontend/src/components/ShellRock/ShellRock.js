import Image from "next/image";
import ShellRockImg from "./img/shell-rock.gif";

export default function ShellRock() {
    return (
        <>
            <Image
                src={ShellRockImg}
                width={210}
                height={250}
                alt="ShellRock"
                className={`-rotate-[46deg] w-[auto]`}
            />
        </>
    )

}