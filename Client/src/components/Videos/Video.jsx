import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { fetch_video } from '../../actions/videos';
import { useNavigate } from 'react-router-dom';

export const Video = ({video}) => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  return (
    <>
        <>
        <div className="card" style={{width: "18rem"}}>
                    <ReactPlayer url={video.url} width="100%" height={"100%"} controls="control"/>
                  <div className="card-body">
                    <h5 className="card-title">{video.name}</h5>
                    <p className="card-text">{`${video.details.slice(0,50)}...`}</p>
                    <button onClick={()=>{
                        dispatch(fetch_video(video.id, navigate));
                      ;
                    }} className="btn btn-primary">Watch Now</button>
                  </div>
                </div>
    </>
    </>
  )
}
