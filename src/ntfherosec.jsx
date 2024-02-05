import React from "react";
import "./ntfherosec.css";
const Ntfherosection = () => {
  return (
    <>
      <div className="herosection">
        <div className="heroperas">
          <div className="heroh1one">
            <h1>Unlimited movies, TV shows and more</h1>
          </div>
          <div className="heroh3two">
            <h3> Watch anywhere. Cancel anytime. </h3>
          </div>
          <div className="heropera">
            <h2>
              Ready to watch? Enter your email to create or restart your
              membership.{" "}
            </h2>
          </div>
        </div>
        <div className="herosec-searchbox">
          <div className="hero-searchboxinput">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="hero-searchboxbtn">
            <button>
              Get Started <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ntfherosection;
