import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Users() {
    const [Users, setUser] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8083/')
        .then(res => setUser(res.data))
        .catch(err => console.log(err));
    }, [])
    const handleDelete = async (mobileNumber) => {
        try {
            await axios.delete('http://localhost:8083/user/'+mobileNumber)
            window.location.reload()        
        }
        catch(err) {
            console.log(err);
        }    
    }
    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>mobileNummber</th>
                        <th>dateOfBirth</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>{
                        Users.map((data, i)=> (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>
                                    <button className='btn btn-danger ms-2' 
                                    onClick={ e => handleDelete(data.mobileNumber)}>Delete</button>
                                </td>
                            </tr>
                            ))  }
                    </tbody>
            </table>
        </div>
    </div>
)}
export default Users