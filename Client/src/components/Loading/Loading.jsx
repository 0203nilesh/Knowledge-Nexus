import React from "react";
import './styles.css';

export const  Loading= ()=>{
    return(
    <>
    <div className="loaderDiv">
        <div id="Loader">
        <div className="preloader-orbit-loading">
          <div className="cssload-inner cssload-one"></div>
          <div className="cssload-inner cssload-two"></div>
          <div className="cssload-inner cssload-three"></div>
        </div>
      </div>
    </div>
    </>)
}