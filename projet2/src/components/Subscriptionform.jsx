import React from 'react';
import { useState } from 'react';
let apiUrl = 'http://localhost:5174/api/users'

const Subscriptionform = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    // Function to check password in register form against confirm password request to user
    function checkPassword() {
        let password = document.getElementById('password');
        let confirmedPassword = document.getElementById('confirmpassword');
        if (password == confirmedPassword){
            return password
        } else {
            console.log("Invalid password")
        }
    }

    // Asynchronous function to post user data to database
    let postData = async (event) => {
        event.preventDefault()
        try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password,
                nom: lastName,
                prenom: firstName
            })
        })
        let responseJson = await response.json();
        console.log(response.status)
        if (response.status == 200){
            setEmail("");
            setPassword(""),
            setFirstName(""),
            setLastName(""),
            setMessage("New user created successfully")
        } 
        else if (response.status == 409){
            console.log(response.type)
            console.log(response.body)
            console.log(response.headers)
            setMessage("Email already exists")
        } else {
        console.log(response.status)
        setMessage("An error occured while creating new user")
        }
        }
        catch (error) {
            console.log("Error :", error)
        }
    }
    
    return (
        <div>
            <form onSubmit={postData}>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'> Email </label>
                        <input value={email} type="text" placeholder='Enter your Email' onChange={(event) => setEmail(event.target.value)} className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>Password </label>
                        <input value={password} type="password" placeholder='Enter your Password' onChange={(event) => setPassword(event.target.value)} className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>Last Name </label>
                        <input value={lastName} type="text" placeholder='Enter your Last Name' onChange={(event) => setLastName(event.target.value)} className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>First Name </label>
                        <input value={firstName} type="text" placeholder='Enter your First Name' onChange={(event) => setFirstName(event.target.value)} className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div>
                    
                    
                    {/* <div className='mb-3'>
                        <label className='font-mediu mb-2 flex'>Confirm Password </label>
                        <input id="confirmpassword" type="text" placeholder='Confirm your Password' className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                    </div> */}
                    <div className='flex justify-between mb-6'>
                        <label>
                            <input type="checkbox"/>
                             I accept the <span className='text-blue-700 cursor-pointer'>Terms of Use</span> & <span className='text-blue-700 cursor-pointer'> Privacy Policy</span>
                        </label>
                    </div>
                    
                    <button type="submit" className='block bg-gray-700 hover:bg-gray-800 text-white w-full py-2 px-8 rounded  '>Register Now</button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
};

export default Subscriptionform;