import { useEffect } from "react";
import PageEnveloper from "../components/PageEnveloper";
import Background from "/Home-bg.png";
import GSButton from "../components/GetStartedButton/Button"
import InformationCard from "../components/InformationCard";
import SOE from "/SOE-thumb.png";
import DE from "/DE-thumb.webp";
import GK from "/GK-thumb.jpg"

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <PageEnveloper navProps={{ mapName: "KronosGUI" }}>
            <div>
                <div className="flex justify-center items-center h-[113vh] bg-cover" style={{ backgroundImage: `url(${Background})` }}>
                    <GSButton>Get Started</GSButton>
                </div>

                <div className="min-h-[60vh] bg-slate-500">
                    <div className="flex justify-center p-12">
                        <p className="text-5xl font-serif">Searching for a map:</p>
                    </div>

                    <div className="flex flex-wrap justify-around gap-12 p-8">
                        <InformationCard mapName={"Shadows of Evil"} mapImage={SOE}>
                            Shadows of Evil is the eighteenth (chronologically third) Zombies map. It is the first Zombies map in Black Ops 3. The setting takes place in the fictional city of Morg City, from the 1940s, where it introduces four new characters, Nero Blackstone, Jessica Rose, Jack Vincent and Floyd Campbell as they are transported to a nightmarish realm by the Shadow Man, a supernatural being, leader of the Apothicons.
                        </InformationCard>
                        <InformationCard mapName={"Der Eisendrache"} mapImage={DE}>
                            Der Eisendrache (The Iron Dragon) is the third Zombies map in Black Ops 3. The Primis crew must go to this elusive castle located in the Austrian Alps, in order to retrieve Ultimis Dempsey’s soul. This castle was occupied by members of Group 935 and was dubbed “Griffin Castle” by its members, two most notable members were Dr. Edward Richtofen and Dr. Maxis. The castle was used for rocket testing purposes as well as developing the Wunder Sphere and even creating a Death Ray.
                        </InformationCard>
                        <InformationCard mapName={"Gorod Krovi"} mapImage={GK}>
                            Gorod Krovi (City of Blood) is the fifth Zombies map in Black Ops 3. The four travel to a war-torn Stalingrad, in another alternate universe, during a massive battle between several Group 935 controlled Dragons and Russian Giant Robots in search for this universe's Nikolai Belinski.
                        </InformationCard>
                    </div>
                </div>
            </div>
        </PageEnveloper>
    )
}

export default Home;