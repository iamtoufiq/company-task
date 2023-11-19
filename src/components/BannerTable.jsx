import React, { useEffect, useState } from 'react'
import DeleteIcon from '../Icons/DeleteIcon'
import EditPencil from '../Icons/EditPencil'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { Avatar, Dialog } from '@material-tailwind/react';
import axios from 'axios';

import Button from '@mui/material/Button';

import DialogTitle from '@mui/material/DialogTitle';
import { useGlobalHook } from '../Context/Contexts';
import { useNavigate } from 'react-router-dom';
const BannerTable = () => {
  const navigate= useNavigate()
  // const  editData=  useGlobalHook();
  // console.log("editData",editData);
  const { editData} =
    useGlobalHook();
    // console.log("editData",editData);
    const data= [1,2 ,3,4,5,6,7,   ]
    const [bannerData , setBannerData]=useState([])
    const fetchData = async () => {
      try {
        const response = await axios.get('https://company-task.choudhari-toufi.repl.co/banners');
        setBannerData(response?.data);
    
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    useEffect(() => {
      // Make a GET request to fetch all banners when the component mounts
     
  
      fetchData();
    }, []); 

    const handleDelete = async (bannerId) => {
      try {
        const response = await axios.delete(`https://company-task.choudhari-toufi.repl.co/banners/${bannerId}`);
        fetchData()
      } catch (error) {
        console.error('Error deleting banner:', error);
      }
    };

    
  return (
    <>
    <div>
     <table className="border-collapse w-full">
      <thead>
        <tr className='bg-[#FAFAFA] text-[#878787]'>
          <th className="border p-2  w-1/4">Banner Image</th>
          <th className="border p-2 w-1/4">Title</th>
          <th className="border p-2 w-1/4">url Link</th>
          <th className="border p-2 w-1/4">Banner Info</th>
        </tr>
      </thead>
      <tbody>
        
        {
            bannerData.map((data)=>{
                return(
                    <tr key={data?._id}>
                    <td className=" p-2 w-[7.75rem] h-14 rounded-lg border border-[#0f2c64]/[.15] bg-[#f6f9ff] flex justify-center items-center flex-shrink-0 m-auto">
                    <Avatar
                          src={data?.bannerCoverImage}
                          alt={data?.bannerTitle}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                    
                    </td>
           
                     <td className="border p-2 text-black leading-[normal]">{data?.bannerTitle}</td>
                     <td className="border p-2">http/sdvbavd/564sdgdhgre</td>
                     <td className="border p-2 flex">
                       <div className="text">{data?.bannerContent} </div>
                       <div className="icon flex items-center"><div className="div"><NotificationAddIcon/></div> <div className="div cursor-pointer" onClick={()=>handleDelete(data?._id)}><DeleteIcon/></div> 
                       <div className="div" onClick={() => {
    editData({
      bannerContent: data.bannerContent,
      bannerCoverImage: data.bannerCoverImage,
      bannerTitle: data?.bannerTitle,
      _id: data._id,
    });
    navigate("/createbanner");
  }}><EditPencil/></div>
                        </div>
                     </td>
                   </tr>
                )
            })
        }
       
      
        {/* Add more rows as needed */}
      </tbody>
    </table>
   
    </div>

    {/* ------------------------------ */}
    {/* opacity: 1;
    transform: none;
    width: 480px;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid whitesmoke; */}
  
    </>
  )
}

export default BannerTable






