import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { useGlobalHook } from '../Context/Contexts';
const CreateMiddleBanner = () => {
  const navigate= useNavigate()
 
  return (

    
    <div className=' flex justify-between items-center px-10 flex-shrink-0  h-[6.125rem] border-b border-b-[#e5e5e5] bg-white' style={{border:"1px solid whitesmoke"}}>
      <div className="left">
   
    


        <h1 className="text-black font-['Poppins'] text-4xl font-medium leading-[normal]">Banners</h1>
        <p className="text-[#868686] font-['Poppins'] text-sm leading-[normal]">Edit , Delete or push Banner</p>
      </div>
      <div className="right w-[85px] flex " style={{border:"1px solid whitesmoke"}}>
        <KeyboardBackspaceIcon sx={{backgroundColor:"#0F2C64" , color:"#fff"}} onClick={()=>navigate("/showbanner")} />
        <p className="text">
        Go Back
        </p>
      </div>
    </div>
  )
}

export default CreateMiddleBanner
