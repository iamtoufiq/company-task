import React from 'react'
import DashBoard from '../Icons/DashBoard'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
  
          
       <div className="flex flex-col flex-shrink-0 max-w-[15.75rem]  bg-[#0f2c64] h-screen overflow-y-scroll example" >
   <div className="left-first">
   <div className="text-white font-['Poppins'] text-4xl font-medium leading-[normal] px-[65px] py-[50px]">Admin</div>
   </div>
   <div className="left-second mx-[29px] gap-[7px] h-screen">
   
   <div className="dashboard flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Dashboard</div>
   </div>
   
   
   <div className="Lawyers flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Lawyers</div>
   </div>
   
   <div className="Users flex gap-[17px] py-[15px] justify-start items-center cursor-pointer" onClick={()=>navigate("/userlist")}>
   <div className='icon' >
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Total Users</div>
   </div>
   
   
   
   <div className="Cases flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Cases</div>
   </div>
   
   
   <div className="Departments flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/>
   </div>
   <div className="text-white font-['Poppins'] leading-[normal]">Departments</div>
   </div>
   
   
   <div className="Notification flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Notification</div>
   </div>
   
   
   <div className="Meetings flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Meetings</div>
   </div>
   
   
   <div className="Bookings flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Bookings</div>
   </div>
   
   <div className="Services flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Services</div>
   </div>
   
   <div className="Services flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Services</div>
   </div>
   
   <div className="Banners flex gap-[17px] py-[15px] justify-start items-center cursor-pointer" onClick={()=>navigate("/showbanner")}>
   <div className='icon'>
   
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Banners</div>
   </div>
   
   <div className="Files flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">All Files</div>
   </div>
   
   <div className="To-Do flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">To-Do List</div>
   </div>
   
   <div className="Permissions flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Permissions</div>
   </div>
   
   <div className="Messages flex gap-[17px] py-[15px] justify-start items-center cursor-pointer">
   <div className='icon'>
   <DashBoard/></div>
   <div className="text-white font-['Poppins'] leading-[normal]">Messages</div>
   </div>
   </div>
     </div>
  
  )
}

export default Sidebar
