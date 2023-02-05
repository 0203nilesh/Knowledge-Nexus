import React, { useState } from "react";
import "./Join.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  //joinInput ka value ko user me daal do
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
  //  After that value ko "" empty kr die
};

const Join = () => {
  const [name, setname] = useState("");

  console.log(name);

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>LET'S CHAT</h1>
        <input
          // e.target.value ---> setname
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        />
        <Link
          onClick={(event) => {
            if (!name) {
              event.preventDefault();
              alert("Please Enter your name");
            }
          }}
          to="/chat"
        >
          {" "}
          <button onClick={sendUser} className="joinbtn">
            Join Chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
