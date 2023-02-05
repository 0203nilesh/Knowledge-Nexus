import React from 'react'
import { useSelector } from 'react-redux'
import { Article } from './Article'

export const ArticleRow = () => {
  const data= useSelector((state)=> state.articles.articleData.data.data);
  console.log(data);
  return (
    <>
      <div className="col-9">
      <div className="p-3 border bg-light">
        <div className="container">
            <div className="row gy-3">
                {data?.map((article)=>{
                  return(
                    <>
                      <div className="col d-flex justify-content-center align-items-center">
                        <Article article={article} />
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
