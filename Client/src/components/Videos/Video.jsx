import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { fetch_video } from '../../actions/videos';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export const Video = ({video}) => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  return (
    <>
        <>
        <div className="card" style={{width: "18rem"}}>
                    <ReactPlayer url={video.url} className="video"  width="100%" height={"100%"} controls="control"/>
                  <div className="card-body">
                    <h5 className="card-title">{`${video.name.slice(0,24)}...`}</h5>
                    <p className="card-text">{`${video.details.slice(0,50)}...`}</p>
                    <a href={`/playvid/${video.id}`}>
                    <button  className="btn btn-primary ">Watch Now</button>
                    </a>
                  </div>
                </div>
    </>
    </>
  )
}
