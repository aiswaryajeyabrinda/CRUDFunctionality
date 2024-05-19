import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser()
{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault(); 
        axios.post('http://localhost:8083/create', {name, email, mobileNumber, dateOfBirth})
        .then(res => {
            console.log(res);
            navigate('/');       
         })
         .catch(err => console.log(err));   
        }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor = "">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor = "">Email</label>
                        <input type="email" placeholder='Enter Enail' className='form-control'
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor = "">MobileNumber</label>
                        <input type="tel" placeholder='Enter mobileNumber' className='form-control'
                        onChange={e => setMobileNumber(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor = "">DateOfBirth</label>
                        <input type="date" placeholder='Enter DateOfBirth' className='form-control'
                        onChange={e => setDateOfBirth(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button> 
                </form>
            </div>
        </div>
    )
}

export default CreateUser