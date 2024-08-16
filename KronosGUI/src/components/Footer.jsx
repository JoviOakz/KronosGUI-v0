import Github from "/GitHub-icon.png";
import Instagram from "/Instagram-icon.png";

const Footer = () => {
    return (
        <>
            {/* shadow-[0_-4px_6px_-1px,0_-2px_4px_-2px] shadow-gray-400 */}
            <div className="flex flex-col justify-evenly items- footer w-full h-[22vh] bg-slate-800">
                <div className="flex justify-center flex-wrap gap-16 items-center">
                    <div className="w-80 h-[2px] bg-slate-200 opacity-50"></div>
                    <ul className="flex gap-8">
                        <img src={Github} />
                        <img src={Instagram} />
                    </ul>
                    <div className="w-80 h-[2px] bg-slate-200 opacity-50"></div>
                </div>

                <div className="flex justify-center flex-wrap gap-16 items-center">
                    <img src={Github} />
                </div>
            </div>
        </>
    )
}

export default Footer;