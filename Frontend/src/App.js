import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/login';
import Home from './Components/home';
import Medicine from './Components/medicine';
import List from './Components/list';
import QRCode from 'qrcode.react';
import Qrcode from './Components/qrcode';




function App() {
  return (
    <>
      <div className="Appx">
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/med/:patient_id" element={<Medicine/>}/>
          <Route exact path="/qrcode/:patient_id" element={<Qrcode/>}/>
          <Route exact path="/home/:username" element={<Home/>}/>
          <Route exact path="/list/:patientname" element={<List/>}/>
        
        </Routes>
      </div >
    </>
  );
}

export default App;