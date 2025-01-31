import React from "react";
import virtual from "../assets/virtual.png"

const Virtual = () => {
  return (
    <div>
      <div className="w-[1440px] h-[920px] p-20 justify-center items-center flex mx-auto gap-20 ">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
          <div className="self-stretch h-48 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0  text-[78px] font-bold space-mono-regular leading-[96px]" style={{
          background: 'linear-gradient(270deg, #FFE597 11.87%, #AAFF82 100%)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}>
                Virtual Real Design
              </div>
            </div>
          </div>
          <div className="self-stretch text-white text-[32px] font-bold dm-sans leading-[48px]">
            Amid my hunt for opportunities, VRD gave me one, and I had the
            privilege to design for them.
          </div>
          <div className="self-stretch justify-start items-start gap-10 inline-flex">
            <div className="grow shrink basis-0 self-stretch p-5 bg-[#282828] rounded-[24px] justify-start items-start gap-2.5 flex">
              <div className="grow shrink basis-0 text-white  font-normal text-base dm-sans leading-normal">
                VRD is a creative agency delivering innovative digital
                experiences through immersive design and technology.
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch p-5 bg-[#282828] rounded-[24px] justify-start items-start gap-2.5 flex">
              <div className="grow shrink basis-0 text-white  font-normal text-base dm-sans leading-normal">
                I crafted an engaging and vibrant design for Procreate,
                showcasing realistic gouache brushes to elevate creative
                experiences for digital artists.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[620px] h-[760px] relative">
        <img
            className=" left-[48.56px] top-[20.53px] absolute origin-top-left rotate-6"
            src={virtual}
          />
        
        </div>
      </div>
    </div>
  );
};

export default Virtual;
