import React from 'react'
import ReactPlayer from 'react-player'

export const PlayVid = () => {
  return (
    <>
    <div className="container">
        <h2 className='heading text-center mt-3 mb-2 text-light' > Title of this Video</h2>
        <ReactPlayer url="https://youtu.be/Nro6oFD3oHw" width={"100%"} height={"550px"} controls="control"/>
        <p className='desc text-light p-5'>Details of video Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi quam eveniet dolorem harum illo dolore aliquid, minus expedita. Alias rerum beatae unde aliquam laudantium ducimus voluptatibus eaque corrupti, laboriosam modi blanditiis laborum similique.</p>
    </div>
    </>
  )
}
