import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignIn } from '../Service/service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Home from './home';
import './log.css';




export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const Usernamex = '';
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await SignIn(signin.username,signin.password);
        if (res.data === "Login Successful !") {
            Cookies.set('Usernamex', signin.username);
            Cookies.set('isLoggedIn', 'true');
            toast.success('Login Successful !', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log(signin.username);
            setTimeout(() => {
                navigate(`/home/${signin.username}`);
            }, 1500);

        } else if (res.data === "Invalid Password") {
            toast.error('Invalid password!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error('Invalid Username!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };


    return (
       
                <> {isLoggedIn ?
                    <Home/>
                    :
                 
                                <div className="logform" >
                                    
                                   
                                    <div className="hh">   
                                       
                                    <br></br>                                
                                    <h1 style={{color:'white'}}>LOGIN</h1>

                                   
                                    <form onSubmit={handleSubmit}>
                                        <div className="login-form">
                                            <label>Username:</label>
                                            <input type="text" placeholder="Username" id="username" value={signin.username} onChange={handleChange} required />
                                        </div>
                                       
                                        <div className="login-form">
                                            <label>Password:</label>
                                            <input autoComplete="off" type="password" placeholder="Password" id="password" value={signin.password} onChange={handleChange} required />
                                        </div>
                                        <br></br>
                                       &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; <input type="submit" className="button" placeholder='Login' value='Login' />
                                    </form>
                                   </div>
                                </div> 
                         
                }
            
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