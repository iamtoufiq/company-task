import React, { useEffect, useState } from 'react'
import DeleteIcon from '../Icons/DeleteIcon'
import EditPencil from '../Icons/EditPencil'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { Avatar } from '@material-tailwind/react';
import axios from 'axios';
import { useGlobalHook } from '../Context/Contexts';
import { useNavigate } from 'react-router-dom';
import DeleteDialog from './DeleteDialog';
import { toast } from 'react-toastify';
const BannerTable = () => {
  const navigate= useNavigate()
  const { editData , loading} =
    useGlobalHook();
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [bannerData , setBannerData]=useState([])
    const fetchData = async () => {
      try {

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/banners`);

        setBannerData(response?.data);
    
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    useEffect(() => {
  
      fetchData();
    }, []); 

    const handleDelete = async () => {


      try {
        // const apiUrl = `https://company-task.choudhari-toufi.repl.co/banners/${selectedUserId}`;
        const apiUrl = `${process.env.REACT_APP_BASE_URL}/banners/${selectedUserId}`;

        const response = await fetch(apiUrl, {
          method: 'DELETE',
        });
    
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
    
        fetchData()
        setDialogOpen(false);
        toast.success('Banner deleted successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
        setSelectedUserId(null);
      } catch (error) {
        console.error('Error deleting Banner:', error);
        toast.error('Failed to delete Banner', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    };
    const handleDeleteUser = (userId) => {
      setSelectedUserId(userId);
      setDialogOpen(true);
    };
    

    const handleCloseDialog = () => {
      setDialogOpen(false);
      setSelectedUserId(null);
    };
  return (
    <>
    {!loading  ? (<div>
     <table className="w-full " style={{borderSpacing:"10px"}}>
      <thead>
        <tr className='bg-[#FAFAFA] text-[#878787] border'>
          <th className=" p-2  w-1/4">Banner Image</th>
          <th className=" p-2 w-1/4">Title</th>
          <th className=" p-2 w-1/4">url Link</th>
          <th className=" p-2 w-1/4">Banner Info</th>
          <th className=" p-2 w-1/4"></th>
        </tr>
      </thead>
      <tbody>
        
        {
            bannerData.map((data)=>{
                return(
                    <tr key={data?._id} className=' border tr-spacing '>
                    <td className=" p-2 w-[7.75rem] h-14 rounded-lg border border-[#0f2c64]/[.15] bg-[#f6f9ff] flex justify-center items-center flex-shrink-0 m-auto">
                    <Avatar
                          src={data?.bannerCoverImage}
                          alt={data?.bannerTitle}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                    
                    </td>
           
                     <td className=" p-2 text-black leading-[normal]">{data?.bannerTitle}</td>
                     <td className=" p-2">http/sdvbavd/564sdgdhgre</td>
                     <td className=" p-2 ">
                       <div className="text w-[400px]">{data?.bannerContent} </div>
                       
                     </td>
                     <td>
                     <div className="icon flex items-center"><div className="div"><NotificationAddIcon/></div> <div className="div cursor-pointer" onClick={()=>handleDeleteUser(data?._id)}><DeleteIcon/></div> 
                       <div className="div cursor-pointer" onClick={() => {
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
       
      

      </tbody>
    </table>
    <DeleteDialog handleCloseDialog={handleCloseDialog} handleConfirmDelete={handleDelete} isDialogOpen={isDialogOpen}/>

    </div>) :  <h1 className='text-3xl text-center flex justify-center items-center'>Loading...</h1> }
 
    

 
  
    </>
  )
}

export default BannerTable