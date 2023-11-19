import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SearchIcon from '@mui/icons-material/Search';

const UserLIstanner = () => {
  return (
 
<div className='flex items-center justify-between px-8  py-7 h-[6.125rem] border-b border-b-[#e5e5e5] bg-white example'>
    <div className="left">

        <div className="text-black font-['Poppins'] text-4xl font-medium leading-[normal]">All Users</div>


    </div>
    <div className="right flex   h-[1.9375rem] rounded-full border-[0.821px] border-[#363740]/[.20] bg-[#0f2c64] pl-2 justify-center items-center" style={{border:"2px solid whitesmoke"}} >
    <SearchIcon/>
       <input type="text" className='h-full outline-none rounded-r-full px-2 z-10 relative left-[2px]' />
      </div>
</div>
  )
}


export default UserLIstanner
