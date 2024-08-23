import PageEnveloper from "../components/PageEnveloper";
import Background from "../../public/Home-bg.png";
import Button from "../components/Button/Button"
import Card from "../components/Card";

const Home = () => {
    return (
        <PageEnveloper navProps={{ mapName: "KronosGUI" }}>
            <div>
                <div className="flex justify-center items-center h-[113vh] bg-cover" style={{ backgroundImage: `url(${Background})` }}>
                    <Button onClick={() => console.log("Teste")}>Get Started</Button>
                </div>

                <div className="min-h-[60vh] bg-slate-500">
                    <div className="flex justify-center p-12">
                        <p className="text-5xl font-serif">Searching for a map:</p>
                    </div>

                    <div className="flex flex-wrap justify-around gap-12 p-8">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </PageEnveloper>
    )
}

export default Home;