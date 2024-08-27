import { useEffect } from "react";
import PageEnveloper from "../components/PageEnveloper";

const DE = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <PageEnveloper navProps={{ mapName: "Der Eisendrache", isHome: false }}>
            <div className="min-h-[92vh]">

            </div>
        </PageEnveloper>
    )
}

export default DE;