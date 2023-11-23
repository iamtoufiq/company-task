import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import CreateMiddleBanner from './CreateMiddleBanner'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useNavigate } from 'react-router-dom';
import { createBanner } from '../utils/AddBanner';
import {baseUrl} from "../Important"
import axios from 'axios';
import { useGlobalHook } from '../Context/Contexts';
import { toast } from 'react-toastify';
const AddBanner = () => {

const navigate = useNavigate();
const fileInputRef = useRef(null);
const { editContent, handleLoading , loading } = useGlobalHook();

const [selectedFileName, setSelectedFileName] = useState(null);
const [bannerTitle, setBannerTitle] = useState('');
const [bannerContent, setBannerContent] = useState('');

useEffect(() => {
  if (!!editContent) {
    setBannerTitle(editContent.bannerTitle || '');
    setBannerContent(editContent.bannerContent || '');
  }
}, [editContent]);

const handleDivClick = () => {
  fileInputRef.current.click();
};

const handleFileChange = (e) => {
  const selectedImage = e.target.files[0];
  setSelectedFileName(selectedImage);
};

const handleSaveChanges = async () => {
  handleLoading(true)
  try {
  
    if (!bannerContent && !bannerTitle) {
      toast.error('Please Add Content or Banner Title.');
      return;
    }
    if (!selectedFileName) {
      toast.error('Please select an image.');
      return;
    }
    const data = new FormData();
    data.append('file', selectedFileName);
    data.append('upload_preset', 'uploadingbro');
    data.append('cloud_name', 'dhiqmh5x1');

    const response = await fetch('https://api.cloudinary.com/v1_1/dhiqmh5x1/image/upload', {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const cloudinaryData = await response.json();
    console.log(cloudinaryData.url);

    await axios.post(`${baseUrl}/banners`, {
      bannerTitle,
      bannerContent,
      bannerCoverImage: cloudinaryData.url,
    });
    handleLoading(false)
    navigate('/showbanner');
    toast.success('New banner created successfully');
    
  } catch (err) {
    console.error(err);
    console.log('There was an error');
  }
};

const handleUpdate = async () => {
  handleLoading(true)
  try {
    const data = new FormData();
    let cloudinaryDataUrl = '';

    if (selectedFileName) {
      data.append('file', selectedFileName);
      data.append('upload_preset', 'uploadingbro');
      data.append('cloud_name', 'dhiqmh5x1');

      const response = await fetch('https://api.cloudinary.com/v1_1/dhiqmh5x1/image/upload', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const cloudinaryData = await response.json();
      cloudinaryDataUrl = cloudinaryData.url;
    }

    await axios.put(`${baseUrl}/banners/${editContent?._id}`, {
      ...editContent,
      bannerContent: bannerContent,
      bannerCoverImage: cloudinaryDataUrl || editContent?.bannerCoverImage,
      bannerTitle: bannerTitle,
    });
    handleLoading(false)
    console.log(editContent?._id);
    toast.success('Banner updated successfully');
    navigate('/showbanner');
  } catch (error) {
    console.error('Error updating banner:', error);
  }
};

  return (
    <div className=' w-full h-screen overflow-y-scroll flex flex-col gap-2 pb-5 example'>
     <Header/>
     <CreateMiddleBanner/>
     
     <div className="bottom_banner px-[2.5rem] bg-neutral-50 flex flex-col gap-[5rem] justify-around h-full">
     
       <div className="top_part flex flex-col gap-[10px]">
       <div className="frist_div flex ">
            <div className="left w-1/3  flex-[1]">
                <h3 className="text-black font-['Poppins'] leading-[normal]">Banner Title</h3>
                <input type="text" className="flex-shrink-0  h-[2.1875rem] rounded-lg  bg-white w-[90%] px-2 border-none outline-none border border-[#e0e0e0]" value={bannerTitle} onChange={(e) => setBannerTitle(e.target.value)}  style={{border:"2px solid #e0e0e0"}} />
                
            </div>
            <div className="middle w-1/4 ">
                <div className="text">Date Added</div>
                <input type="date" className='rounded-lg border border-[#e0e0e0] bg-white' style={{border:"2px solid whitesmoke", padding:"0.1rem 0.3rem"}}/>
            </div>
            <div className="right w-1/4  ">
                <p>Url Link</p>
                <p className="text-[#006ed3] leading-[normal] flex-shrink-0 w-[16.4375rem] h-[2.1875rem] rounded-lg border border-[#e0e0e0] bg-white flex justify-center items-center">http/sdvbavd/564sdgdhgre</p>
            </div>
        </div>

        <div className="second_div">
            <p className="text-black font-['Poppins'] leading-[normal]">Banner Content</p>
           <textarea name="" id="" value={bannerContent}
            onChange={(e) => setBannerContent(e.target.value)}  className='w-full px-4 outline-none rounded-lg border border-[#e0e0e0] bg-white py-2'/>
        </div>

      <p className="text-black font-['Poppins'] text-[.9375rem] font-medium leading-[normal]">Upload Banner Cover</p>
     
   

    <div className="flex-shrink-0 w-[487px] h-44 rounded-xl bg-[#e6eefd] flex flex-col justify-center items-center cursor-pointer" onClick={handleDivClick}>
      <input type="file" className="invisible" ref={fileInputRef} onChange={handleFileChange} />
      <FileUploadIcon />
      <p>{selectedFileName ? selectedFileName.name : 'Upload image from Device/Browser'}</p>
    </div>
       </div>
        <div className=" flex gap-2 justify-end">
        
        
        <button className="flex-shrink-0 w-[7.875rem] h-[2.4375rem] rounded-md border-[1.35px] border-[#adb7ca] text-[#adb7ca] font-['Poppins'] text-base font-medium leading-[normal]" onClick={()=>navigate("/showbanner")} >Cancel</button>
       { editContent?._id ?
         <button className="flex-shrink-0 w-[9.5625rem] h-[2.4375rem] rounded-md bg-[#0f2c64] text-white font-['Poppins'] text-base font-medium leading-[normal]" onClick={()=>handleUpdate()}>SaveChanges</button> :  <button className="flex-shrink-0 w-[9.5625rem] h-[2.4375rem] rounded-md bg-[#0f2c64] text-white font-['Poppins'] text-base font-medium leading-[normal]" onClick={handleSaveChanges}>SaveChanges</button>
       }
        </div>
     </div>
    </div>
  )
}

export default AddBanner
