import React, { useState } from 'react';
import './style.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
    // const isLogin= useSelector((state)=> state.auth.authData.isLogin);
    const [isLogin , setIsLogin]= useState(false);
  return (
    <div>
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
                                    <li><a className="dropdown-item" href="/articles">Articles</a></li>
                                    <li><a className="dropdown-item" href="/videos">Videos</a></li>
                                    <li><a className="dropdown-item" href="/library">Library</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse justify-content-end" id="my-navbar">
                            <ul className="navbar-nav">
                               {!isLogin? (<>
                                <a href="/join"><button className='mx-2 btn btn-primary'>Chat with Friends</button></a>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/register" onClick={()=>{setIsLogin(true)}} data-toggle="modal" data-target="#signup-modal">
                                        <i className="fas fa-user"></i>Signup
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/" data-toggle="modal" data-target="#login-modal">
                                        <i className="fas fa-sign-in-alt"></i>Login
                                    </a>
                                </li>
                               </>):(<>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/"onClick={()=>{setIsLogin(false)}} data-toggle="modal" data-target="#login-modal">
                                        <i className="fas fa-sign-in-alt"></i>Logout
                                    </a>
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
