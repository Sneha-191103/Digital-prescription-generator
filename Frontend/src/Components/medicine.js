import React, { useEffect } from "react";
import { useState } from 'react'
import { useParams ,useNavigate, Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import './log.css';
import { AddMedicine } from "../Service/service";
export default function Medicine(){
  const navigate = useNavigate();
  const {patient_id}=useParams();
  const [items1, setItems1] = useState({
    id:'',
   medicinename:'',
   morning:'',
   afternoon:'',
   night:'',
   days:'',
   patient_id:`${patient_id}`
  
   
  });
  const [items2, setItems2] = useState({
    id:'',
   medicinename:'',
   morning:'',
   afternoon:'',
   night:'',
   days:'',
   patient_id:`${patient_id}`
  
   
  });
  const [items3, setItems3] = useState({
    id:'',
   medicinename:'',
   morning:'',
   afternoon:'',
   night:'',
   days:'',
   patient_id:`${patient_id}`
  
   
  });
  const [items4, setItems4] = useState({
    id:'',
   medicinename:'',
   morning:'',
   afternoon:'',
   night:'',
   days:'',
   patient_id:`${patient_id}`
  
   
  });
  const [items5, setItems5] = useState({
    id:'',
   medicinename:'',
   morning:'',
   afternoon:'',
   night:'',
   days:'',
   patient_id:`${patient_id}`
  
   
  });
  const handleSubmit2 = (e) => {
    e.preventDefault();
    AddMedicine(items2)
      .then((res) => {
        // toast.success
        toast.success(` Added !`, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
        
        }, 1500);
      })
      .catch((err) => {
        // toast.Error
        toast.error('Failed to add  !', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  const handleSubmit3= (e) => {
    e.preventDefault();
    AddMedicine(items3)
      .then((res) => {
        // toast.success
        toast.success(` Added !`, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
        
        }, 1500);
      })
      .catch((err) => {
        // toast.Error
        toast.error('Failed to add  !', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  const handleSubmit4= (e) => {
    e.preventDefault();
    AddMedicine(items4)
      .then((res) => {
        // toast.success
        toast.success(` Added !`, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
        
        }, 1500);
      })
      .catch((err) => {
        // toast.Error
        toast.error('Failed to add  !', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  const handleSubmit5 = (e) => {
    e.preventDefault();
    AddMedicine(items5)
      .then((res) => {
        // toast.success
        toast.success(` Added !`, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
        
        }, 1500);
      })
      .catch((err) => {
        // toast.Error
        toast.error('Failed to add  !', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    AddMedicine(items1)
      .then((res) => {
        // toast.success
        toast.success(` Added !`, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
        
        }, 1500);
      })
      .catch((err) => {
        // toast.Error
        toast.error('Failed to add  !', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setItems1((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setItems2((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setItems3((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleChange4 = (e) => {
    const { name, value } = e.target;
    setItems4((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleChange5 = (e) => {
    const { name, value } = e.target;
    setItems5((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='items'>
    
      <div className='act'>
        <div className='add-actions'>
          
        
         <center> <h1 className="title">Prescription  </h1></center>

          <div className="add-container">
            <form onSubmit={handleSubmit1} className='input-group'>
             
              <label>
                MedicineName :
                <input type="text" name="medicinename" value={items1.medicinename} onChange={handleChange1} required />
              </label>
              &emsp;
              <label>
                Days :
                <input  type="text" name="days" value={items1.days} onChange={handleChange1} required />
              </label>&emsp;
              <label>
                Morning :&emsp;
                <input className="med" type="text" name="morning" value={items1.morning} onChange={handleChange1} required />
              </label>&emsp;
              <label>
                Afternoon :&emsp;
                <input  className="med" type="text" name="afternoon" value={items1.afternoon} onChange={handleChange1} required />
              </label>&emsp;
              <label>
                Night :&emsp;
                <input className="med" type="text" name="night" value={items1.night} onChange={handleChange1} required />
              </label>&emsp;
                 <button type="submit" className='tick-button'></button>
            </form>
            <br></br>
            <form onSubmit={handleSubmit2} className='input-group'>
             
              <label>
                MedicineName : 
                <input type="text" name="medicinename" value={items2.medicinename} onChange={handleChange2} required />
              </label>
              &emsp;
              <label>
                Days :
                <input type="text" name="days" value={items2.days} onChange={handleChange2} required />
              </label>&emsp;
              <label>
                Morning :&emsp;
                <input className="med" type="text" name="morning" value={items2.morning} onChange={handleChange2} required />
              </label>&emsp;
              <label>
                Afternoon :&emsp;
                <input className="med" type="text" name="afternoon" value={items2.afternoon} onChange={handleChange2} required />
              </label>&emsp;
              <label>
                Night :&emsp;
                <input className="med" type="text" name="night" value={items2.night} onChange={handleChange2} required />
              </label>&emsp;
                 <button type="submit" className='tick-button'></button>
            </form>
            <br></br>
            <form onSubmit={handleSubmit3} className='input-group'>
             
              <label>
                MedicineName : 
                <input type="text" name="medicinename" value={items3.medicinename} onChange={handleChange3} required />
              </label>
              &emsp;
              <label>
                Days :
                <input type="text" name="days" value={items3.days} onChange={handleChange3} required />
              </label>&emsp;
              <label>
                Morning :&emsp;
                <input className="med" type="text" name="morning" value={items3.morning} onChange={handleChange3} required />
              </label>&emsp;
              <label>
                Afternoon :&emsp;
                <input className="med" type="text" name="afternoon" value={items3.afternoon} onChange={handleChange3} required />
              </label>&emsp;
              <label>
                Night :&emsp;
                <input  className="med" type="text" name="night" value={items3.night} onChange={handleChange3} required />
              </label>&emsp;
                 <button type="submit" className='tick-button'></button>
            </form>
            <br></br>
            <form onSubmit={handleSubmit4} className='input-group'>
             
              <label>
                MedicineName : 
                <input type="text" name="medicinename" value={items4.medicinename} onChange={handleChange4} required />
              </label>
              &emsp;
              <label>
                Days :
                <input type="text" name="days" value={items4.days} onChange={handleChange4} required />
              </label>&emsp;
              <label>
                Morning :&emsp;
                <input className="med" type="text" name="morning" value={items4.morning} onChange={handleChange4} required />
              </label>&emsp;
              <label>
                Afternoon :&emsp;
                <input className="med" type="text" name="afternoon" value={items4.afternoon} onChange={handleChange4} required />
              </label>&emsp;
              <label>
                Night :&emsp;
                <input className="med" type="text" name="night" value={items4.night} onChange={handleChange4} required />
              </label>&emsp;
                 <button type="submit" className='tick-button'></button>
            </form>
            <br></br>
            <form onSubmit={handleSubmit5} className='input-group'>
             
              <label>
                MedicineName : 
                <input type="text" name="medicinename" value={items5.medicinename} onChange={handleChange5} required />
              </label>
              &emsp;
              <label>
                Days :
                <input type="text" name="days" value={items5.days} onChange={handleChange5} required />
              </label>&emsp;
              <label>
                Morning :&emsp;
                <input className="med" type="text" name="morning" value={items5.morning} onChange={handleChange5} required />
              </label>&emsp;
              <label>
                Afternoon :&emsp;
                <input className="med" type="text" name="afternoon" value={items5.afternoon} onChange={handleChange5} required />
              </label>&emsp;
              <label>
                Night :&emsp;
                <input className="med" type="text" name="night" value={items5.night} onChange={handleChange5} required />
              </label>&emsp;
                 <button type="submit" className='tick-button'></button>
            </form>
            <br></br>
            
            <br></br>
            
          </div>
          <Link to={`/qrcode/${patient_id}`}><center><button className="dbutton">QR code generate</button></center></Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}