import React from "react";
import "./ntfsecondsec.css";

import video from "../src/ntfimages/vediok.mp4";
const Ntfsecondsection = () => {
  return (
    <>
      <div className="ntfsecondsection">
        <div className="secondsecpera">
          <div className="secondsech1pera">
            <h1>Enjoy on your TV</h1>
          </div>
          <div className="secondsech3pera">
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
        </div>
        <div className="secondsectv">
          <div className="secondtvplace">
            <img src={require("./ntfimages/tv.png")} alt="netflixtv" />
          </div>
          <div className="secondtvvedio">
            <div className="Appvedio">
              <video width="400" height="auto" controls loop autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ntfsecondsection;
