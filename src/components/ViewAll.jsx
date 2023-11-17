import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';

const ViewAll = () => {
    const [data, changeData] = useState([]);
    const [isLoading, changeLoading] = useState(true);

    const fetchData = () => {
        axios.post("http://127.0.0.1:8000/post/viewall/").then((response) => {
            changeData(response.data);
            changeLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Header></Header>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row g-3">
                            {isLoading ? (
                                <p>
                                    <center>
                                    <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </center>
                                </p>
                            ) : (
                                data.map((value, index) => (
                                    <div key={index} className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                                        <div className="card">
                                            {/* <img height="250px" width="250px" src={value.image} className="card-img-top" alt="..." /> */}
                                            <div className="card-body">
                                                <h5 className="card-title">User ID : {value.userid}</h5>
                                                <p className="card-text">Title : {value.title}</p>
                                                <p className="card-text">Message : {value.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAll;
