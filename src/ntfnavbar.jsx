// import React from "react";
import "./ntfnavbar.css";
import React, {  useState } from "react";

import SignupPopup from "./signuppopup";

import { Link } from "react-router-dom";

const Ntfnavbar = ({ dashboardLink }) => {
  const [signupnow, setmodals] = useState(false);
 



  const signin = () => {
    setmodals(!signupnow);
  };


  return (
    <>
      <div className="navbar">
        <div className="navlist">
          <h1>NETFLIX</h1>
        </div>
        <div className="navullist">
          <ul>
            <select name="" id="selectoptions">
              <option value="english" selected>
                ENGLISH
              </option>
              <option value="english">HINDI</option>
              <option value="english">TELUGU</option>
            </select>
            <button
              className="redbtn"
              onClick={signin}
              style={{ cursor: "pointer" }}
            >
              Sign In
            </button>

            <div className="dashboardpage" >
              <Link to={dashboardLink }>
                <button className="Dashboard" style={{display:'block'}} >DashBoard</button>
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {signupnow ? <SignupPopup /> : ''}
    </>
  );
};

export default Ntfnavbar;


