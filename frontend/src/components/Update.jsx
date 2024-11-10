import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const Update = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [status, setStatus] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/${id}`);
            setName(res.data.name || "");
            setEmail(res.data.email || "");
            setAge(res.data.age || "");
            setStatus(res.data.status || "");
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const updateData = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/update/${id}`, { name, email, age, status })
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={updateData}>
                    <div className="container mt-5">
                        <div className="card shadow-lg p-4">
                            <h2 className="text-center text-primary mb-4">Update Member</h2>
                            
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-bold">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-bold">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label fw-bold">Age</label>
                                <input
                                    type="number"
                                    placeholder="Enter Age"
                                    className="form-control"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label fw-bold">Status</label>
                                <input
                                    type="text"
                                    placeholder="Enter Status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                            </div>
                            
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Update Member</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
