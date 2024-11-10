import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';


const Create = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [status, setStatus] = useState();

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/add', { name, email, age, status })
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handlesubmit}>
                    <div className="container mt-5">
                        <div className="card shadow-lg p-4">
                            <h2 className="text-center text-primary mb-4">Add New Member</h2>
                            
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-bold">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="form-control"
                                        id="name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        className="form-control"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label fw-bold">Age</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Age"
                                        className="form-control"
                                        id="age"
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label fw-bold">Status</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Status"
                                        className="form-control"
                                        id="status"
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Add Member</button>
                                </div>
                            
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Create