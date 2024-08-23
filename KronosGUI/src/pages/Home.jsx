import PageEnveloper from "../components/PageEnveloper";
import Background from "/Home-bg.png";
import GSButton from "../components/GetStartedButton/Button"
import InformationCard from "../components/InformationCard";

const Home = () => {
    return (
        <PageEnveloper navProps={{ mapName: "KronosGUI" }}>
            <div>
                <div className="flex justify-center items-center h-[113vh] bg-cover" style={{ backgroundImage: `url(${Background})` }}>
                    <GSButton onClick={() => console.log("Teste")}>Get Started</GSButton>
                </div>

                <div className="min-h-[60vh] bg-slate-500">
                    <div className="flex justify-center p-12">
                        <p className="text-5xl font-serif">Searching for a map:</p>
                    </div>

                    <div className="flex flex-wrap justify-around gap-12 p-8">
                        <InformationCard />
                        <InformationCard />
                        <InformationCard />
                    </div>
                </div>
            </div>
        </PageEnveloper>
    )
}

export default Home;