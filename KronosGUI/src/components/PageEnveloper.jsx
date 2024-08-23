import Navbar from "./Navbar";
import Footer from "./Footer";

const PageEnveloper = ({ children, navProps }) => {
    return (
        <>
            <Navbar {...navProps} />
            {children}
            <Footer />
        </>
    )
}

export default PageEnveloper;