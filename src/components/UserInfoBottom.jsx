import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGlobalHook } from '../Context/Contexts';
const UserInfoBottom = () => {
  const navigate= useNavigate()
  const { editUserContent} =
  useGlobalHook();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    firstLineAddress: '',
    secondLineAddress: '',
    country: '',
    state: '',
    district: '',
    pinCode: '',
    kyc: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e, field) => {
   
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit =async () => {
    if (formData.firstName.length < 3) {
      toast.error("First name must be at least 3 characters");
      return
     }
     if (formData.lastName.length < 3) {
      toast.error("Last name must be at least 3 characters");
      return
     }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(formData.email)) {
       toast.error("Enter a valid email address");
       return
     }

     if (formData.phoneNumber.length < 3) {
      toast.error("Last name must be at least 3 characters");
      return
     }

     const phoneNumberRegex = /^\d{10}$/;
     const cleanedPhoneNumber = formData.phoneNumber.replace(/^\+91\s*/, '');
     if (!phoneNumberRegex.test(cleanedPhoneNumber)) {
       toast.error("Enter a valid 10-digit phone number");
       return
     }


     if (formData.firstLineAddress.length < 3) {
      toast.error("First Line Address must be at least 3 characters");
      return
     }

     if (formData.secondLineAddress.length < 3) {
      toast.error("Second Line Address must be at least 3 characters");
      return
     }


     if (formData.pinCode.length < 3) {
      toast.error("Pin Code must be at least 6 Numbers");
      return
     }

     if (formData.password.length < 3) {
      toast.error("password must be at least 6 Numbers");
      return
     }

     if (formData.confirmPassword.length < 3) {
      toast.error("confirm Password must be at least 6 Numbers");
      return
     }
     if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password must match");
      return;
    }
  
    try {
      // Show loader while waiting for the API response
      // You can implement your own loading indicator logic here
  
      const apiUrl = 'https://company-task.choudhari-toufi.repl.co/users';
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
  
      const data = await response.json();
      toast.success('Account created successfully');
      navigate("/userlist")
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        firstLineAddress: '',
        secondLineAddress: '',
        country: '',
        state: '',
        district: '',
        pinCode: '',
        kyc: '',
        password: '',
        confirmPassword: '',
      });
  
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Failed to create account. Please try again.');
  
    } finally {
      // Hide loader here if you are using one
    }
  };
// --------------------------
const updateUser = async () => {
  const apiUrl = `https://company-task.choudhari-toufi.repl.co/users/${editUserContent?._id}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        firstLineAddress: formData.firstLineAddress,
        secondLineAddress: formData.secondLineAddress,
        country: formData.country,
        state: formData.state,
        district: formData.district,
        pinCode: formData.pinCode,
        kyc: formData.kyc,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }

    const updatedUserData = await response.json();
    toast.success('User updated successfully');
    navigate("/userlist")

  } catch (error) {
    console.error('Error updating user:', error);

  }
};



  useEffect(() => {
    if (!!editUserContent) {
      setFormData({...editUserContent});
    }
  }, [editUserContent]);



  
  return (
    <div className='flex flex-col gap-20 pb-5'>
   

<div className="top">
<div className="first flex justify-between p-5">
     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">First Name</label>
     <input type="text " placeholder='Jhon' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.firstName}
  onChange={(e) => handleChange(e, 'firstName')} /></div>
   



     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Last Name</label>
     <input type="text" placeholder='Doe' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.lastName}
  onChange={(e) => handleChange(e, 'lastName')} /></div>




     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Email</label>
     <input placeholder='jhondoe@gmail.com' type="email" className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.email}
  onChange={(e) => handleChange(e, 'email')}/></div>



     <div className=" flex flex-col gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Phone Number</label>
     <input type="text" placeholder='+91 453875329' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.phoneNumber}
  onChange={(e) => handleChange(e, 'phoneNumber')} /></div>


      </div>
    
      <div className="second flex justify-between p-5">
     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">First Line Address</label>
     <input type="text " placeholder='Sagar Plaza' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.firstLineAddress}
  onChange={(e) => handleChange(e, 'firstLineAddress')}/></div>
   



     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Second Line Address</label>
     <input type="text" placeholder='Thane' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.secondLineAddress}
  onChange={(e) => handleChange(e, 'secondLineAddress')} /></div>




     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Country</label>
     <input placeholder='India' type="text" className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.country}
  onChange={(e) => handleChange(e, 'country')}/></div>



     <div className=" flex flex-col gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">State</label>
     <input type="text" placeholder='Maharashtra' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.state}
  onChange={(e) => handleChange(e, 'state')}/></div>


      
      </div>
 


      <div className="third flex justify-between p-5">
     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">District</label>
     <input type="text " placeholder='Thane' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.district}
  onChange={(e) => handleChange(e, 'district')}/></div>
   



     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Pin Code</label>
     <input type="text" placeholder='421302' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.pinCode}
  onChange={(e) => handleChange(e, 'pinCode')}/></div>


    


     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Kyc</label>
     <input placeholder='Yes/No' type="text" className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.kyc}
  onChange={(e) => handleChange(e, 'kyc')}/></div>



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
      value={formData.password}
      onChange={(e) => handleChange(e, 'password')}  />
  </div>




     <div className=" flex flex-col  gap-1"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Confirm Password</label>
     <input
      type="password"
      placeholder="*************"
      className="px-2 outline-none flex-shrink-0 h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" value={formData.confirmPassword}
      onChange={(e) => handleChange(e, 'confirmPassword')}
    /></div>




     <div className=" flex flex-col  gap-1 invisible"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">Kyc</label>
     <input placeholder='Yes/No' type="text" className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50" /></div>



     <div className=" flex flex-col gap-1 invisible"> <label htmlFor="" className="first_name text-black font-['Poppins'] text-[.8125rem] leading-[normal]">State</label>
     <input type="text" placeholder='Maharashtra' className="px-2 outline-none flex-shrink-0  h-9 rounded-[0.3125rem] border border-[#dadada] bg-gray-50"/></div>


      
     

      
      </div>
     
</div>

<div className="flex gap-2 justify-end">
  <button className="flex-shrink-0 w-[7.875rem] h-[2.4375rem] rounded-md border-[1.35px] border-[#adb7ca] text-[#adb7ca] font-['Poppins'] text-base font-medium leading-[normal]" onClick={()=>navigate("/userlist")}>
    Cancel
  </button>
  <button
    className="flex-shrink-0 w-[9.5625rem] h-[2.4375rem] rounded-md bg-[#0f2c64] text-white font-['Poppins'] text-base font-medium leading-[normal]"
    onClick={() => {
      if (editUserContent?._id) {
        updateUser();
      } else {
        handleSubmit();
      }
    }}
  >
    Save Changes
  </button>
</div>


   
    </div>
  )
}

export default UserInfoBottom
