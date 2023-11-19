import React from 'react'
import { useNavigate } from 'react-router-dom'
const BannerSection = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between px-8  py-7 h-[6.125rem] border-b border-b-[#e5e5e5] bg-white'>
    <div className="text-black text-4xl font-medium leading-[normal]">Banners</div>
  
      <button onClick={()=>navigate("/createbanner")} className="inline-flex items-start pt-[0.3125rem] pb-[0.4375rem] pl-[1.125rem] pr-[1.125rem] rounded-full bg-[#0f2c64] create_banner__ text-white text-center font-['Inter'] text-[.8125rem] font-medium leading-[1.375rem]">
  Create Banner +
</button>

     
    </div>
  )
}

export default BannerSection
