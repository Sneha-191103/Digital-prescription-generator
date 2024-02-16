import React from "react";
import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { AddPatient } from "../Service/service";
import axios from "axios";
import './log.css'
export default function Home() {
  const navigate = useNavigate();
  const [items, setItems] = useState({
    id:'',
    patientname:'',
    patientage:'',
    patientnumber:'',
    
   
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    AddPatient(items)
      .then((res) => {
        // toast.success
        toast.success(` Added !${items.id}`, {
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
          navigate(`/list/${items.patientname}`);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='items'>
    
      <div className='act'>
        <div className='add-actions'>
          <h1> Patient Details</h1>
        
         <center> <h1 className="title"> </h1></center>
          <div className="add-container">
            <form onSubmit={handleSubmit} className='input-group'>
              <div className='add'>
              <label>
                Patient Name : &emsp;
                <input type="text" name="patientname" value={items.patientname} onChange={handleChange} required />
              </label></div>
              <div className='add'>
              <label>
                Patient age :
                <input type="text" name="patientage" value={items.patientage} onChange={handleChange} required />
              </label></div>
              <div className='add'>
              <label>
                Patient Number :&emsp;&emsp;&emsp;
                <input type="text" name="patientnumber" value={items.patientnumber} onChange={handleChange} required />
              </label></div>
              

             <center> <button type="submit" className='dbutton'>next</button></center>
            </form>
          </div>
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