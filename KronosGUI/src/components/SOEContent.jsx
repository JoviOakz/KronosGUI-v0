import Marquee from "react-fast-marquee";
import Logo from "/Logo.jfif";

const SOEContent = () => {
    return (
        <>
            <div className="min-h-[92vh]">
                <Marquee>
                    <img className="h-[92vh]" src={Logo} />
                </Marquee>
            </div>
        </>
    )
}

export default SOEContent;