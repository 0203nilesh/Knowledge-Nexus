import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetch_article } from '../../actions/articles';

export const Article = ({article}) => {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
                  <img src={article.src} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{article.name}</h5>
                    <p className="card-text">{`${article.details.slice(0,50)}...`}</p>
                    <button href="#" className="btn btn-primary" onClick={()=>{
                        dispatch(fetch_article(article.id, navigate));                      
                    }} >Read more</button>
                  </div>
                </div>
    </>
      )
}
