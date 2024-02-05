// import React from 'react'
import "./SignupPopup.css";
const SignupPopup = () => {
  return (
    <>
      <div className="signuppopupbox">
        <p style={{ textAlign: "right" }}>Re Enter Sign up Button to go back</p>
        <div className="popupbox">
          <div className="form">
            <h2>Sign in </h2>
            <form action="">
              <div className="inputbox1">
                <input type="text" placeholder="Enter Email or Phone Number" />
                <input type="text" placeholder="Enter Password" />
                <button>Sign In</button>
                <p>Forgot Password?</p>
                <div className="checkboxpera">
                  <input type="checkbox" name="" id="checkbox" />
                  Remember me
                </div>
                <div className="sign-up-pera">
                  <p>
                    New to Netflix? <span>Sign Up Now</span>
                  </p>
                  <p>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. <span className="learn">Learn more.</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPopup;
