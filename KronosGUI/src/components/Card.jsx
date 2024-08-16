import SOE from "/SOE-thumb.webp";

const Card = () => {
    return (
        <>
            <div className="flex flex-col w-[45%] h-[80vh] border-2 rounded shadow-lg">
                <div>
                    <img className="rounded-t" src={SOE} />
                </div>

                <div className="flex justify-center p-4">
                    <p className="font-serif text-[32px]">Shadows of Evil</p>
                </div>
    
                <div className="flex flex-col h-full justify-between items-center pb-8">
                    <p>Shadows of Evil is the eighteenth (chronologically third) Zombies map. It is the first Zombies map in Call of Duty: Black Ops III. The setting takes place in the fictional city of Morg City, from the 1940s, where it introduces four new characters, Nero Blackstone, Jessica Rose, Jack Vincent and Floyd Campbell as they are transported to a nightmarish realm by the Shadow Man, a supernatural being, leader of the Apothicons.</p>
                    <button className="w-2/12 h-1/6 border-2">BOTAO</button>
                </div>
            </div>
        </>
    )
}

export default Card;