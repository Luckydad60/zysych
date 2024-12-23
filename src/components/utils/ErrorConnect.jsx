import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Fab from '@mui/material/Fab';
import { IoKeyOutline } from "react-icons/io5";
import { RiBarcodeLine } from "react-icons/ri";


      function ErrorConnect({setOpen,setIsBackUpCode,setIsDataLoading}) {
        const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  }
  const handleOpenBackCode = () => {
    setOpen(false)
    setIsBackUpCode(true);
    setIsDataLoading(false)
  }
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center"}}>
        <div style={{ width: "250px", height: "300px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "20px", borderRadius: "10px", display: 'flex', alignItems: "center", justifyContent: "center"}}>
            <p style={{ color: "red", textShadow:"1px 1px 2px pink"}}>Failed to load</p>
        </div>
        <div className='connect-btn'>
          <div style={{paddingBlock: "5px", paddingBottom: "15px", color: "#9b51e0", fontWeight: "bold "}}>Try Connect with the following options</div>
        <Fab variant="extended" onClick={handleClose} style={{ marginInline: "10px",color: "#9b51e0"}} size="small" color="#9b51e0">
        
        <p style={{marginRight: "5px",color:"#9b51e0" }}>Seed Phrase</p>

        <IoKeyOutline />
      </Fab>
      <Fab variant="extended" onClick={handleOpenBackCode} style={{ marginInline: "10px",color: "#9b51e0"}} size="small" color="#9b51e0">
        <p style={{marginRight: "5px", color:"#9b51e0"}}>Back Code</p>

        <RiBarcodeLine  />
      </Fab>
        </div>
    </div>
  )
}

export default ErrorConnect