import Marquee from "react-fast-marquee";
import Logo from "/Logo.jfif";

const SOEContent = () => {
    return (
        <>
            <div className="min-h-[86vh]">
                <Marquee>
                    <img src={Logo} />
                </Marquee>
            </div>
        </>
    )
}

export default SOEContent;