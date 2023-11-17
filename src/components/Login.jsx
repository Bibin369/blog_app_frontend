import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate=useNavigate()
    const [inputField, changeinputField] = useState(

        {
            "email": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        changeinputField({ ...inputField, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(inputField)
        if ( inputField.email==="admin@gmail.com" && inputField.password==="12345") {
            navigate("/Add")
            
        } else {
            alert("Inavlid credential")
            
        }
        alert("Login successfull")

    }
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <center><h1>LOGIN</h1></center>

                            <div class="card text-center">
                                <div class="card-header">
                                    Please enter login details
                                </div>
                                <div class="card-body">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" name="email" value={inputField.email} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" name="password" value={inputField.password} onChange={inputHandler} className="form-control" />
                                    </div>

                                    <br></br>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button onClick={readValue} className="btn btn-success">Submit</button>
                                    </div>
                                    <br></br>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <Link to="/register"class="btn btn-primary">Register</Link>
                                    </div>
                                    
                              
                                </div>
                                <div class="card-footer text-body-secondary">
                                    Bibin Thomas
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}