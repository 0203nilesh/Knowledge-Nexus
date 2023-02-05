import React, { useState } from 'react';
import { login } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import './style.css';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const [data, setData]= useState({
        userName: "",
        password: ""
    })
    const changeHandler = (event)=>{
        const name= event.target.name;
        const val= event.target.value;
        setData((prevvalue)=>{
            return {...prevvalue, [name]: val};
        })
    }
    const submitForm = (event)=>{
        dispatch(login(data, navigate));
        event.preventDefault();
    }
  return (
    <>
    <div className="loginForm mx-auto" style={{width:"500px"}}>
        <h1 className='heading text-center text-light  mt-5'>E-Mentorship</h1>
    <div className="backgroundColor container w-100 text-light my-5  b-2 border border-white rounded-top rounded-bottom pb-2">
        <h2 className='text-center my-3  mx-auto'> 
        <i className="fa-light fa-lock-hashtag" ></i>         
        &nbsp;Login Form</h2>
  <form onSubmit={submitForm} className=' my-3 mx-auto'>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" value={data.userName} name='userName' className="form-control bg-dark  text-light" id="exampleInputEmail1" onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter email"  required/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" value={data.password} name='password' className="form-control bg-dark text-light" onChange={changeHandler} id="exampleInputPassword1" placeholder="Password" required/>
      </div>
        <button type="submit"  className="btn text-light border border-primary my-4 mx-auto d-block ">Submit</button>
      <div className='social-media d-flex  justify-content-center' style={{gap: "30px"}} >
        <i className='fa fa-google' style={{cursor: "pointer"}} onClick={()=>{alert("Google Alert is not working")}} ></i>
        <i className='fa fa-facebook ' style={{cursor: "pointer"}}   ></i>
        <i className='fa fa-instagram ' style={{cursor: "pointer"}}  ></i>
      </div>
  </form>
    </div>
  </div>
  </>
  )
}
