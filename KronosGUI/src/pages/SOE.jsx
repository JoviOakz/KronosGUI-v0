import Navbar from "../components/Navbar";
import SOEContent from "../components/SOEContent";
import Footer from "../components/Footer";

const SOE = () => {
    return (
        <>
            <div>
                <Navbar mapName="Shadows of Evil" />
                <SOEContent />
                <Footer />
            </div>
        </>
    )
}

export default SOE;