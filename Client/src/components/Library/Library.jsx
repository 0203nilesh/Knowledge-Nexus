import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetch_all_book } from '../../actions/library'
import { Shelf } from './Shelf';
import './styles.css';

export const Library = () => {
  const [isTrue, setIsTrue]= useState(false);
  setTimeout(()=>{
     setIsTrue(true);
  },1500)

  const dispath= useDispatch();
  dispath(fetch_all_book());
  return (
    <>
      <div className="main-container  overflow-hidden ">
        <h3 className='heading text-light text-center py-3'>Issue book from our library</h3>
        <p className='quote text-center text-light'>"I have always imagined that Paradise will be a kind of a Library."</p>
        <form action="#" className='d-flex  justify-content-center my-3'>
          <input type="search" name="search" id="search"  placeholder="Search for books"/>
          <button className='btn btn-primary' >Search</button>
        </form>
  <div className="row gy-5 justify-content-center">
        {isTrue && <Shelf/>}
  </div>
</div>
    </>
  )
}
