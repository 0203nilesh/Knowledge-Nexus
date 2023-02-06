import React, { useState } from 'react'
import { Video } from './Video'
import { useSelector } from 'react-redux'
import { Loading } from '../Loading/Loading'

export const Playlist = () => {
    const data= useSelector((state)=> state.videos.vidoesData);
    console.log(data);
  return (
    <>
        <div className="col-9">
      <div className="p-3 playlist border bg-light">
        <div className="container">
            <div className="row gy-3">
                {data.length===0? (<>
                  <Loading/>
                  <p className='text-center'>Click on the Video link from the More Action in Navbar.</p>
                </>):(<>
                  {data?.map((video)=>{
                  return(
                    <>
                      <div className="col d-flex justify-content-center align-items-center">
                        <Video video={video} />
                    </div>
                    </>
                  )
                })}
                </>)}
             </div>
            </div>
      </div>
    </div>
    </>
  )
}
