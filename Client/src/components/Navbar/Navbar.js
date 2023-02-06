import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetch_all_book } from '../../actions/library'
import { fetch_all_vidoes } from '../../actions/videos';
import { fetch_all_articles } from '../../actions/articles';
import { logout } from '../../actions/auth';
import {Alert}  from '../Alert/Alert';

export default function Navbar() {
    const [showAlert, setShowAlert]= useState(false);
    const navigate= useNavigate();
    const dispatch= useDispatch();
    let user=  useSelector((state)=>state.auth) ;
    if(user.authData===null){
        user=JSON.parse(localStorage.getItem("user"));
    }
    console.log(user);
  return (
    <div>
        {showAlert && (<>
            <Alert message={"Actions are in progress"} type={"primary"} />
        </>)}
      <div id="topp">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <img src="img\logo.svg" style={{width: "30px", height: "30px"}}/>
                    <a className="navbar-brand" href="/home">KnowledgeNexus</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/faq">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/scholarship">Scholarship</a>
                            </li>

                        
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    More Actions
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#" onClick={()=>dispatch(fetch_all_articles(navigate))}>Articles</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={()=>dispatch(fetch_all_vidoes(navigate))}>Videos</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={()=>{ dispatch(fetch_all_book(navigate))}}>Library</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" onClick={()=>{
                                        setShowAlert(true);
                                        setTimeout(()=>{
                                            setShowAlert(false);
                                        },3000)
                                    }} >Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse justify-content-end" id="my-navbar">
                            <ul className="navbar-nav">
                               {! user?.isLogin? (<>
                                <a href="/join"><button className='mx-2 btn btn-primary'>Chat with Friends</button></a>
                                <li className="nav-item">
                                    <a href="/register">
                                    <button className="nav-link active"  style={{borderRadius: "7px"}}   data-toggle="modal" data-target="#signup-modal">
                                        <i className="fas fa-user"></i>Signup
                                    </button>
                                    </a>
                                </li>
                                <li className="nav-item ps-1" >
                                    <a href="/">
                                    <button className="nav-link active " style={{borderRadius: "7px"}} data-toggle="modal" data-target="#login-modal">
                                        <i className="fas fa-sign-in-alt"></i>Login
                                    </button>
                                    </a>
                                </li>
                               </>):(<>
                                <li className="nav-item">
                                    <button className="nav-link active"  style={{borderRadius: "7px"}} onClick={()=>{dispatch(logout(navigate))}} data-toggle="modal" data-target="#login-modal">
                                        <i className="fas fa-sign-in-alt"></i>Logout
                                    </button>
                                </li>
                               </>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    </div>
    
    
  )
}
