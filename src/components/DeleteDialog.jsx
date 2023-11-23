import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteDialog({isDialogOpen, handleConfirmDelete , handleCloseDialog}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
   
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    
      >
          
        <DialogTitle id="alert-dialog-title" >
        <div className="text-black font-['Poppins'] text-2xl font-medium leading-[normal] text-center">Confirm Delete Profile ?</div>

        </DialogTitle>
        <div className="flex-shrink-0 w-full rounded-sm border-b border-b-[#cacaca]" />

        <div className="grup_btn flex items-center justify-center h-[150px] w-[482px]">

         
          <Button onClick={handleConfirmDelete} autoFocus className="text-black font-['Poppins'] text-lg font-medium leading-[normal]"> 
          <div className="text-black font-['Poppins'] text-lg font-medium leading-[normal]">Yes</div>

          </Button>
         

          <Button onClick={handleCloseDialog} className="flex-shrink-0 w-[9.0625rem] h-[2.875rem] rounded-[0.3125rem] bg-[#0f2c64]" style={{background:"#0f2c64"}}> <div className="  text-white font-['Poppins'] text-lg font-medium leading-[normal]">Not Now</div></Button>
          </div>
      </Dialog>
     

    </React.Fragment>
  );
}
