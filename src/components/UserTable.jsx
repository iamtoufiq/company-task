
import { toast } from 'react-toastify';
import DeleteIcon from "../Icons/DeleteIcon"
import EditPencil from "../Icons/EditPencil"
import { RotatingLines } from 'react-loader-spinner';
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Tooltip,
 
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserAvatar from "../Icons/UserAvatar";
import DeleteDialog from "./DeleteDialog";
import { useGlobalHook } from '../Context/Contexts';
 
const TABLE_HEAD = ["Users Name", "Email", "Phone No.", "Total Consultants", ""];


 
export function UserTable() {
  const navigate = useNavigate()

  const { editUser ,editUserContent ,searchName ,handleLoading , loading} =
  useGlobalHook();

  const [TABLE_ROWS  , SET_TABLE_ROWS ]=useState([])
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const fetchData = async () => {
    handleLoading(true)
    try {
      const apiUrl = 'https://company-task.choudhari-toufi.repl.co/users';
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      SET_TABLE_ROWS (data);
      handleLoading(false)

    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("loading", loading)
  const handleDeleteUser = (userId) => {
    setSelectedUserId(userId);
    setDialogOpen(true);
  };


  const handleConfirmDelete = async () => {
    try {
      const apiUrl = `https://company-task.choudhari-toufi.repl.co/users/${selectedUserId}`;
      
      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
  
      fetchData()
      setDialogOpen(false);
      toast.success('User deleted successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
      setSelectedUserId(null);
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedUserId(null);
  };


  return (
   <> 
   {!loading  ?(
     <Card className=" w-full pb-5 " >
      <CardHeader floated={false} shadow={false} className="rounded-none">
      
      </CardHeader>
      <CardBody className="px-0">
        <table className="w-full min-w-max table-auto text-left bg-[#FAFAFA]">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {TABLE_ROWS.filter(cur => {
    if (searchName.trim() === "") {
      return true;
    } else {
      const searchTerm = searchName.toLowerCase();
      return (
        cur.firstName.toLowerCase().includes(searchTerm) ||
        cur.lastName.toLowerCase().includes(searchTerm) ||
        cur.email.toLowerCase().includes(searchTerm) ||
        cur.phoneNumber.toLowerCase().includes(searchTerm)
      );
    }
  }).map((cur, index) => {
    const isLast = index === TABLE_ROWS.length - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
        
 
                return (
                  <tr key={index} className="bg-[#fff]">
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                       
                        <div className="inline-flex flex-shrink-0 justify-center items-center pt-[0.1875rem] pb-[0.1875rem] pl-[0.3125rem] pr-[0.4375rem] h-[1.375rem] rounded-md border-[1.08px] border-[#007aff] bg-[#f5f5ff]">
  <div className="text-[#007aff] font-['Poppins'] text-sm leading-[125%]"> New
  </div>
</div>

<UserAvatar/>
<div className="flex-shrink-0 w-[6.25rem] h-[1.0625rem] text-[#101828] font-['Poppins'] text-lg leading-[125%]">{`${cur.firstName} ${cur.lastName}`}</div>




                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {cur.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                      
                        {cur?.phoneNumber?.slice(-10)}
                      </Typography>
                    </td>
                   
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {333}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                       <div className="flex">
                       <div className="editIcon cursor-pointer" onClick={()=>handleDeleteUser(cur._id)}> <DeleteIcon /></div>
                       <div className="editIcon cursor-pointer" onClick={()=>{
                        navigate("/")
                        editUser({...cur})
                       }}> <EditPencil /></div>

                       </div>
                     
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
        <DeleteDialog handleCloseDialog={handleCloseDialog} handleConfirmDelete={handleConfirmDelete} isDialogOpen={isDialogOpen}/>
      </CardBody>
   
    </Card>
   ) : <h1 className='text-3xl text-center'>Loading...</h1> }
   </>
  );
}