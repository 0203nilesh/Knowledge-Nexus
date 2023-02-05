import React from 'react'
import { Book } from './Book'
import { useSelector } from 'react-redux'

export const Shelf = () => {
    const data= useSelector((state)=>state.library.bookData.data?.data)
    console.log(data);
  return (
    <>
        <div className="col-9">
      <div className="p-3 border bg-light">
        <div className="container">
            <div className="row gy-3">
                {data?.map((book)=>{
                  return(
                    <>
                      <div className="col d-flex justify-content-center align-items-center">
                          <Book book={book}  />
                      </div>
                    </>
                  )
                })}
             </div>
            </div>
      </div>
    </div>
    </>
  )
}
