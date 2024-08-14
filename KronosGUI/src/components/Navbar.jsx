import { useNavigate } from "react-router-dom";
import Logo from "../../public/Logo.jfif";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar w-full h-[7vh] bg-zinc-500 flex  shadow-md shadow-gray-400">
                <div className="flex justify-center w-1/12">
                    <img className="rounded-full" src={Logo} />
                </div>

                <div className="flex justify-between items-center w-10/12">
                    <div>
                        Shadows of Evil
                    </div>

                    <div>
                        <ul className="flex gap-10">
                            <li>Home</li>
                            <li>DROPDOWN</li>
                            <li>About</li>
                            BACKGROUNDIMAGE MANEIRA
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;