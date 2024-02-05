// import React from "react";
import "./ntfnavbar.css";
import React, { useState } from "react";

import SignupPopup from "./signuppopup";

const Ntfnavbar = () => {
  const [signupknow, setmodals] = useState(false);

  const redyy = () => {
    setmodals(!signupknow);
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
            <button className="redbtn" onClick={redyy}>
              Sign In
            </button>
            {/* <button onClick={getsignuppage}> click and signup</button> */}
          </ul>
        </div>
      </div>

      {signupknow ? <SignupPopup /> : ""}
    </>
  );
};

export default Ntfnavbar;
