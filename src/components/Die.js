import '../assets/style.css';

function Die(props) {
    return (
        <div className={`die box-border text-lg w-12 h-12 lg:w-16 lg:h-16 py-2 px-4 rounded-lg shadow-md lg:text-xl lg:py-4 lg:px-6 lg:rounded-xl font-extrabold cursor-pointer ${props.isHeld ? "bg-[#59E391]" : "bg-white"} flex justify-center items-center`} onClick={props.holdDice}>
            {
                props.value == 1 &&
                <div className="dot-container w-full flex flex-col rotate-45 justify-center items-center">
                    <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                </div>
            }

            {
                props.value == 2 &&
                <div className="dot-container w-full flex flex-col rotate-45 justify-center items-center">
                    <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                    <div className="die-dot box-border w-2 h-2 bg-black rounded-full mt-1"></div>
                </div>
            }

            {
                props.value == 3 &&
                <div className="dot-container box-border w-full flex flex-col rotate-45 justify-center items-center">
                    <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                    <div className="die-dot box-border w-2 h-2 bg-black rounded-full mt-1"></div>
                    <div className="die-dot box-border w-2 h-2 bg-black rounded-full mt-1"></div>
                </div>
            }

            {
                props.value == 4 &&
                <div className="dot-container box-border w-full flex flex-col justify-center items-center">
                    <div className="row-1 box-border flex">
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full ml-1"></div>
                    </div>

                    <div className="row-2 box-border flex mt-1">
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full ml-1"></div>
                    </div>
                </div>
            }

            {
                props.value == 5 &&
                <div className="dot-container box-border w-full flex flex-col justify-center items-center">
                    <div className="row-1 box-border flex">
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full ml-1"></div>
                    </div>

                    <div className="row-2 box-border flex mt-[0.10rem]">
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    <div className="row-3 box-border flex mt-[0.10rem]">
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full ml-1"></div>
                    </div>
                </div>
            }

            {
                props.value == 6 &&
                <div className="dot-container box-border w-full flex flex-col justify-center items-center">
                    <div className="row-1 box-border flex">
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full ml-1"></div>
                    </div>

                    <div className="row-2 box-border flex mt-1">
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full ml-1"></div>
                    </div>

                    <div className="row-3 box-border flex mt-1">
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full"></div>
                        <div className="die-dot box-border w-2 h-2 bg-black rounded-full ml-1"></div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Die;