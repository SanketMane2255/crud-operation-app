import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

  const [info,setInfo] = useState([]);

  const getData = async () =>{
    const res = await axios.get('http://localhost:4000/')
    setInfo(res.data)
  }


  useEffect(()=>{
    getData()
  },[])

  const remove = async(id) =>{
    await axios.delete('http://localhost:4000/delete/'+ id).then(()=>{getData()})
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
  <div className="container d-flex justify-content-center">
    <div className="card shadow-lg w-75">
      <div className="card-header bg-dark text-white text-center">
      <Link to="/create" className="btn btn-success">
          Add New +
        </Link>
      </div>
      <div className="card-body p-4">
        <table className="table table-hover table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            
           {info.map((data,i)=>{
            return(
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.status}</td>
                <td>
                <Link to={`update/${data.id}`} className="btn btn-sm btn-info me-2">
                      Edit
                </Link>
                <button className="btn btn-sm btn-danger" onClick={()=>{remove(data.id)}}>Delete</button>
                </td>
              </tr>
            );
           })}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

   )
}

export default Read