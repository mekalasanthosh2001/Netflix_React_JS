import React from "react";
import "./nththirdsec.css";

const NtfThirdsec = () => {
  return (
    <>
      <div className="thirdsection">
        <div className="nththirdsection">
          <div className="thirdsec-image">
            <div className="thirdsecimgimg">
              <img
                src={require("./ntfimages/mobile-0819.jpg")}
                alt="mobileimage"
              />
            </div>
            <div className="thrdminibox">
              <img src={require("./ntfimages/boxshot.png")} alt="boximges" />
              <div className="imgboxtextone">
                <p className="imgtextpera">Staranger Things</p>
                <p className="downloading">Downloading...</p>
              </div>
              <div className="imageboxdwldicon">
                <img
                  src={require("./ntfimages/download-icon.gif")}
                  alt="icongif"
                />
              </div>
            </div>
          </div>
          <div className="thirdsec-textside">
            <div className="thirdsidetextone">
              <h1>Download your shows to watch offline</h1>
              <h3>
                Save your favourites easily and always have something to watch.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NtfThirdsec;
