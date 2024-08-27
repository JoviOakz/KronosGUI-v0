import { useEffect } from "react";
import PageEnveloper from "../components/PageEnveloper";
import Marquee from "react-fast-marquee";
import Logo from "/Logo.jfif";

const SOE = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageEnveloper navProps={{ mapName: "Shadows of Evil", isHome: false }}>
            <div className="min-h-[92vh]">
                <Marquee>
                    <img className="h-[92vh]" src={Logo} />
                </Marquee>
            </div>
        </PageEnveloper>
    )
}

export default SOE;