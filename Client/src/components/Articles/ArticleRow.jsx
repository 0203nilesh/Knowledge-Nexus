import React from 'react'
import { useSelector } from 'react-redux'
import { Article } from './Article'
import {Loading} from  '../Loading/Loading';

export const ArticleRow = () => {
  let data= useSelector((state)=> state.articles.articleData);
  // if(data.length===0){
  //   data =JSON.parse(localStorage.getItem("articleData"));
  // }
  console.log(data);
  return (
    <>
      <div className="col-9">
      <div className="p-3 border bg-light">
        <div className="container">
            <div className="row gy-3">
                {data.length===0? (<>
                  <Loading/>
                  <p className='text-center'>Click on the Article link from the More Action in Navbar.</p>
                </>) :(
                  <>
                  {data?.map((article)=>{
                  return(
                    <>
                      <div className="col d-flex justify-content-center align-items-center">
                        <Article article={article} />
                    </div>
                    </>
                  )
                })}
                </>
                )}
             </div>
            </div>
      </div>
    </div>
    </>
  )
}
