import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import "./styles.css";
import { useParams } from 'react-router-dom';
import { fetch_article } from '../../actions/articles';
import { Loading } from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export const PlayArticle = () => {
  const dispatch= useDispatch();
  const {articleData, isLoading}= useSelector((state)=> state.articles);
  const {id}= useParams();
  useEffect(()=>{
        dispatch(fetch_article(id));
  }, [id])
  console.log(articleData);
  return (
    <>
      <Navbar/>
    <div className="hero-container">
      {isLoading? (<>
        <h3 className='text-center text-light'>Wait a Moment</h3>
      <Loading/>
      </>):(<>
        <h2 className='heading text-center mt-3 mb-5 text-light' > {articleData.name}</h2>
        <img src={articleData.src} className="mx-auto d-block"   alt="..."/>
        <div className="container center">
          <h2  className='mt-4 details text-light' >Details:</h2>
        <p className='desc text-light p-2'> {articleData.details} </p>
        </div>
        <span className='text-light ms-5'>Published Data:- {articleData.year.slice(0,10)} </span>
      </>)}
    </div>
      <Footer/>
    </>
  )
}
