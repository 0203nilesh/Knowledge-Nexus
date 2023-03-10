import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetch_book } from '../../actions/library';

export const Book = ({book}) => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
                  <img src={book.src} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{`${book.name.slice(0,24)}...`}</h5>
                    <p className="card-text">{`${book.details.slice(0,70)}...`}</p>
                    <a href={`/playbook/${book.id}`}>
                    <button className="btn btn-primary">Go somewhere</button>
                    </a>
                  </div>
                </div>
    </>
  )
}
