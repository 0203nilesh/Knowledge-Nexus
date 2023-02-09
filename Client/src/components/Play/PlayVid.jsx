import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetch_video } from '../../actions/videos';
import Footer from '../Footer/Footer';
import { Loading } from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import './styles.css';

export const PlayVid = () => {
  const dispatch= useDispatch();
  const {id}= useParams();
  const {videosData, isLoading}= useSelector((state)=> state.videos);
  console.log(videosData);
  useEffect(()=>{
    dispatch(fetch_video(id));
  },[id])
  if(!videosData) return null;
  return (
    <>
    <Navbar/>
    <div className="hero-container">
        {isLoading?(<>
          <h3 className='text-center text-light'>Wait a Moment</h3>  
        <Loading/>
        </>):(
          <>
            <h2 className='heading text-center mt-3  text-light' > {videosData.name}</h2>
        <div className='video-container' >
        <ReactPlayer url={videosData.url} width={"80%"} height={"90%"}  controls="control"/>
        </div>
        <div className="container center">
          <h2  className='mt-4 details text-light' >Description</h2>
        <p className='desc text-light p-2'> {videosData.details} </p>
        </div>
          </>
        )}
    </div>
    <Footer/>
    </>
  )
}
