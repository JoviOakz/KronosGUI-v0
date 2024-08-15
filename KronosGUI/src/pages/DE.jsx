import Navbar from "../components/Navbar";
import DEContent from "../components/DEContent";
import Footer from "../components/Footer";

const DE = () => {
    return (
        <>
            <div>
                <Navbar mapName="Der Eisendrache" />
                <DEContent />
                <Footer />
            </div>
        </>
    )
}

export default DE;