import React, { useEffect } from 'react'
import { Book } from './Book'
import { useSelector } from 'react-redux'
import {Loading} from '../Loading/Loading';
import './styles.css';

export const Shelf = () => {
    const {booksData, isLoading}= useSelector((state)=>state.library)
    console.log(booksData.length);
    if(!booksData.length && !isLoading) return "No Posts";
  return (
    <>
      <div className="col-9">
      <div className="p-3 shelf">
        <div className="container">
            <div className="row gy-5">
                {booksData?.length===0? (<>
                  <h3 className='text-center'>Wait a Moment</h3>
                  <Loading/>
                  </>):(<>
                    {booksData?.map((book)=>{
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
