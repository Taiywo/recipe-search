import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}>Instructions</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-title" variant="h6" component="h2">
         
          </div >
          <div  id="modal-modal-description" sx={{ mt: 2 }}>
          {children}
          </div>
        </Box>
      </Modal>
  
    </div>
  );
}

















// import React, { useState } from "react";
// import styled from "styled-components";

// const Button = styled.button`
// border:none;
// height: 2rem;
// width: 70%;
// border:1px solid #8CA0D7; 
// margin-top:1rem;
// margin-left:1rem;
// background-color:#8CA0D7;
// color: white;
// border-radius: .3rem`

// const Pop = styled.div`
// position: 'absolute',
// top: '50%',
// left: '50%',

// width: 400,
// bgcolor: 'background.paper',
// border: '2px solid #000',
// boxShadow: 24,
// p: 4,`

// const Modal = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClose = () => {
//         setIsOpen(false);
//     };

//     return (
//         <>
//             <Button onClick={() => setIsOpen(true)}>Instruction</Button>
//             {isOpen && (
//                 <Pop>
//                     {children}
//                     <button onClick={handleClose}>Close</button>
//                 </Pop>
//             )}
//         </>
//     );
// };

// export default Modal;