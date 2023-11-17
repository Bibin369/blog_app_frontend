import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Registration = () => {
    const navigate=useNavigate()
    const[inputfield,changeinputfield]=useState(
        {
        "name":"",
        "image":"",
        "email":"",
        "password":""
    }
        )
        const inputHandler=(event)=>{
            changeinputfield({...inputfield,[event.target.name]:event.target.value})
        }
        const readValue=()=>{
            console.log(inputfield)
            axios.post("http://127.0.0.1:8000/login/register/",inputfield).then(
                (response)=>{
                    navigate("/")
                }
            )
    
            }
  return (
    <div>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={inputfield.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="text" className="form-control" name="image" value={inputfield.image} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email ID:</label>
                            <input type="text" className="form-control"  name="email" value={inputfield.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name="password" value={inputfield.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">SUBMIT</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration

