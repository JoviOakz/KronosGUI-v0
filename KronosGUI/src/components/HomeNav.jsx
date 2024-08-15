import { useNavigate } from "react-router-dom";
import Logo from "/Logo.jfif";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar w-full h-[7vh] flex  shadow-md shadow-gray-400">
                <div className="flex justify-center w-1/12">
                    <img className="rounded-full" src={Logo} />
                </div>

                <div className="flex justify-between items-center w-10/12">
                    <div>
                        Shadows of Evil
                    </div>

                    <div>
                        <ul className="flex gap-16">
                            <button className="hover:text-sky-700">Home</button>
                            <button className="hover:text-sky-700">DROPDOWN</button>
                            <button className="hover:text-sky-700">About</button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;