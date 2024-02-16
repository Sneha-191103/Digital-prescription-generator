import axios from "axios";

//Spring Boot API Config 
const URL ='http://localhost:8080';


const SignIn=(username,password)=>axios.post(URL+'/signin',{username,password});
const AddPatient=(items)=>axios.post(`${URL}/posting`,items)
//const AddPatient=(prescription)=>axios.post(URL+'/posting',{prescription});
const AddMedicine=(items)=>axios.post(`${URL}/post`,items);
const getPatient=(patientname)=>axios.get(`${URL}/getPat/${patientname}`);
const getMedicine=(patient_id)=>axios.get(`${URL}/getMed/${patient_id}`);
export{SignIn,AddPatient,AddMedicine,getPatient,getMedicine};