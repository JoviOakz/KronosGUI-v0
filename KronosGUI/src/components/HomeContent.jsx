import Background from "/Home-bg.png";
import Button from "./Button/Button";

const HomeContent = () => {
    return (
        <>
            <div>
                <div className="flex justify-center items-center h-[115vh] bg-cover" style={{ backgroundImage: `url(${Background})` }}>
                    <Button onClick={() => console.log("a de amo")}>Get Started</Button>
                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default HomeContent;