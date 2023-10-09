import React, { useState } from "react";
import loginPanner from "../../images/loginPanner.png";
import loginLogo from "../../images/loginLogo.png";
import { passSvg, emailSvg, userSvg } from "./loginSvg.js";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { SignContainer, TextFieldConUp } from "./styles";
import axios from "axios";
import { loginUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signData, setSignData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
    confirmPassword: "",
  });
  const [error, setError] = useState();

  console.log(signData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signData.email || !signData.password || !signData.confirmPassword || !signData.username) {
      return setError("Please fill all the fields");
    }
    if (signData.password !== signData.confirmPassword) {
      return setError("Passwords do not match");
      
    }
    console.log(signData);
    axios
      .post("http://localhost:3001/user", signData)
      .then(function (response) {
        const data = response.data;
        if (data.error) {
          return setError(data.error);
        }
        console.log(data);
        // localStorage.setItem("token", data.userToken);
        // localStorage.setItem("reToken", data.refreshToken);
        // dispatch(loginUser(data.user));
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const checkHandler = () => {
    setSignData({ ...signData, agree: !signData.agree });
  };

  const handleChange = (e) => {
    setSignData({ ...signData, [e.target.name]: e.target.value });
  };

  return (
    <SignContainer onClick={() => setError("")}>
      <div className="fromCon">
        <img src={loginLogo} alt="loginLogo" />
        <p className="formTitle">Sign up</p>
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
            fieldName="username"
            type="text"
            logo={userSvg}
            name="username"
            change={handleChange}
            value={signData.username}
          />
          <TextField
            fieldName="Email"
            type="email"
            logo={emailSvg}
            name="email"
            change={handleChange}
            value={signData.email}
          />
          <TextField
            fieldName="Password"
            type="password"
            logo={passSvg}
            name="password"
            change={handleChange}
            value={signData.password}
          />
          <TextField
            fieldName="Password Confirmation"
            type="password"
            logo={passSvg}
            name="confirmPassword"
            change={handleChange}
            value={signData.confirmPassword}
          />
          <div className="checkbox">
            <input type="checkbox" name="agree" id="agree"
              value={signData.agree}
              onChange={checkHandler}
            />
            <label htmlFor="agree">
              I agree with <Link to="/terms">Terms & Conditions</Link>
            </label>
          </div>
          <input className="Signup" value="Sign up" type="submit" />
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
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <div className="imgCon">
        <img src={loginPanner} alt="" />
        <p>Buy, sell, and invest in real estate with trusted agents</p>
      </div>
    </SignContainer>
  );
};

export default SignUp;

const TextField = ({ fieldName, type, logo, name, change, value }) => {
  return (
    <TextFieldConUp>
      <p>{fieldName}</p>
      <div>
        {" "}
        <input
          onChange={(e) => change(e)}
          value={value}
          type={type}
          placeholder={fieldName}
          name={name}
        />
        <span className="icon-con">{logo}</span>
      </div>
    </TextFieldConUp>
  );
};
