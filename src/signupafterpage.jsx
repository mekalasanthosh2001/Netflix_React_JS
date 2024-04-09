import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignupAfterpage.css";
import "./ntfhome.css";
import Slickpage from "./api-files/slickepage";
import Apiintegration from "./api-files/api";
import { FaCircleUser } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import NftFooter from "./footer";


const Signupafterpage = () => {
  const [storedData, setStoredData] = useState(null);
  const [showProfileData, setShowProfileData] = useState(false);

  const getLocalData = () => {
    const data = localStorage.getItem("user");
    if (data) {
      let parsedData = JSON.parse(data);
      setStoredData(parsedData);
      setShowProfileData(true);
    }
  };

  const handleProfileButtonClick = () => {
    if (!showProfileData) {
      getLocalData();
    }
  };

  const handleDoubleClick = () => {
    setShowProfileData(false); 
  };

  useEffect(() => {
    return () => {
      setShowProfileData(false);
    };
  }, []);

  return (
    <>
      <div className="Signupafterpage">
        <div className="navbar">
          <div className="navlist">
            <Link to="/Netflix_React_JS">
              <h1>NETFLIX</h1>
            </Link>
          </div>
          <div className="navullist">
            <ul>
              <select name="" id="selectoptions">
                <option value="english" selected>
                  ENGLISH
                </option>
                <option value="hindi">HINDI</option>
                <option value="telugu">TELUGU</option>
              </select>

              <div className="Profile">
                
                <button
                  className="profile-btn"
                  onClick={handleProfileButtonClick}
                  onDoubleClick={handleDoubleClick} 
                >
                  Profile
                </button>
              </div>

              {showProfileData && storedData && (
                <div className="profile-data">
                  <div className="profile-data-pera">
                    <div className="profile-name">
                      <span className="nameiconspace">
                        <FaCircleUser className="icons-user" />
                      </span>
                      <span className="namesspace">{storedData.username}</span>
                    </div>
                    <div className="profile-email">
                    <MdMarkEmailUnread   className="icons-mail" />
                        {storedData.useremail}
                    </div>
                    <div className="profile-email">
                      <BsFillTelephoneFill className="icons-mail" />
                      {storedData.usermobile}
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
        <Slickpage />
      </div>
      <div>
        <Apiintegration />
      </div>
      <div className="footer"><NftFooter></NftFooter></div>
    </>
  );
};

export default Signupafterpage;
