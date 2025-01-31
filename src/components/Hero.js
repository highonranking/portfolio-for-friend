
import React from 'react'
import HeroImg from "../assets/hero.png"

const Hero = () => {
  return (
    <div  id="home" className='justify-center w-full bg-black py-20'>
          <div className="relative  justify-center mx-auto overflow-hidden">
          <img
          className="w-[500px] mx-auto object-cover h-[436px]"
            src={HeroImg}
            alt="Profile"
            
          />
          <div className="text-center text-[#dba5f4] text-8xl font-normal adlam-display-regular font-adlam leading-[128px]">Hi! I’m Kritika.<br/>Designing with purpose!</div>
            <div className="mx-auto p-20 flex   justify-center">
          <svg  xmlns="http://www.w3.org/2000/svg" width="727" height="140" viewBox="0 0 727 140" fill="none">
  <path d="M2 70.3467C10.3707 44.0799 33.5848 33.0597 60.9216 32.102C86.4565 31.2075 116.326 38.9197 140.209 47.1822C259.049 88.296 133.548 175.883 140.831 89.0026C142.553 68.4672 154.082 53.552 167.26 38.6316C187.134 16.1297 207.771 12.7477 237.065 10.6477C288.379 6.9692 326.08 22.692 353.198 72.8341C380.429 123.186 317.717 120.903 318.218 86.826C318.613 59.9347 351.102 15.417 378.85 7.07198C403.674 -0.393952 447.56 -1.33817 472.207 10.3368C495.322 21.2859 511.958 48.5283 524.366 70.0357C532.063 83.3779 535.378 104.711 525.687 118.152C503.93 148.333 460.273 145.404 462.335 104.86C463.109 89.6426 474.338 72.9855 484.1 61.796C494.78 49.5552 504.767 39.2933 521.101 28.9927C589.772 -14.3128 700.034 35.2538 725.383 67.5483" stroke="url(#paint0_linear_713_42005)" stroke-width="3" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_713_42005" x1="639.494" y1="69.9386" x2="2" y2="69.9386" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DBA6F4"/>
      <stop offset="1" stop-color="#A981FE"/>
    </linearGradient>
  </defs>
</svg>
</div>
        </div>


    </div>
  )
}

export default Hero