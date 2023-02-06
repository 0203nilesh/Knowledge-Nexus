import React, { useState } from 'react'
import { Shelf } from './Shelf';
import { useDispatch } from 'react-redux';
import './styles.css';
import { fetch_book_by_search } from '../../actions/library';

export const Library = () => {
  const dispatch= useDispatch();
  const [inputText, setInputText] = useState("");
  function changeHandler(event){
    setInputText(event.target.value);
  }
  function search (event){
    event.preventDefault();
    dispatch(fetch_book_by_search(inputText));
  }
  return (
    <>
      <div className="main-container  overflow-hidden ">
        <h3 className='heading text-light text-center py-3'>Issue book from our library</h3>
        <p className='quote text-center text-light'>"I have always imagined that Paradise will be a kind of a Library."</p>
        <form action="#" onSubmit={search} className='d-flex  justify-content-center my-3'>
          <input type="search" onChange={changeHandler} value={inputText} name="search" id="search"  placeholder="Search for books"/>
          <button type='submit' className='btn btn-primary' >Search</button>
        </form>
  <div className="row gy-5 justify-content-center">
        <Shelf/>
  </div>
</div>
    </>
  )
}
