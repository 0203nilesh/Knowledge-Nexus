import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../actions/auth';
import './style.css';

export const Register = () => {
  const navigate= useNavigate();
  const interestItems=['Web development', 'Machine learning', 'DSA' , 'R F microwave', 'App development', 'Android app development'];
    const dispatch= useDispatch();
    const [data, setData]= useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        interest: []
    })
    const changeHandler = (event)=>{
        const name= event.target.name;
        const val= event.target.value;
        setData((prevvalue)=>{
            return {...prevvalue, [name]: val};
        })
    }
    const checkBoxHandler= (event)=>{
      const name=Number(event.target.name);
      const val= event.target.checked;
      let tempArr= data.interest;
      if(val===true){
        if(!tempArr.includes(interestItems[name])){
          tempArr.push(interestItems[name]);
        }
      }else{
        tempArr= tempArr.filter((element)=>{
          return element!== interestItems[name];
        })
      }
      console.log(tempArr);
      setData((prevvalue)=>{
        return {...prevvalue, interest: tempArr}
      })
    }
    const submitForm = (event)=>{
      // const baseUrl= "http://localhost:5000/test/post";
      // axios.post(baseUrl, {name: "nilesh", surname: "chauhan"}).then((resposne)=>{
      //   console.log(resposne);
      // })
      dispatch(register(data, navigate));
      event.preventDefault();
    }
  return (
    <>
      <div className="main-container-reg "  >
       <div className=" registraionForm text-light my-5 ">
        <h2 className='text-center  mx-auto'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" className="bi bi-file-lock2" viewBox="0 0 16 16">
  <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
         </svg>
         &nbsp;Registration Form</h2>
        <form className=' my-4 mx-auto' onSubmit={submitForm}>
          <div className="form">
      <div className="form-group w-50 mx-1">
        <label htmlFor="exampleInputEmail1">First Name:</label>
        <input type="text" value={data.firstName} name='firstName' className="form-control bg-dark text-light" id="exampleInputEmail1" onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter First name" required />
      </div>
      <div className="form-group w-50">
        <label htmlFor="exampleInputEmail1">Last Name:</label>
        <input type="text" value={data.lastName} name='lastName' className="form-control bg-dark text-light" id="exampleInputEmail1" onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter Last name" required />
      </div>
          </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address:</label>
    <input type="email" value={data.userName} name='userName' className="form-control bg-dark text-light" id="exampleInputEmail1" onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter email" required />
  </div>
  <div className="form-group">
  <label hmtlFor="exampleFormControlSelect1" >Your Interests: </label>
      <div className="d-flex flex-wrap justify-content-center">
      <div className="form-check my-1 mx-2 ">
        <input className="form-check-input  " name="1" onClick={checkBoxHandler} type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label"  hmtlFor="flexCheckDefault">
          Web development
        </label>
      </div>
      <div className="form-check my-2 mx-2">
        <input className="form-check-input" name='2' onClick={checkBoxHandler} type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" hmtlFor="flexCheckChecked">
          Machine Learning
        </label>
      </div>
      <div className="form-check m-2 mx-2">
        <input className="form-check-input" name='3' onClick={checkBoxHandler} type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" hmtlFor="flexCheckChecked">
          DSA
        </label>
      </div>
      <div className="form-check m-2 mx-2">
        <input className="form-check-input" name='4' onClick={checkBoxHandler} type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" hmtlFor="flexCheckChecked">
          R F microwave
        </label>
      </div>
      <div className="form-check m-2 mx-2"> 
        <input className="form-check-input" name='4' onClick={checkBoxHandler} type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" hmtlFor="flexCheckChecked">
          App development
        </label>
      </div>
      <div className="form-check m-2 mx-2">
        <input className="form-check-input" name='5' onClick={checkBoxHandler} type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" hmtlFor="flexCheckChecked">
          Android app development
        </label>
      </div>
      </div>
  </div>

  <div className="form-group ">
    <label htmlFor="exampleInputPassword1">Password:</label>
    <input type="password" value={data.password} name='password' className="form-control bg-dark text-light" onChange={changeHandler} id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <button type="submit"  className=" btn-reg  bg-dark text-light" >Submit</button>
</form>
    </div>
  </div>
    </>
  )
}
