import bp from "/BP_2024.pdf";
import TeamLogo from "../assets/TeamPhoto.jpg";

const About = () => {
    return (
        <>
        
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 min-h-screen px-5">
                <div class="flex flex-col items-center max-w-5xl text-center gap-4">
                    <h1 class="text-4xl font-bold">About us</h1>
                    <p>
                        Team 6643 was founded in 2016 at Walden III High School in Racine, Wisconsin. We strive to provide students with opportunities to grow in their knowledge and understanding of science, technology, engineering, mathematics, business, leadership, and marketing. We also promote growth both as individuals and as a team. While we are competitive, we also believe in being gracious professionals at school, in our community, and at competitions. What's more, our team is completely youth-run.
                    </p>
                    <p>
                        <a href={bp} class="text-[#4b3995] underline"  target="_blank" rel="noopener noreferrer">Click here</a> to view our business plan for the 2025 season.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About; 
