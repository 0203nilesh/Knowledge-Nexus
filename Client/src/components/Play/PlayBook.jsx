import React from 'react'
import { useSelector } from 'react-redux'
import "./styles.css";

export const PlayBook = () => {
    const book= useSelector((state)=> state.library.bookData);
    console.log(book);
  return (
    <>
    <div className="container">
        <h2 className='heading text-center mt-3 mb-1 text-light' > {book.name}</h2>
        <h6 className="subHeading text-center text-light mb-5">{book.Author}</h6>
        <p className='text-light text-center'>Edition:- {book.year} </p>
        <img src={book.src} className="mx-auto d-block"  width={"300px"} height={"300px"} alt="..."/>
        <div className="container center">
          <h2  className='mt-4 text-light' >Details:</h2>
        <p className='desc text-light p-2'> {book.details} </p>
        </div>
    </div>
    </>
  )
}
