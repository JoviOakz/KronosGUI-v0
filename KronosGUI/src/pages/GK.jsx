import Navbar from "../components/Navbar";
import GKContent from "../components/GKContent";
import Footer from "../components/Footer";

const GK = () => {
    return (
        <>
            <div className="min-h-[86vh]">
                <Navbar />
                <GKContent />
                <Footer />
            </div>
        </>
    )
}

export default GK;