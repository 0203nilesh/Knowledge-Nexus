import React from 'react'
import { useSelector } from 'react-redux'

export const Book = ({book}) => {
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
                  <img src={book.src} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                    <p className="card-text">{`${book.details.slice(0,70)}...`}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
    </>
  )
}
