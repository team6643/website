import Button from "../components/Button";
import baxterLogo from "../assets/baxter.svg";
import dpiLogo from "../assets/dpi.svg";
import { useNavigate } from "@solidjs/router";
import homeImage from "../assets/image1.jpg";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div class="grid grid-cols-2 justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[50px] my-16 lg:my-32 px-10 max-w-[1500px]">
                <img class="flex-grow-0 flex-shrink-0 max-w-[560px] h-[350px] bg-[#d9d9d9] rounded-xl col-span-2 lg:col-span-1" src={homeImage} />
                <div class="flex flex-col justify-start items-start flex-grow overflow-hidden gap-[50px] col-span-2 lg:col-span-1">
                    <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                        <p class="self-stretch flex-grow-0 flex-shrink-0 lg:text-[64px] text-5xl leading-16 font-medium text-left text-black">
                            Welcome to Team 6643
                        </p>
                        <p class="self-stretch flex-grow-0 flex-shrink-0 text-2xl text-left text-black">
                            {/* This content is currently being updated. Please check back later. */}
                            Racine, WI
                        </p>
                    </div>
                    <Button onClick={() => navigate("/about")}>Learn more</Button>
                </div>
            </div>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 bg-[#d4c6ff] px-5">
                <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                        Top sponsors
                    </p>
                    <div class="grid grid-cols-2 justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[100px]">
                        <a href="https://dpi.wi.gov/stem/grants/robotic-league" class="col-span-2 lg:col-span-1 flex justify-center"><img src={dpiLogo} alt="dpi logo" class="w-[571px] h-[138px]" /></a>
                            
                        <a href="https://www.baxter.com/" class="col-span-2 lg:col-span-1 flex justify-center"><img src={baxterLogo} alt="baxter logo" class="w-[418px] h-[72px]" /></a>
                    </div>
                    <Button onClick={() => navigate("/sponsors")}>See more</Button>
                </div>
            </div>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5 my-16 lg:my-32 px-5">
                <p class="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-black">About us</p>
                <p class="flex-grow-0 flex-shrink-0 max-w-[600px] text-xl text-center text-black">
                    We are a student-led organization working to drive positive change in the world by introducing
                    opportunities to youth to learn about the possibilities made available through STEM.
                </p>
                <Button onClick={() => navigate("/about")}>See more</Button>
            </div>
        </>
    );
};

export default Home;