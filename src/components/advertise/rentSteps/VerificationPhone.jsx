import React from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    &::after {
      content: "";
      background-color: black;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.8;
    }
  `;
  const TextFieldCon = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    & p {
      color: #3d3d3d;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-align: left;
    }

    & input {
      width: 100%;
      font-size: 14px;
      border-radius: 5px;
      border: 1px solid #e2e2e2;
      padding: 10px 15px;
      height: 100%;
    }
    & .add4D {
      padding: 0;
      text-align: left;
    }
  `;
  const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 230px;
    border-radius: 10px;
    background: #fff;
    z-index: 3;
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    & .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & p {
        color: #3d3d3d;
        font-size: 18px;
      }
    }
  `;
  const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button {
      display: block;
      border-radius: 8px;
      padding: 6px 20px;
      border: 1px solid #199956;
      background: white;
      transition: all 0.3s;
      min-width: 190px;
      &:hover {
        background: #199956;
        color: white;
      }
    }
  `;

  const FourDigit = styled.div`
    width: 100%;
    & p {
      color: #8898aa;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    & .inputs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & input {
        width: 23%;
        border: 1px solid #3d3d3d;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
      }
    }
  `;

  const Successfully = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 150px;
    border-radius: 10px;
    background: #fff;
    z-index: 3;
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & p {
      color: #3d3d3d;
      font-feature-settings: "clig" off, "liga" off;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: -0.08px;
      font-weight: 600;
    }
    & .icon {
      font-size: 30px;
    }
    & .close {
      font-size: 30px;
      position: absolute;
      top: 10%;
      right: 7%;
    }
  `;
const VerificationPhone = () => {
  
  return (
    <Container>
      {/* <Successfully>
        <BsCheckLg className="icon" />
        <MdOutlineClose className="close" />

        <p>Added Successfully</p>
  </Successfully>*/}

      <Content className="addPhone">
        <div className="title">
          <p>Verification by phone number</p>
          <MdOutlineClose />
        </div>

        <FourDigit>
          <p className="add4D">
            Please enter a 4-digit code sent to 012234567890
          </p>
          <div className="inputs">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </FourDigit>

        {/* <TextFieldCon className="input-con videoCon">
          <p>phone number</p>
          <input type="tel" id="" placeholder="phone number" />
        </TextFieldCon> */}

        <ButtonsContainer>
          <button>Cancel</button>
          <button>Submit</button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default VerificationPhone;
