import React, { useEffect } from 'react'
import { Book } from './Book'
import { useSelector } from 'react-redux'
import {Loading} from '../Loading/Loading';

export const Shelf = () => {
    const data= useSelector((state)=>state.library.bookData)
    console.log(data.length);
  return (
    <>
      <div className="col-9">
      <div className="p-3 border bg-light">
        <div className="container">
            <div className="row gy-3">
                {data?.length===0? (<>
                  <Loading/>
                  <p className='text-center'>Click on the Library link from the More Action in Navbar.</p>
                  </>):(<>
                    {data?.map((book)=>{
                  return(
                    <>
                      <div className="col d-flex justify-content-center align-items-center">
                          <Book key={book.id} book={book}  />
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
