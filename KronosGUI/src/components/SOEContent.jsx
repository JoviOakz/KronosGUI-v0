import Marquee from "react-fast-marquee";
import Logo from "/Logo.jfif";

const SOEContent = () => {
    return (
        <>
            <div className="min-h-[86vh]">
                <Marquee>
                    <img className="h-[86vh]" src={Logo} />
                </Marquee>
            </div>
        </>
    )
}

export default SOEContent;