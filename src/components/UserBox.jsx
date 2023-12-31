import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from "../Icons/DeleteIcon"
import EditPencil from "../Icons/EditPencil"
import DeleteDialog from './DeleteDialog';
import { useGlobalHook } from '../Context/Contexts';
import { useNavigate } from 'react-router-dom';
const UserBox = () => {
  const navigate = useNavigate()
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  


  const { editUserContent} =
  useGlobalHook();
 
  if (Object.keys(editUserContent).length === 0) {
    console.log("empty");
  } else {
    console.log("delete the user logic", editUserContent);
  }
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedUserId(null);
  };
  const handleDeleteUser = (userId) => {
    setSelectedUserId(userId);
    setDialogOpen(true);
  };
  const handleConfirmDelete = async () => {
    try {
      // const apiUrl = `https://company-task.choudhari-toufi.repl.co/users/${selectedUserId}`;
      const apiUrl = `${process.env.REACT_APP_BASE_URL}/users/${selectedUserId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
  
  
      setDialogOpen(false);
      toast.success('User deleted successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/userlist")
      setSelectedUserId(null);
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };


  const handleClickDelete = () => {
    console.log("delte teh user logic")
  };
  return (
   
    <div className='flex justify-between items-center pt-8 pb-2  px-[2.5rem]'>
    <div className="left flex items-center  gap-3">
        <div className="image">
          <Avatar
  alt="Remy Sharp"
  src="data:image/jpeg;base64,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"
  sx={{ width: 80, height: 80 }}
/></div>
        <div className="right">
           
            <h2 className="text-black font-['Poppins'] text-lg font-medium leading-[normal] flex items-center">
  Mr. {Object.keys(editUserContent).length === 0 ? "Shlok Admin" : `${editUserContent?.firstName} ${editUserContent?.lastName}`} 
  <span className="inline-flex flex-shrink-0 justify-center items-center pt-[0.1875rem] pb-[0.1875rem] pl-[0.3125rem] pr-[0.4375rem] h-[1.375rem] rounded-md border-[1.08px] border-[#007aff] text-[#007aff] font-['Poppins'] text-sm leading-[125%] ml-1">
    New
  </span>
</h2>


            <div className="text-[#8b8b8b] font-['Poppins'] text-sm leading-[normal]">Verified Account</div>

        </div>
    </div>



 




    <div className="right flex items-center">
    {!!editUserContent._id ? (
  <div className="deleteIcon cursor-pointer" onClick={() => handleDeleteUser(editUserContent._id)}>
    <DeleteIcon />
  </div>
) : (
  <div className="deleteIcon cursor-not-allowed">
    <DeleteIcon />
  </div>
)}

        <EditPencil/>
    </div>
    <DeleteDialog handleCloseDialog={handleCloseDialog} handleConfirmDelete={handleConfirmDelete} isDialogOpen={isDialogOpen}/>

    </div>
  )
}

export default UserBox
