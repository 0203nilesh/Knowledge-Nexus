import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import "./styles.css";

export const PlayArticle = () => {
  const article= useSelector((state)=> state.articles.articleData);
  console.log(article);
  return (
    <>
    <div className="container">
        <h2 className='heading text-center mt-3 mb-5 text-light' > {article.name}</h2>
        <img src={article.src} className="mx-auto d-block"  width={"300px"} height={"300px"} alt="..."/>
        <div className="container center">
          <h2  className='mt-4 text-light' >Details:</h2>
        <p className='desc text-light p-2'> {article.details} </p>
        </div>
        <span className='text-light'>Published Data:- {article.year} </span>
    </div>
    </>
  )
}
