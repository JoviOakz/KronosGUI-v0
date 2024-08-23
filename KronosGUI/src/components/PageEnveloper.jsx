import Navbar from "./Navbar";
import Footer from "./Footer";

const PageEnveloper = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default PageEnveloper;