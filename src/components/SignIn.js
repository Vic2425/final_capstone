import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";
import axios from "axios";
import "../SignIn.css";
import "../preload.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   // Replace this with your own logic to check username and password
  //   const validUsername = "Jay_ch";
  //   const validPassword = "test123";

  //   if (state.username === validUsername && state.password === validPassword) {
  //     document.cookie = cookie.serialize("loggedIn", "true", {
  //       maxAge: 60,
  //     });
  //     navigate("/dashboard");
  //   } else {
  //     alert("Invalid username or password");
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    document.cookie = cookie.serialize("loggedIn", "true", {
      maxAge: 60,
    });
    navigate("/dashboard");
  };

  //preLoad
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="box">
          <img
            className="bell"
            src={process.env.PUBLIC_URL + "/Bell.png"}
            alt="remider bell"
          />
          <img
            className="R"
            src={process.env.PUBLIC_URL + "/R_logo_color.png"}
            alt="Rlogo"
          />
          <div className="txt1">
            <h3> Reminder</h3>
          </div>
          <div className="txt2">
            <h4> Make life easier!</h4>
          </div>
        </div>
      ) : (
        <div className="bkg">
          <div className="login-wrap">
            <div className="login-html">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                defaultChecked
              />
              <label htmlFor="tab-1" className="tab">
                Sign In
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab">
                Sign Up
              </label>
              <form className="login-form" onSubmit={handleLogin}>
                <div className="sign-in-htm">
                  <div className="group">
                    {/* <label htmlFor="user" className="label">
                    Username
                  </label> */}
                    <input
                      id="user"
                      onChange={handleTextChange}
                      value={state.username}
                      name="username"
                      label="Username"
                      type="text"
                      className="input"
                      placeholder="Username"
                    />
                  </div>
                  <div className="group">
                    <input
                      id="pass"
                      onChange={handleTextChange}
                      value={state.password}
                      name="password"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="group">
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      defaultChecked
                    />
                    <label htmlFor="check">
                      <div className="hr"></div>
                    </label>
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-htm">
                  <div className="group">
                    <input
                      id="user2"
                      type="text"
                      className="input"
                      placeholder="Username"
                    />
                  </div>
                  <div className="group">
                    <input
                      id="pass2"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="group">
                    <input
                      id="repeatpass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Repeat Password"
                    />
                  </div>
                  <div className="group">
                    <input
                      id="email"
                      type="text"
                      className="input"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="hr"></div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
