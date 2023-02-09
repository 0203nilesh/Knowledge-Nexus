import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./styles.css";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetch_book } from '../../actions/library';
import { Loading } from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export const PlayBook = () => {
    const dispatch= useDispatch();
    const {booksData, isLoading}= useSelector((state)=> state.library);
    const {id}= useParams();
    useEffect(()=>{
      dispatch(fetch_book(id));
    },[id])
    console.log(booksData);
    if(!booksData) return null;
  return (
    <>
    <Navbar/>
    <div className="hero-container">
        {isLoading? (<>
          <h3 className='text-center text-light'>Wait a Moment</h3>
          <Loading/>
        </>):(<>
          <h2 className='heading text-center mt-3 mb-1 text-light' > {booksData.name}</h2>
        <h6 className="subHeading text-center text-light mb-5">{booksData.Author}</h6>
        <p className='text-light text-center'>Edition:- {booksData.year} </p>
        <img src={booksData.src} className="mx-auto d-block"  alt="..."/>
        <div className="container center">
          <h2  className='mt-4 details text-light' >Details:</h2>
        <p className='desc text-light p-2'> {booksData.details} </p>
        </div>
        </>)}
    </div>
    <Footer/>
    </>
  )
}
