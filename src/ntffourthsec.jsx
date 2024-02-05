import React from "react";
import "./ntffourthsec.css";
import video from "./vedios/videom.mp4";

const Ntffourthsec = () => {
  return (
    <>
      <div className="ntfsecondsection">
        <div className="secondsecpera">
          <div className="secondsech1pera">
            {" "}
            <h1>Watch everywhere</h1>{" "}
          </div>
          <div className="secondsech3pera">
            {" "}
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>{" "}
          </div>
        </div>
        <div className="secondsectv">
          <div className="secondtvplace">
            <img
              src={require("./ntfimages/device-pile-in.png")}
              alt="netflixtv"
            />
          </div>
          <div className="secondtvvedio">
            <div className="Appvedio4">
              <video controls loop autoPlay id="secvedio" height="34px">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ntffourthsec;
