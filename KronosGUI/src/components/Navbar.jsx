import { useNavigate } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Logo from "/Logo.jfif";

const Navbar = ({mapName}) => {
    const navigate = useNavigate();
    const options = [
        { value: 'shadows-of-evil', label: 'Shadows of Evil' },
        { value: 'der-eisendrache', label: 'Der Eisendrache' },
        { value: 'gorod-krovi', label: 'Gorod Krovi' }
    ];
    const defaultOption = 'Choose a Map';

    const handleDropdownChange = (option) => {
        navigate(`/${option.value}`);
    };

    return (
        <>
            <div className="navbar w-full h-[12vh] p-2 bg-zinc-500 flex shadow-md shadow-gray-400">
                <div className="flex justify-center w-1/12">
                    <img className="rounded-full" src={Logo} />
                </div>

                <div className="flex justify-between items-center w-10/12">
                    <div>{mapName}</div>
                    <div>
                        <ul className="flex gap-12">
                            <button className="hover:text-sky-700" onClick={() => navigate("/")}>Home</button>
                            <Dropdown options={options} onChange={handleDropdownChange} value={defaultOption} />
                            <button className="hover:text-sky-700" onClick={() => navigate("/")}>About</button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;