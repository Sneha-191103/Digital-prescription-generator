import React, { useEffect, useState } from "react";
import QRCode from 'qrcode.react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import './log.css'
export default function Qrcode(){
    const {patient_id}=useParams();
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/');
        }
      }, [isLoggedIn, navigate]);

    const userlogout = () => {
        if (isLoggedIn) {
            navigate('/');
            Cookies.remove('isLoggedIn');
            setIsLoggedIn(false);
        } else {
            navigate('/');
        }
    };
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        // Axios GET request
        axios.get(`http://localhost:8080/getMed/${patient_id}`)
          .then(response => {
            // Update the state with the fetched data
            setDatas(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
//     const [qrCodeValue, setQRCodeValue] = useState('');
//     const [dataList, setDataList] = useState([]);
//     const [value, setValue] = useState();
//     const [back, setBack] = useState('#FFFFFF');
//     const [fore, setFore] = useState('#000000');
//     const [size, setSize] = useState(256);
 
//     useEffect(() => {
//         // Axios GET request
//         axios.get(`http://localhost:8080/getMed/${patient_id}`)
//           .then(response => {
//             // Update the state with the fetched data
//             setDataList(response.data);
//           })
//           .catch(error => {
//             console.error('Error fetching data:', error);
//           });
//       }, []);
//   return (
//     <div>
//         <br>
//         </br>
//         <h3><button onClick={userlogout}>Logout</button></h3>
//       <h2>QR Code Generator</h2>
//       <ul>
//         {dataList.map((data, index) => (
            
//             <QRCode Value="[{ medicinename: {data.medicinename}},{ days: {data.days} }]"/>
            
//         ))}
//       </ul>
//       <div>
//       {value && (
//                     <QRCode
//                         title="GeeksForGeeks"
//                         value={value}
//                         bgColor={back}
//                         fgColor={fore}
//                         size={size === '' ? 0 : size}
//                     />
//                 )}
//       </div>
//     </div>
//   );

  const [qrCodeValue, setQRCodeValue] = useState('');

  

  const generateQRCode = () => {
    setQRCodeValue(datas);
  };

  return (
    <div className="Apple">
      <h1>QR Code Generator</h1>
      <div>
       
       
        <button onClick={generateQRCode}>Generate QR Code</button>
      </div>
      {qrCodeValue && (
          <div>
          <h2>Generated QR Code:</h2>
          <QRCode value={`"MedicineName=${datas.medicinename},days=${datas.days}"`} />
        </div>
      )}
      <br></br>
 <div className="end"> <h6><button onClick={userlogout}>Logout</button></h6></div>    
    </div>
  );
}