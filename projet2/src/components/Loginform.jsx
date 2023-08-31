import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

let apiUrl = 'http://localhost:5173/api/users/login'

const Loginform = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    // Asynchronous function to get token
    let getToken = async (event) => {
        event.preventDefault()
        try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password,

            })
        })
        let responseJson = await response.json();
        if (response.status == 200){
            setEmail("");
            setPassword(""),


            setMessage("Login successfully")
        } else {
            setMessage("An error occured while login on")
        }
        }
        catch (error) {
            console.log("Error :", error)
        }
    }

    return (
        <div>
            <form onSubmit={getToken}>
                    <div className='mb-3'>
                        <img src="/loginlogo.png" alt="Profile picture" className='rounded-t-3xl'/>
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>Email </label>
                        <input type="text" value={email} placeholder='Enter your Email' onChange={(event) => setEmail(event.target.value)} className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>Password </label>
                        <input type="password" value={password} placeholder='Enter your Password' onChange={(event) => setPassword(event.target.value)} className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='flex justify-between mb-6'>
                        <label>
                            <input type="checkbox"/>
                            Remember Me
                        </label>
                        <span>Forgot Password?</span>
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                    </div>
                    <button className='block bg-gray-700 hover:bg-gray-800 text-white w-full py-2 px-8 rounded  '>Sign In</button>
                    <div className='mt-4 text-center'>
                        <NavLink to='/signin'>
                            Don't have an account yet? 
                            <span className='text-blue-700 cursor-pointer'> Sign Up</span>
                        </NavLink>
                    </div>
                
            </form>
        </div>
    );
};

export default Loginform;