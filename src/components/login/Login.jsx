import React from "react";

import loginPanner from "../../images/loginPanner.png";
import loginLogo from "../../images/loginLogo.png";
import { passSvg, emailSvg } from "./loginSvg.js";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextFieldCon, LoginContainer } from "./styles";
import axios from "axios";
import { logOutUser, loginUser } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    isChecked: false,
  });
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password ) {
      return setError("Password and Email is required");
    }
   
    axios
      .post("http://localhost:3001/user/login", loginData)
      .then(function (response) {
        const data = response.data;
        if (data.error) {
          return setError(data.error);
        }
        console.log(data);
        if (typeof data !== String) {
          localStorage.setItem("token", data.userToken);
          localStorage.setItem("reToken", data.refreshToken);
          localStorage.setItem("coonexUId", data.user._id);
          dispatch(loginUser(data.user));

          navigate("/");
        }

        return data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const checkHandler = () => {
    setLoginData({ ...loginData, isChecked: !loginData.isChecked });
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <LoginContainer>
      <div className="fromCon" onClick={() => setError("")}>
        <img src={loginLogo} alt="loginLogo" />
        <p className="formTitle">Login</p>
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "15px",
              padding: "3px 0px",
              width: "max-content",
              textTransform: "capitalize",
              marginTop: "-10px",
            }}
          >
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fieldName="Email"
            type="email"
            logo={emailSvg}
            name="email"
            change={handleChange}
            value={loginData.email}
          />
          <TextField
            fieldName="Password"
            type="password"
            logo={passSvg}
            name="password"
            change={handleChange}
            value={loginData.password}
          />
          <div className="checkbox">
            <div className="first">
              <input
                type="checkbox"
                name="login"
                id="login"
                value={loginData.isChecked}
                onChange={checkHandler}
              />
              <label htmlFor="login">Keep me signed in</label>
            </div>
            <Link to="/forgetPass">Forgot Password?</Link>
          </div>
          <input className="Signup" value="Login" type="submit" />
        </form>
        <div className="orLine">
          <p className="line"></p>
          <p className="text">OR</p>
          <p className="line"></p>
        </div>
        <div className="google">
          <FcGoogle />
        </div>
        <p className="last">
          Don’t have an account ? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <div className="imgCon">
        <img src={loginPanner} alt="" />
        <p>Buy, sell, and invest in real estate with trusted agents</p>
      </div>
    </LoginContainer>
  );
};

export default Login;

const TextField = ({ fieldName, type, logo, name, change, value }) => {
  return (
    <TextFieldCon>
      <label>{fieldName}</label>
      <div>
        <input
          onChange={(e) => change(e)}
          value={value}
          type={type}
          placeholder={fieldName}
          name={name}
        />
        <span className="icon-con">{logo}</span>
      </div>
    </TextFieldCon>
  );
};
