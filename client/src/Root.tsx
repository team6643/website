import { createSignal, ParentProps } from "solid-js";
import Button from "./components/Button";
import NavItem from "./components/NavItem";
import teamLogo from "/logo.svg";
import teamLogoWhite from "./assets/logo-fill-white.svg";
import chevronDown from "./assets/chevron-down.svg";
import close from "./assets/close.svg";
import instagramLogo from "./assets/instagram.svg";
import facebookLogo from "./assets/facebook.svg";
import { useNavigate } from "@solidjs/router";

const Root = (props: ParentProps) => {
    const logIn = () => {
      location.href = "https://launchpad.37signals.com/bc3/5808606/signin";
    }
    const [responsiveOpen, setResponsiveOpen] = createSignal(false);
    const navigate = useNavigate();
    return (
        <>
          <div class="flex flex-col justify-start items-center overflow-hidden bg-[#f9f0ff]">
          <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-5 py-2.5 flex-col lg:flex-row">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[18px]">
              <img src={teamLogo} alt="team logo" class="w-[67] h-[68px]" />
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative select-none cursor-pointer" onClick={() => navigate("/")}>
                <p class="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#4b3995]">
                  Walnuts and Bolts
                </p>
                <p class="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#4b3995]">
                  Team 6643
                </p>
              </div>
              <div onClick={() => setResponsiveOpen(!responsiveOpen())} class="p-2">
                <img src={responsiveOpen() ? close : chevronDown} alt="toggle menu" class="w-[20px] lg:hidden" /></div>
            </div>
            <div class={`justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10 flex-col lg:flex-row ${responsiveOpen() ? "flex" : "hidden lg:flex"}`}>
              <NavItem href="/" onClick={() => setResponsiveOpen(false)}>Home</NavItem>
              <NavItem href="/about" onClick={() => setResponsiveOpen(false)}>About</NavItem>
              <NavItem href="/sponsors" onClick={() => setResponsiveOpen(false)}>Sponsors</NavItem>
              <NavItem href="/fll" onClick={() => setResponsiveOpen(false)}>FLL</NavItem>
              <NavItem href="/contact" onClick={() => setResponsiveOpen(false)}>Contact us</NavItem>
              <Button onClick={logIn}>Log in</Button>
            </div>
          </div>
          {props.children}
          <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[490px] gap-2.5 p-[30px] bg-[#4b3995]">
            <div class="grid grid-cols-3 gap-5">
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[50px] col-span-3 lg:col-span-1">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[18px]">
                <img src={teamLogoWhite} alt="team logo" class="w-[67] h-[69px]" />
                  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-white">
                      Walnuts and Bolts
                    </p>
                    <p class="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-white">
                      Team 6643
                    </p>
                  </div>
                </div>
                <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-11">
                  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-white">
                      <span class="flex-grow-0 flex-shrink-0 text-base text-left text-white">
                        2340 Mohr Avenue
                      </span>
                      <br />
                      <span class="flex-grow-0 flex-shrink-0 text-base text-left text-white">
                        Racine, WI 53404
                      </span>
                      <br />
                      <span class="flex-grow-0 flex-shrink-0 text-base text-left text-white">
                        United States
                      </span>
                    </p>
                    <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3.5">
                      <svg
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M4.45651 17.2026C3.57872 17.2026 2.8022 17.0095 2.12697 16.6233C1.463 16.2371 0.939694 15.709 0.557064 15.0389C0.185688 14.3687 0 13.6021 0 12.7389C0 11.8529 0.185688 11.0749 0.557064 10.4048C0.939694 9.72331 1.463 9.18948 2.12697 8.80331C2.8022 8.40578 3.57872 8.20701 4.45651 8.20701C5.57064 8.20701 6.50471 8.50232 7.25872 9.09294C8.02398 9.68356 8.50789 10.507 8.71046 11.5633H6.02642C5.92514 11.1999 5.73382 10.9159 5.45248 10.7115C5.17113 10.507 4.83352 10.4048 4.43963 10.4048C4.06826 10.4048 3.7419 10.5013 3.46055 10.6944C3.19046 10.8761 2.97664 11.1431 2.81908 11.4952C2.66153 11.8359 2.58275 12.2391 2.58275 12.7048C2.58275 13.0569 2.62777 13.3749 2.7178 13.6589C2.80783 13.9428 2.93162 14.187 3.08917 14.3915C3.25798 14.5959 3.45492 14.7549 3.68 14.8685C3.90508 14.9707 4.15829 15.0218 4.43963 15.0218C4.70972 15.0218 4.94605 14.9764 5.14862 14.8855C5.36245 14.7947 5.54251 14.6641 5.68881 14.4937C5.84636 14.3233 5.9589 14.1132 6.02642 13.8633H8.71046C8.50789 14.8855 8.02398 15.6976 7.25872 16.2996C6.49346 16.9016 5.55939 17.2026 4.45651 17.2026Z"
                          fill="white"
                        />
                        <path
                          d="M14.4531 17.2026C13.6991 17.2026 13.0126 17.0095 12.3936 16.6233C11.7859 16.2371 11.302 15.709 10.9419 15.0389C10.593 14.3574 10.4186 13.585 10.4186 12.7218C10.4186 11.8473 10.5986 11.0749 10.9588 10.4048C11.3189 9.72331 11.8084 9.18948 12.4274 8.80331C13.0576 8.40578 13.7553 8.20701 14.5206 8.20701C15.1058 8.20701 15.6178 8.31491 16.0567 8.53072C16.4956 8.73516 16.8558 9.03615 17.1371 9.43368V4.73146H19.6692V16.9981H17.4241L17.1371 15.8907C16.9683 16.1292 16.7601 16.3507 16.5125 16.5552C16.2762 16.7482 15.9892 16.9016 15.6516 17.0152C15.314 17.1401 14.9145 17.2026 14.4531 17.2026ZM15.1114 14.9707C15.5278 14.9707 15.8936 14.8742 16.2087 14.6811C16.535 14.488 16.7826 14.2211 16.9514 13.8803C17.1315 13.5396 17.2215 13.1478 17.2215 12.7048C17.2215 12.2618 17.1315 11.87 16.9514 11.5292C16.7826 11.1885 16.535 10.9216 16.2087 10.7285C15.8936 10.5354 15.5278 10.4389 15.1114 10.4389C14.7063 10.4389 14.3405 10.5354 14.0142 10.7285C13.6991 10.9216 13.4515 11.1885 13.2714 11.5292C13.0914 11.87 13.0013 12.2561 13.0013 12.6878C13.0013 13.1307 13.0914 13.5282 13.2714 13.8803C13.4515 14.2211 13.6991 14.488 14.0142 14.6811C14.3405 14.8742 14.7063 14.9707 15.1114 14.9707Z"
                          fill="white"
                        />
                        <path
                          d="M0.0366972 2.33146C0.0366972 1.51326 0.693894 0.849976 1.50459 0.849976H18.5321C19.3428 0.849976 20 1.51326 20 2.33146V3.66479H0.0366972V2.33146Z"
                          fill="white"
                        />
                        <path
                          d="M0.0366972 19.3685C0.0366972 20.1867 0.693894 20.85 1.50459 20.85H18.5321C19.3428 20.85 20 20.1867 20 19.3685V18.0352H0.0366972V19.3685Z"
                          fill="white"
                        />
                      </svg>
                      <a href="https://instagram.com/waldenteam6643"><img src={instagramLogo} alt="instagram logo" class="w-[20px] h-[21px]" /></a>
                      <a href="https://www.facebook.com/people/Walden-Robotics-FRC-Team-6643/61556413963969/"><img src={facebookLogo} alt="facebook logo" class="w-[20px] h-[21px]" /></a>
                    </div>
                  </div>
                  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[81px] relative gap-[5px]">
                    <p class="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-white">
                      <span class="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-white">
                        Stay tuned!
                      </span>
                      <br />
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
                      We'll send you a monthly email newsletter about what we're doing.
                    </p>
                    <div class="flex space-x-2 items-center flex-grow-0 flex-shrink-0 relative">
                      <input class="h-[37px] rounded-[5px] bg-[#f0f0f0]" />
                      <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-4 py-2 rounded-[5px] bg-[#d4c6ff]">
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                          Subscribe
                        </p>
                      </div>
                    </div>
                  </div>
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[496px] text-base text-left text-white">
                    Copyright © 2025 Walnuts and Bolts.
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[679px] relative gap-3.5 col-span-3 lg:col-span-2">
                <p class="self-stretch flex-grow-0 flex-shrink-0 w-[679px] text-2xl font-bold text-left text-white">
                  Links
                </p>
                <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[679px] text-base text-left text-white">
                    Home
                  </p>
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[679px] text-base text-left text-white">
                    About
                  </p>
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[679px] text-base text-left text-white">
                    Sponsors
                  </p>
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[679px] text-base text-left text-white">
                    FLL
                  </p>
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[679px] text-base text-left text-white">
                    Contact us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
};


export default Root;