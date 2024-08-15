import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className="min-h-[86vh]">
                <Navbar />
                <HomeContent />
                <Footer />
            </div>
        </>
    )
}

export default Home;