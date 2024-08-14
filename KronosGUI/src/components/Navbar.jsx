import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div>
                <div>
                    LOGO
                    NAME
                </div>
                
                <div>
                    BUTTONS
                    NAVIGATE
                </div>
            </div>
        </>
    )
}

export default Navbar;