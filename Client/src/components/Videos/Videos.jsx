import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetch_all_vidoes } from '../../actions/videos';
import { Playlist } from './Playlist';

export const Videos = () => {
    const [isTrue, setIsTrue]= useState(false);
    setTimeout(()=>{
       setIsTrue(true);
    },1500)
    const dispatch= useDispatch();
     dispatch(fetch_all_vidoes());
  return (
    <>
        <div className="main-container overflow-hidden ">
        <h3 className=' heading text-light text-center pt-2 '>Here are the videos tutorial that will help you.</h3>
        <p className='quote text-center text-light pb-2'>"I have always imagined that Paradise will be a kind of a Library."</p>
        <form action="#" className='d-flex  justify-content-center my-3'>
          <input type="search" name="search" id="search"  placeholder="Search for books"/>
          <button className='btn btn-primary' >Search</button>
        </form>
      <div className="row gy-5 justify-content-center">
        {isTrue && <Playlist/> }
      </div>
    </div>
    </>
  )
}
