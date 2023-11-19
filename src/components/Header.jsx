import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import SettingIcon from '../Icons/SettingIcon';
const Header = () => {
  return (
    <div className=' w-full flex justify-between p-5 items-center bg-white ' style={{borderBottom:"2px solid whitesmoke"}}>
   <div className="left flex items-center gap-2">
    <div className="profileImage"><AccountCircleIcon sx={{width:"50px", height:"50px" , color:"#0f2c64"}}/></div>
    <div className="profile-right">


   


        <h3 className="flex flex-col flex-shrink-0 justify-center w-[13.375rem] h-[1.3125rem] text-black font-['Poppins'] font-medium leading-[normal]">Mr Admin</h3>
        <p className="flex flex-col flex-shrink-0 justify-center w-[16.5rem] h-[0.9375rem] text-[#808080] font-['Poppins'] text-xs font-light leading-[141.5%]">Loreum Ipsum</p>

     
    </div>
   </div>
   <div className="right flex items-center gap-3 flex-1 justify-end">
    <div className="input-filed flex  h-[2.375rem] rounded-[0.1875rem]  bg-[#0f2c64] w-[20.0625rem]">
     <div className="icon flex justify-center items-center"> <SearchIcon sx={{width:"40px", height:"20"}}/></div>
      <input type="text "  className="w-full px-2  border-none outline-none  " placeholder='Search in admin Panel ' style={{border:"2px solid whitesmoke"}}/>
    </div>
   <div className="group_icon flex gap-2">
   <div className="flex flex-shrink-0 justify-center items-center w-[2.625rem] h-[2.625rem]">
 <SettingIcon/>
</div>
<div className="flex flex-shrink-0 justify-center items-center w-[2.625rem] h-[2.625rem]">
<SettingIcon/>
</div>
<div className="flex flex-shrink-0 justify-center items-center w-[2.625rem] h-[2.625rem]">
<SettingIcon/>
</div>
   </div>

   </div>
   <hr />
    </div>
  )
}

export default Header
