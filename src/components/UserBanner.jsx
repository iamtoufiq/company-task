import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const UserBanner = () => {
  const navigate = useNavigate()
  return (



<div className='flex items-center justify-between px-8  py-7 h-[6.125rem] border-b border-b-[#e5e5e5] bg-white'>
    <div className="left">
        <div className="text-black font-['Poppins'] text-2xl font-medium leading-[normal]">User Profile </div>
        <div className="text-[#868686] font-['Poppins'] text-sm leading-[normal]">View and edit profile settings</div>
    </div>
    <div className="right w-[85px] flex cursor-pointer" style={{border:"1px solid whitesmoke"}} onClick={()=>navigate("/userlist")}>
        <KeyboardBackspaceIcon sx={{backgroundColor:"#0F2C64" ,  color:"#fff"}}  />
        <p className="text">
        Go Back
        </p>
      </div>
</div>
  )
}

export default UserBanner
