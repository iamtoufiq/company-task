import React from 'react'

const UserInfoBottom = () => {
  return (
    <div className='flex flex-col gap-20 pb-5'>
   

<div className="top">
<div className="first flex justify-between p-5">
     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">First Name</label>
     <input type="text " placeholder='Jhon' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>
   



     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Last Name</label>
     <input type="text" placeholder='Doe' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>




     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Email</label>
     <input placeholder='jhondoe@gmail.com' type="email" className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>



     <div className=" flex flex-col gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Phone Number</label>
     <input type="text" placeholder='+91 453875329' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>


      </div>
    
      <div className="second flex justify-between p-5">
     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">First Line Address</label>
     <input type="text " placeholder='Sagar Plaza' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>
   



     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Second Line Address</label>
     <input type="text" placeholder='Thane' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>




     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Country</label>
     <input placeholder='India' type="text" className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>



     <div className=" flex flex-col gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">State</label>
     <input type="text" placeholder='Maharashtra' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>


      
      </div>
 


      <div className="third flex justify-between p-5">
     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">District</label>
     <input type="text " placeholder='Thane' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>
   



     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Pin Code</label>
     <input type="text" placeholder='421302' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>


    


     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Kyc</label>
     <input placeholder='Yes/No' type="text" className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>



     <div className=" flex flex-col gap-1 invisible"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">State</label>
     <input type="text" placeholder='Maharashtra' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>


      
     

      </div>
      
      <div className="fourth flex justify-between p-5">
   
   
  
  <div className="flex flex-col gap-1">
    <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">
      Password
    </label>
    <input
      type="password"
      placeholder="************"
      className="px-2 outline-none flex-shrink-0 h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50"
    />
  </div>




     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Confirm Password</label>
     <input
      type="password"
      placeholder="*************"
      className="px-2 outline-none flex-shrink-0 h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50"
    /></div>




     <div className=" flex flex-col  gap-1 invisible"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Kyc</label>
     <input placeholder='Yes/No' type="text" className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>



     <div className=" flex flex-col gap-1 invisible"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">State</label>
     <input type="text" placeholder='Maharashtra' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>


      
     

      
      </div>
     
</div>

<div className=" flex gap-2 justify-end">
        
        
        <button className="flex-shrink-0 w-[7.875rem] h-[2.4375rem] rounded-md border-[1.35px] border-[#adb7ca] text-[#adb7ca] font-['Poppins'] text-base font-medium leading-[normal]" >Cancel</button>
        <button className="flex-shrink-0 w-[9.5625rem] h-[2.4375rem] rounded-md bg-[#0f2c64] text-white font-['Poppins'] text-base font-medium leading-[normal]" >SaveChanges</button>
        </div>


   
    </div>
  )
}

export default UserInfoBottom
