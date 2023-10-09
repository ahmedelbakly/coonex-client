import React from "react";
import styled from "styled-components";
import loginPanner from "../../images/loginPanner.png";
import loginLogo from "../../images/loginLogo.png";
const LoginContainer = styled.div`
width: 870px;
height: 450px;
background: white;
display: flex;
border: 2px #199956 solid;

& .fromCon {
  position: relative;
  width: 50%;
  background: white;
  height: 100%;
  padding: 30px 40px;
  & img {
    width: 141px;
    height: 24px;
    margin-bottom: 20px;
  }
  & form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    padding: 0px 40px;
    width: 100%;
    & .title {
      color: #3d3d3d;
      font-size: 16px;
      font-weight: 600;
    }
    & .emailInfo {
      color: #3d3d3d;
      font-size: 10px;
      font-weight: 400;

      & span {
        color: #8898aa;
        font-weight: 700;
      }
    }
    & .inputs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & input {
        width: 70px;
        border: 1px solid #3d3d3d;
        padding: 3px;
        border-radius: 5px;
        text-align: center;
      }
    }

    & .Signup {
      width: 100%;
      background: #199956;
      border-radius: 7px;
      border: none;
      color: white;
      padding: 3px 0px;
      cursor: pointer;
    }
    & .time {
      width: 100%;
      color: #8898aa;
      text-align: center;
      font-weight: 400;
      text-transform: capitalize;
      font-size: 14px;

      & p {
        color: var(--gray, #8898aa);
        text-align: center;
        font-weight: 500;
      }
    }
  }
  & .last {
    color: #3d3d3d;
    font-weight: 400;
    position:absolute;
    bottom:30px;
    left:0px;
    width: 100%;
    text-align: center;
    font-size: 14px;

    & button {
      color: #199956;
      font-weight: 700;
      text-decoration-line: underline;
      border:none;
      background-color: transparent;


    }
  }
}

& .imgCon {
  width: 50%;
  background: black;
  height: 100%;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #121212;
    opacity: 0.5;
  }

  & img {
    width: 100%;
    height: 100%;
  }
  & p {
    width: 100%;
    padding: 0px 20px;
    color: white;
    z-index: 2;
    top: 85%;
    left: 0;
    position: absolute;
    text-align: center;
  }
}
`;
const ConfirmLoginOne = () => {
 
  return (
    <LoginContainer>
      <div className="fromCon">
        <img src={loginLogo} alt="loginLogo" />

        <form>
          <p className="title">Verification code</p>
          <p className="emailInfo">
            Please enter a 4-digit code sent to{" "}
            <span>Sara************@gmail.com</span>
          </p>
          <div className="inputs">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <input className="Signup" value="submit" type="submit" />
          <p className="time">
            sending within <span>00:15</span>
          </p>
        </form>
        <p className="last">
        Didn't you get the code? <button>Resend the code</button>
      </p>
      </div>
      <div className="imgCon">
        <img src={loginPanner} alt="" />
        <p>Buy, sell, and invest in real estate with trusted agents</p>
      </div>
    </LoginContainer>
  );
};

export default ConfirmLoginOne;
