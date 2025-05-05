import { For, Show } from "solid-js";

interface SponsorDescription {
    name: string;
    logo?: string;
    link?: string;
}

const sponsorColors = {
    Platinum: "bg-[#afdfff]",
    Zirconium: "bg-[#fff7af]",
    Titanium: "bg-[#929292]",
    Silver: "bg-[#d8d8d8]",
    Chromium: "bg-[#eeeeee]",
    Iron: "bg-[#ffffff]",
}
type SponsorTier = keyof typeof sponsorColors;

const Sponsor = (props: { tier: SponsorTier; sponsors: SponsorDescription[] }) => {
    return (
        <div class={"flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 py-8 " + sponsorColors[props.tier]}>
            <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
                <p class="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-black">
                    {props.tier} Bolt
                </p>
                <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[100px] px-5">
                    
                    <p class="text-center space-y-10 flex flex-col">
                        <For each={props.sponsors} fallback={"None yet! Be the first to sponsor us at the " + props.tier + " Bolt level."}>
                            {sponsor => (
                                <a href={sponsor.link} class="flex justify-center">
                                    <Show when={sponsor.logo} fallback={<p class="text-3xl">{sponsor.name}</p>}>
                                        <img src={sponsor.logo} alt={sponsor.name + " logo"} class="h-[72px]" />
                                    </Show>
                                </a>
                            )}
                        </For>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Sponsor;
