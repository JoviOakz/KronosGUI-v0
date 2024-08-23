import SOE from "/SOE-thumb.webp";
import Button from "./Button/Button";

const InformationCard = () => {
    return (
        <>
            <div className="flex flex-col w-[45%] h-[80vh] rounded-3xl bg-white shadow-md shadow-slate-600">
                <div>
                    <img className="rounded-t-3xl" src={SOE} />
                </div>

                <div className="flex justify-center p-4">
                    <p className="font-serif text-[32px]">Shadows of Evil</p>
                </div>

                <div className="flex flex-col h-full justify-between items-center pb-8">
                    <p className="flex pl-10 pr-10 text-justify">Shadows of Evil is the eighteenth (chronologically third) Zombies map. It is the first Zombies map in Call of Duty: Black Ops III. The setting takes place in the fictional city of Morg City, from the 1940s, where it introduces four new characters, Nero Blackstone, Jessica Rose, Jack Vincent and Floyd Campbell as they are transported to a nightmarish realm by the Shadow Man, a supernatural being, leader of the Apothicons.</p>
                    <Button onClick={() => console.log("Teste")}>Enter</Button>
                </div>
            </div>
        </>
    )
}

export default InformationCard;