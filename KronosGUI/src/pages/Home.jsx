import PageEnveloper from "../components/PageEnveloper";
import Background from "/Home-bg.png";
import Button from "../components/GetStartedButton/Button"
import InformationCard from "../components/InformationCard";
import SOE from "/SOE-thumb.png";
import DE from "/DE-thumb.webp";
import TG from "/TG-thumb.jfif";
import ZS from "/ZS-thumb.jpg";
import GK from "/GK-thumb.jpg"

const Home = () => {
    return (
        <PageEnveloper navProps={{ mapName: "KronosGUI" }}>
            <div>
                <div className="flex justify-center items-center h-[113vh] bg-cover" style={{ backgroundImage: `url(${Background})` }}>
                    <a href="#shadowsOfEvil"><Button>Get started</Button></a>
                </div>

                <div className="h-[30vh] bg-[#091036]" />

                <div className="bg-gradient-to-b from-[#091036] from-5% via-[#384070] to-[#384070]">
                    <div className="flex flex-wrap justify-around gap-12 p-8">
                        <InformationCard id="shadowsOfEvil" mapName={"The Giant"} mapImage={TG}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt neque arcu, a tempor felis ullamcorper a. Etiam mattis blandit ipsum at ornare. Sed et libero non diam elementum faucibus. Nunc congue eget sapien sed cursus. Nullam massa est, eleifend at velit a, ullamcorper sodales nisi. Morbi volutpat rhoncus nisi sed semper. Vestibulum diam dui, scelerisque quis elit eget, imperdiet elementum nisl. Maecenas vulputate, nunc a congue condimentum, augue diam convallis felis, ac tempus dui nisl id odio. Etiam in ipsum porta est ultrices iaculis a nec risus. Donec elementum dui nunc, sed auctor nulla lobortis euismod. Vestibulum feugiat odio ac laoreet pharetra. Sed mollis ipsum augue, vitae consectetur diam posuere eget. Nam mattis leo at nisl mattis vestibulum. Vivamus gravida lacinia leo, nec facilisis nunc suscipit blandit. Nulla a augue quis est feugiat ornare non sit amet orci. Nullam ullamcorper enim eu nibh imperdiet, in vehicula nulla consequat.
                        </InformationCard>
                        <InformationCard id="shadowsOfEvil" mapName={"Shadows of Evil"} mapImage={SOE}>
                            Shadows of Evil is the eighteenth (chronologically third) Zombies map. It is the first Zombies map in Black Ops 3. The setting takes place in the fictional city of Morg City, from the 1940s, where it introduces four new characters, Nero Blackstone, Jessica Rose, Jack Vincent and Floyd Campbell as they are transported to a nightmarish realm by the Shadow Man, a supernatural being, leader of the Apothicons.
                        </InformationCard>
                        <InformationCard mapName={"Der Eisendrache"} mapImage={DE}>
                            Der Eisendrache (The Iron Dragon) is the third Zombies map in Black Ops 3. The Primis crew must go to this elusive castle located in the Austrian Alps, in order to retrieve Ultimis Dempsey’s soul. This castle was occupied by members of Group 935 and was dubbed “Griffin Castle” by its members, two most notable members were Dr. Edward Richtofen and Dr. Maxis. The castle was used for rocket testing purposes as well as developing the Wunder Sphere and even creating a Death Ray.
                        </InformationCard>
                        <InformationCard mapName={"Zetsubou no Shima"} mapImage={ZS}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt neque arcu, a tempor felis ullamcorper a. Etiam mattis blandit ipsum at ornare. Sed et libero non diam elementum faucibus. Nunc congue eget sapien sed cursus. Nullam massa est, eleifend at velit a, ullamcorper sodales nisi. Morbi volutpat rhoncus nisi sed semper. Vestibulum diam dui, scelerisque quis elit eget, imperdiet elementum nisl. Maecenas vulputate, nunc a congue condimentum, augue diam convallis felis, ac tempus dui nisl id odio. Etiam in ipsum porta est ultrices iaculis a nec risus. Donec elementum dui nunc, sed auctor nulla lobortis euismod. Vestibulum feugiat odio ac laoreet pharetra. Sed mollis ipsum augue, vitae consectetur diam posuere eget. Nam mattis leo at nisl mattis vestibulum. Vivamus gravida lacinia leo, nec facilisis nunc suscipit blandit. Nulla a augue quis est feugiat ornare non sit amet orci. Nullam ullamcorper enim eu nibh imperdiet, in vehicula nulla consequat.
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