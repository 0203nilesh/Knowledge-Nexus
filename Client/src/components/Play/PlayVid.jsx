import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

export const PlayVid = () => {
  const video= useSelector((state)=> state.videos.vidoesData);
  console.log(video);
  return (
    <>
    <div className="container">
        <h2 className='heading text-center mt-3 mb-5 text-light' > {video.name}</h2>
        <ReactPlayer url={video.url} width={"100%"} height={"550px"} controls="control"/>
        <div className="container center">
          <h2  className='mt-4 text-light' >Description</h2>
        <p className='desc text-light p-2'> {video.details} </p>
        </div>
    </div>
    </>
  )
}
