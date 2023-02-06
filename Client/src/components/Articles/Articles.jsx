import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetch_articles_by_search } from '../../actions/articles';
import { ArticleRow } from './ArticleRow'
import './styles.css';

export const Articles = () => {
  const dispatch= useDispatch();
  const [inputText, setInputText] = useState("");
  function changeHandler(event){
    setInputText(event.target.value);
  }
  function search (event){
    event.preventDefault();
    dispatch(fetch_articles_by_search(inputText));
    setInputText("");
  }

  return (
    <>
    <div className="main-container overflow-hidden ">
        <h3 className=' heading text-light text-center pt-2 '>Here are the articles that will help you.</h3>
        <p className='quote text-center text-light pb-2'>"I have always imagined that Paradise will be a kind of a Library."</p>
        <form action="#" onSubmit={search} className='d-flex  justify-content-center my-3'>
          <input type="search" name="search" onChange={changeHandler} value={inputText} id="search"  placeholder="Search for books"/>
          <button type='submit' className='btn btn-primary' >Search</button>
        </form>
      <div className="row gy-5 justify-content-center">
        <ArticleRow/>
      </div>
    </div>
    </>
  )
}
