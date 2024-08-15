import Navbar from "../components/Navbar";
import GKContent from "../components/GKContent";
import Footer from "../components/Footer";

const GK = () => {
    return (
        <>
            <div>
                <Navbar mapName="Gorod Krovi" />
                <GKContent />
                <Footer />
            </div>
        </>
    )
}

export default GK;