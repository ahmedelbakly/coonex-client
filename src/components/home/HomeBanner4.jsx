import React from "react";
import styled from "styled-components";
import homeBanner4 from "../../images/homeBanner4.png";
import MainContainer from "../main/Container";
import MainButton from "../helper/MainButton";
import { useNavigate } from "react-router-dom";
const Banner4 = styled.div`
  height: 233px;
  width: 100%;
  position: relative;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
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
    opacity: 0.7;
    border-radius: 10px;
  }
`;
const BannerText = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  gap: 5px;
  text-align: center;
  & h2 {
    font-weight: 700;
    font-size: 32px;
    height: max-content;
  }
  & p {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
const HomeBanner4 = () => {
  const navigate = useNavigate();
  return (
    <MainContainer customClass="Banner4-container" padding="32px 50px">
      <Banner4 style={{ backgroundImage: `url(${homeBanner4})` }}>
        <BannerText>
          <h2>Interested in selling your home?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim{" "}
          </p>
          <MainButton
            text={"Place Your Ad"}
            padding="5px 20px"
            size="20px"
            click={() => navigate("/advertisement")}
          />
        </BannerText>
      </Banner4>
    </MainContainer>
  );
};

export default HomeBanner4;
