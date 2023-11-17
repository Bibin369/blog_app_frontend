import axios from 'axios';
import React, { useState } from 'react'
import Header from './Header';

const ViewmyPost = () => {
    const [inputfield, changeinputfield] = useState({
      userid: '',
    });
  
    const inputHandler = (event) => {
      changeinputfield({ ...inputfield, [event.target.name]: event.target.value });
    };
  
    const [result, changeResult] = useState([]);
  
    const readValue = () => {
      console.log(inputfield);
      axios.post('http://127.0.0.1:8000/post/search/', inputfield).then((response) => {
        changeResult(response.data);
      });
    };
  
    return (
      <div>
        <Header></Header>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    User ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="userid"
                    value={inputfield.userid}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={readValue} className="btn btn-success">
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          {result.map((value, index) => (
            <div className="row" key={index}>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">
                      Title
                    </label>
                    <input type="text" className="form-control" name="title" value={value.title} readOnly />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">
                    Message:
                    </label>
                    <input type="text" className="form-control" name="message" value={value.message} readOnly />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default ViewmyPost