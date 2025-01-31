import React from "react";
import landing from "../assets/landing.png";
import bgcard from "../assets/bgcard.png";

const Projects = () => {
  return (
    <div>
      <div
        id="projects"
        className="w-[1440px] h-[1343.81px] relative flex mx-auto"
      >
        <div className="w-[1440px] h-[538px] left-0 top-[-0.16px] absolute flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div
              className="w-[389px] mr-8 text-[#fdbd81] text-[40px] font-normal nanum-pen-script-regular uppercase leading-10"
              style={{
                background:
                  "linear-gradient(270deg, #FFE597 11.87%, #AAFF82 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              A glimpse into the designs I created to experiment, learn, and
              grow as a designer.
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="329"
              height="468"
              viewBox="0 0 329 468"
              fill="none"
            >
              <path
                d="M143.47 358.993L142.523 357.858L143.47 358.993ZM258.292 210.425L258.239 211.997H258.239L258.292 210.425ZM11.6617 467.716C12.3226 468.159 13.2041 467.913 13.6304 467.166L20.5784 454.997C21.0047 454.25 20.8145 453.285 20.1536 452.842C19.4926 452.399 18.6112 452.646 18.1848 453.392L12.0089 464.21L2.43474 457.793C1.77378 457.35 0.892339 457.597 0.465979 458.343C0.0396185 459.09 0.229797 460.055 0.890754 460.498L11.6617 467.716ZM258.239 211.997C282.503 211.997 298.892 209.063 309.266 203.728C314.478 201.048 318.239 197.728 320.692 193.802C323.152 189.863 324.222 185.433 324.222 180.677C324.222 171.266 320.03 160.447 314.01 149.053C307.967 137.613 299.932 125.328 292.005 112.978C284.057 100.594 276.21 88.1344 270.442 76.236C264.659 64.3064 261.074 53.1507 261.441 43.3569C261.802 33.7312 265.988 25.2278 276.247 18.4301C286.61 11.5637 303.145 6.46666 328.05 3.97336L327.899 0.841907C302.843 3.35034 285.784 8.50512 274.85 15.75C263.813 23.0635 259.001 32.5308 258.595 43.3446C258.196 53.9902 262.075 65.7426 267.919 77.7994C273.779 89.8871 281.723 102.492 289.661 114.859C297.621 127.262 305.568 139.415 311.536 150.712C317.527 162.053 321.374 172.266 321.374 180.795C321.374 185.008 320.434 188.773 318.366 192.083C316.291 195.405 313.005 198.387 308.144 200.886C298.372 205.912 282.508 208.853 258.345 208.853L258.239 211.997ZM142.523 357.858C137.025 363.478 130.226 365.669 122.462 365.559C114.662 365.448 105.976 363.011 96.8691 359.46C87.7677 355.912 78.3649 351.302 69.106 346.905C59.8787 342.522 50.7901 338.349 42.4293 335.755C34.0952 333.169 26.2778 332.082 19.6554 334.098C12.9033 336.153 7.60514 341.363 4.29515 350.778C1.01971 360.093 -0.334112 373.569 0.630638 392.391C1.59689 411.241 4.89798 435.596 11.0415 466.753L13.8258 465.975C7.6986 434.901 4.42912 410.721 3.47443 392.096C2.51825 373.441 3.89313 360.5 6.94555 351.819C9.96341 343.235 14.5922 338.869 20.3157 337.127C26.1689 335.346 33.3758 336.244 41.5641 338.784C49.7256 341.316 58.6576 345.411 67.8985 349.8C77.1076 354.174 86.6206 358.839 95.832 362.43C105.038 366.018 114.061 368.585 122.318 368.703C130.611 368.821 138.215 366.466 144.416 360.128L142.523 357.858ZM144.416 360.128C157.392 346.863 163.378 330.749 167.019 314.231C168.837 305.983 170.078 297.595 171.302 289.408C172.53 281.198 173.741 273.196 175.5 265.609C179.013 250.46 184.667 237.177 196.786 227.618C208.95 218.023 227.859 211.997 258.239 211.997L258.345 208.853C227.695 208.853 208.074 214.919 195.188 225.083C182.257 235.282 176.34 249.423 172.742 264.938C170.946 272.682 169.717 280.822 168.492 289.01C167.264 297.222 166.04 305.488 164.252 313.597C160.683 329.794 154.898 345.209 142.523 357.858L144.416 360.128Z"
                fill="url(#paint0_linear_1009_16676)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1009_16676"
                  x1="203.993"
                  y1="289.3"
                  x2="98.968"
                  y2="153.187"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEBD81" />
                  <stop offset="0.489583" stop-color="#FFE598" />
                  <stop offset="1" stop-color="#BFF4A6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="w-[1440px] h-[806px] left-0 top-[537.84px] absolute justify-center items-center inline-flex">
          <img className="w-[480px] h-[806px] rounded-[20px]" src={landing} />
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-10 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-[480px] justify-center items-center gap-2.5 inline-flex">
                <div
                  className="grow shrink basis-0 text-center text-[#fdbd81] text-[78px] font-bold space-mono-regular leading-[96px]"
                  style={{
                    background:
                      "linear-gradient(270deg, #FFE597 11.87%, #AAFF82 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Personal Projects
                </div>
              </div>
            </div>
            <div className="self-stretch text-center text-white text-[32px] font-bold dm-sans leading-[48px]">
              I enjoyed creating designs for some agencies and designed some
              e-invitation videos as well.
            </div>
          </div>
          <img className="w-[480px] h-[363.56px]" src={bgcard} />
        </div>
      </div>
    </div>
    
  );
};

export default Projects;
