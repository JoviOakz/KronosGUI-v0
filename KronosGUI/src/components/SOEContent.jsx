import Marquee from "react-fast-marquee";
import Logo from "/Logo.jfif";

const SOEContent = () => {
    return (
        <>
            <div className="min-h-[81vh]">
                <Marquee>
                    <img className="h-[81vh]" src={Logo} />
                </Marquee>
            </div>
        </>
    )
}

export default SOEContent;