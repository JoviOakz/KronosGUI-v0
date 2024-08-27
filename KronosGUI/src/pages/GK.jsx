import { useEffect } from "react";
import PageEnveloper from "../components/PageEnveloper";

const GK = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <PageEnveloper navProps={{ mapName: "Gorod Krovi", isHome: false }}>
            <div className="min-h-[92vh]">

            </div>
        </PageEnveloper>
    )
}

export default GK;