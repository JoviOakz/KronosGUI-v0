import Background from "/Home-bg.png";

const HomeContent = () => {
    return (
        <>
            <div>
                <div className="flex justify-center items-center h-[115vh] bg-cover" style={{ backgroundImage: `url(${Background})` }}>
                    <button>Get Started</button>
                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default HomeContent;