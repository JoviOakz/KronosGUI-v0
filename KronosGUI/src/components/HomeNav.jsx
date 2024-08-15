import { useNavigate } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Logo from "/Logo.jfif";

const Navbar = () => {
    const navigate = useNavigate();
    const options = [
        { value: 'shadows', label: 'Shadows of Evil' },
        { value: 'eisendrache', label: 'Der Eisendrache' },
        { value: 'krovi', label: 'Gorod Krovi' }
    ];
    const defaultOption = 'Choose a Map';

    const handleDropdownChange = (option) => {
        navigate(`/${option.value}`);
    };

    return (
        <>
            <div className="navbar w-full h-[9vh] top-2 flex fixed bg-transparent backdrop-blur-sm">
                <div className="flex justify-center w-1/12">
                    <img className="rounded-full" src={Logo} />
                </div>

                <div className="flex justify-between items-center w-10/12">
                    <div className="text-white">KronosGUI</div>
                    <div>
                        <ul className="flex gap-12">
                            <button className="hover:text-sky-700 text-white" onClick={() => navigate("/")}>Home</button>
                            <Dropdown options={options} onChange={handleDropdownChange} value={defaultOption} />
                            <button className="hover:text-sky-700 text-white" onClick={() => navigate("/")}>About</button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;