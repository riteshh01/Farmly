import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
  <div className="relative w-full py-14 md:py-20 md:w-full overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col md:flex-row items-center justify-between rounded-3xl p-4 md:p-10 text-white mt-10 shadow-2xl shadow-black/20">
    <div className="absolute pointer-events-none top-10 -z-10 left-20 size-64 bg-gradient-to-br from-orange-400/60 to-orange-500/60 blur-[180px]"></div>
    <div className="absolute pointer-events-none bottom-10 -z-10 right-20 size-64 bg-gradient-to-br from-orange-400/60 to-orange-500/60 blur-[180px]"></div>
    <div className="flex flex-col items-center md:items-start max-md:text-center">
        <a href="https://prebuiltui.com" className="group flex items-center gap-2 rounded-full text-sm p-1 pr-3 text-orange-400 bg-orange-200/15">
            <span className="bg-orange-500 text-white text-xs px-3.5 py-1 rounded-full">
                NEW
            </span>
            <p className="flex items-center gap-1">
                <span>Try our Platform Once</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right group-hover:translate-x-0.5 transition duration-300"><path d="m9 18 6-6-6-6"/></svg>
            </p>
        </a>
        <h1 className="text-3xl font-medium max-w-xl mt-5 bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">Trusted by 1M+ Customers</h1>
        <p className="text-base text-black max-w-lg mt-4">
            Built to integrate effortlessly with your existing tools, frameworks and workflows — so you can move faster.
        </p>
        <button className="flex items-center gap-1 text-sm px-6 py-2.5 border text-black border-orange-400 hover:bg-orange-400/10 active:scale-95 transition rounded-full mt-6">
            Explore
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4243 5.42426C12.6586 5.18995 12.6586 4.81005 12.4243 4.57574L8.60589 0.757359C8.37157 0.523045 7.99167 0.523045 7.75736 0.757359C7.52304 0.991674 7.52304 1.37157 7.75736 1.60589L11.1515 5L7.75736 8.39411C7.52304 8.62843 7.52304 9.00833 7.75736 9.24264C7.99167 9.47696 8.37157 9.47696 8.60589 9.24264L12.4243 5.42426ZM0 5L0 5.6L12 5.6V5V4.4L0 4.4L0 5Z" fill="black"/>
            </svg>
        </button>
    </div>
    <div className="md:-ml-10 max-md:mt-10">
        <img src={assets.bottom_banner_image} alt='banner' className='w-full hidden md:block'/>
        <img src={assets.bottom_banner_image_sm} alt='banner' className='w-full md:hidden'/>
    </div>
</div>
  )
}

export default BottomBanner