import React from "react";
import footerbg from "../assets/footerbg.png";

export const Current = () => {
  return (
    <div>
      <div className="w-[1440px] h-[1873.42px] relative flex mx-auto">
        <div className="w-[1440px] h-[463.42px] left-0 top-0 absolute">
          <div className="w-[242px] left-[264px] top-[198.48px] absolute text-[#81b3fd] text-base font-normal font-['DM Sans'] leading-normal" style={{
          background: 'linear-gradient(54deg, #81B3FE -31.62%, #E0A6F4 100%)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}>
            After honing my craft through various projects, I’m now working on a
            case study to elevate my expertise.
           
          </div>
          <div className="right-[246px] flex absolute">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="426"
              height="457"
              viewBox="0 0 426 457"
              fill="none"
            >
              <path
                d="M75.0697 452.221C75.1232 453.06 74.5137 453.848 73.7082 453.983L60.5822 456.175C59.7767 456.31 59.0804 455.739 59.0268 454.901C58.9733 454.063 59.5829 453.274 60.3884 453.139L72.0559 451.19L71.2806 439.047C71.2271 438.208 71.8367 437.42 72.6422 437.285C73.4476 437.151 74.144 437.721 74.1975 438.56L75.0697 452.221ZM129 111.368L127.56 111.251L129 111.368ZM72.6485 453.71C28.6806 417.686 7.91613 390.145 2.33997 365.951C-3.2834 341.551 6.59916 320.914 22.6722 299.169C54.8659 255.616 112.186 206.881 127.56 111.251L130.441 111.486C114.893 208.204 56.6308 258.008 24.9169 300.912C9.03616 322.396 -0.116571 341.966 5.18507 364.97C10.5339 388.178 30.6548 415.235 74.574 451.219L72.6485 453.71ZM127.56 111.251C134.971 65.1483 150.507 42.9564 171.864 34.1788C182.441 29.8322 194.273 28.8579 206.929 29.7006C219.587 30.5435 233.183 33.214 247.311 36.248C275.652 42.334 306.161 49.8751 336.375 47.5793C366.474 45.2922 396.234 33.2377 423.076 0.0347572L425.228 1.89667C397.744 35.8951 367.135 48.3042 336.315 50.646C305.611 52.9791 274.655 45.3145 246.476 39.2634C232.346 36.2289 218.919 33.5979 206.477 32.7694C194.034 31.9408 182.691 32.9251 172.703 37.0301C152.931 45.1557 137.779 65.8388 130.441 111.486L127.56 111.251Z"
                fill="url(#paint0_linear_1009_16693)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1009_16693"
                  x1="290.5"
                  y1="30.3687"
                  x2="9.78406"
                  y2="438.116"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC787" />
                  <stop offset="1" stop-color="#E0A6F4" />
                </linearGradient>
              </defs>
            </svg></div>
        </div>
        <div className="w-[1440px] p-20 left-0 top-[708.42px] absolute justify-center items-center gap-20 inline-flex">
          <div className="w-[620px] h-[760px] relative">
            <img
              className="w-[620px] h-[760px] left-0 top-0 absolute origin-top-left  rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              src={footerbg}
            />
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch h-48 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-[#dba5f4] text-[78px] font-bold space-mono-regular leading-[96px]">
                  Currently Working on
                </div>
              </div>
            </div>
            <div className="self-stretch text-white text-[40px] font-bold dm-sans leading-[48px]">
              Unpacking a case study on Swiggy—stay tuned for some exciting
              insights and a fresh take on user experience! Link for it- Loading
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
