  import { useState } from "react";
  import "./SignupPopup.css";

  const SignupPopup = () => {
    const [isvisablesignup, setnotvisiblesignup] = useState(true);

    // sign up form settings
    const [inputdata, setinputdata] = useState({
      username: "",
      useremail: "",
      usermobile: "",
      userpassword: "",
    });

    const changehandler = (e) => {
      setinputdata({ ...inputdata, [e.target.name]: e.target.value });
    };

    const Signuupafter = () => {
      setnotvisiblesignup(!isvisablesignup);
    };

    const submitformlogin = (e) => {
      e.preventDefault();
      console.log(inputdata);
      localStorage.setItem("user", JSON.stringify(inputdata));
      setnotvisiblesignup(true);
    };

    // login form settings-----------------------------------------------------------
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const [inputdatalogin, setloginformdata] = useState({
      email: "",
      password: "",
      rememberMe: false,
    });

    const { email, password, rememberMe } = inputdatalogin;

    const handleChange = (e) => {
      if (e.target.name === "rememberMe") {
        setloginformdata({
          ...inputdatalogin,
          [e.target.name]: e.target.checked,
        });
      } else {
        setloginformdata({ ...inputdatalogin, [e.target.name]: e.target.value });
      }
    };

    const handleLoginformsubmit = (e) => {
      e.preventDefault();

      const userData = JSON.parse(localStorage.getItem("user"));

      if (!rememberMe) {
        alert("Please check the Remember me checkbox");
        return; // Exit early if checkbox is not checked
      }

      if (
        userData &&
        userData.useremail === email &&
        userData.userpassword === password
      ) {
        alert("Login successful!");

        setIsLoggedIn(false);
      } else {
        alert("Invalid email or password");
      }
      setloginformdata({
        email: "",
        password: "",
        rememberMe: false,
      });
    };

    return (
      <>
        <div
          className="signuppopupbox "
          id="signup"
          style={{ display: isLoggedIn ? "block" : "none" }}
        >
          <p style={{ textAlign: "center" }}>
            Re Enter Sign up Button to go back
          </p>
          <div className="popupbox" id="signupp">
            {isvisablesignup ? (
              <div className="form">
                <h2>Sign in </h2>
                <form action=" " onSubmit={handleLoginformsubmit}>
                  <div className="inputbox1">
                    <input
                      type="email"
                      placeholder="Enter Email or Phone Number"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    <p style={{ color: "blue", cursor: "pointer" }}>
                      Forgot Password?
                    </p>
                    <div className="checkboxpera">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        style={{ cursor: "pointer" }}
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={handleChange}
                      />
                      <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button className="btnover" >Sign In</button>

                    <div className="sign-up-pera">
                      <p>
                        New to Netflix?{" "}
                        <span onClick={Signuupafter} className="signupafterbtn">
                          Sign Up Now
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="form">
                <h2>Sign up </h2>
                {/* sign upform */}
                <form action="" onSubmit={submitformlogin}>
                  <div className="inputbox1">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      name="username"
                      value={inputdata.username}
                      onChange={changehandler}
                    />
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="useremail"
                      value={inputdata.useremail}
                      onChange={changehandler}
                    />
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      name="usermobile"
                      value={inputdata.usermobile}
                      onChange={changehandler}
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="userpassword"
                      value={inputdata.userpassword}
                      onChange={changehandler}
                    />

                    <button> Sign up</button>

                    <div className="sign-up-pera">
                      <p>
                        Already have an Account?
                        <span onClick={Signuupafter} className="signupafterbtn">
                          &nbsp;Sign In
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  export default SignupPopup;
