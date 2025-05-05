
import baxterLogo from "../assets/baxter.svg";
import dpiLogo from "../assets/dpi.svg";
import educatorsLogo from "../assets/educators.svg";
import caseysLogo from "../assets/caseys.svg";
import northwesternMutualLogo from "../assets/northwestern-mutual.svg";
import scjLogo from "../assets/scj.svg";
import firstWisconsinLogo from "../assets/first-wisconsin.svg";
import hcbLogo from "../assets/hcb.svg";
import modineLogo from "../assets/modine.svg";
import ppgLogo from "../assets/ppg.svg";
import weLogo from "../assets/we.svg";
import Sponsor from "../components/Sponsor";
import findorffLogo from "../assets/findorff.svg";

const Sponsors = () => {
    return (
        <>
            <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 px-5">
                <div class="flex flex-col items-center max-w-5xl text-center gap-4">
                <h1 class="text-4xl font-bold">Sponsors</h1>
                <p>
                    Our team is extremely grateful for the support of our sponsors. We are proud to be sponsored by the following people and organizations.
                </p>
                <p>
                    If you are interested in sponsoring our team, please contact us at <a class="text-[#4b3995] underline" href="mailto:contact@team6643.org">contact@team6643.org</a>.
                </p>
                <p>
                    Alternatively, you can donate to our team by visiting the <a class="text-[#4b3995] underline" href="https://racine.revtrak.net/donations/rusd-financial-donations/">Racine Unified School District financial donations page</a> and typing "Walden III High School Robotics" in the "Organization" field.
                </p></div>
            </div>

            <Sponsor tier="Platinum" sponsors={
                []
            } />
            <Sponsor tier="Zirconium" sponsors={
                [
                    {
                        name: "Baxter",
                        logo: baxterLogo,
                        link: "https://www.baxter.com/"
                    },
                ]
            } />
            <Sponsor tier="Titanium" sponsors={
                [
                    {
                        name: "DPI",
                        logo: dpiLogo,
                        link: "https://dpi.wi.gov/stem/grants/robotic-league"
                    },
                ]
            } />
            <Sponsor tier="Silver" sponsors={
                [
                    {
                        name: "Educators Credit Union",
                        logo: educatorsLogo,
                        link: "https://www.ecu.com/"
                    },
                    {
                        name: "FIRST Wisconsin",
                        logo: firstWisconsinLogo,
                        link: "https://www.firstinspireswi.org/"
                    },
                    {
                        name: "HCB",
                        logo: hcbLogo,
                        link: "https://hackclub.com/fiscal-sponsorship/"
                    },
                    {
                        name: "PPG Industries",
                        logo: ppgLogo,
                        link: "https://www.ppg.com/"
                    },
                    {
                        name: "Modine Manufacturing",
                        logo: modineLogo,
                        link: "https://www.modine.com/"
                    },
                ]
            } />
            <Sponsor tier="Chromium" sponsors={
                [
                    {
                        name: "Amy Bigna",
                    },
                    {
                        name: "Northwestern Mutual",
                        logo: northwesternMutualLogo,
                        link: "https://www.northwesternmutual.com/"
                    },
                    {
                        name: "SC Johnson",
                        logo: scjLogo,
                        link: "https://www.scjohnson.com/"
                    },
                    {
                        name: "WE Energies",
                        logo: weLogo,
                        link: "https://www.we-energies.com/"
                    }
                ]
            } />
            <Sponsor tier="Iron" sponsors={
                [
                    {
                        name: "Casey's General Store",
                        logo: caseysLogo,
                        link: "https://www.caseys.com/"
                    },
                    {
                        name: "Findorff",
                        logo: findorffLogo,
                        link: "https://findorff.com/"
                    }
                ]
            } />
        </>
    );
};

export default Sponsors;