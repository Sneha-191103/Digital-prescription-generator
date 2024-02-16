import React, { useEffect, useState } from "react";
import { getPatient } from "../Service/service";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './log.css'
export default function List(){
    const {patientname}=useParams();
  

    const [data, setData] = useState([]);

    // useEffect to fetch data when the component mounts
    useEffect(() => {
      // Axios GET request
      axios.get(`http://localhost:8080/getPat/${patientname}`)
        .then(response => {
          // Update the state with the fetched data
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []); // Empty dependency array means this effect runs once when the component mounts
  
    
  
  
  return (
    <>
  
  <div className="pres">
    <h1>
  {data.map(item => (
          <div key={item.id}><button className="button"><Link to={`/med/${item.id}`} style={{textDecoration:"none",color:"#09c7gg"}}>Prepare Prescription </Link></button></div>
        ))}</h1></div>
     
 </>
  )
      
}