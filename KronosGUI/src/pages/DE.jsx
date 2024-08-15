import Navbar from "../components/Navbar";
import DEContent from "../components/DEContent";
import Footer from "../components/Footer";

const DE = () => {
    return (
        <>
            <div className="min-h-[86vh]">
                <Navbar />
                <DEContent />
                <Footer />
            </div>
        </>
    )
}

export default DE;