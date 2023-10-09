import React from "react";
import styled from "styled-components";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const BannerContainer = styled.div`
  height: ${""};
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 180px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #121212;
  opacity: 0.7;
`;

const BannerLeft = styled.img`
  position: absolute;
  left: 0;
  top: 25%;
  z-index: 3;
`;
const BannerRight = styled.img`
  position: absolute;
  right: 0;
  top: 25%;
  z-index: 3;
`;
const TwoButton = styled.div`
  height: 200px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  margin: auto;
  z-index: 11;
`;
const Button = styled.button`
  padding: 4px 15px;
  background: white;
  font-size: 16px;
  margin: 20px;
  position: relative;
  border: none;
  border-radius: 10px;
  &:hover {
    background: #199956;
    color: white;
  }
  &:hover::after {
    content: "";
    border-top: 20px solid #199956;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    top: 99%;
    left: 35%;

    position: absolute;
  }
`;
const Banner = ({
  img,
  imgLeft,
  imgRight,
  children,
  overlay,
  topButton,
  height,
  route,
  setRoute,
}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("sale");

  return (
    <BannerContainer className="banner-home" style={{ height: height }}>
      {img && <Image src={img} alt="banner" />}
      {overlay && <Overlay></Overlay>}
      {imgRight && <BannerRight src={imgRight} alt="right" />}
      {imgLeft && <BannerLeft src={imgLeft} alt="left" />}
      {children}
      <TwoButton style={{ top: topButton }} className="tow-button">
        <Button
          className={active === "sale" ? "active" : ""}
          onClick={() => {
            setActive("sale");
            setRoute("searchSale");
          }}
        >
          {" "}
          for sale
        </Button>
        <Button
          className={active === "rent" ? "active" : ""}
          onClick={() => {
            setActive("rent");
            setRoute("searchRent");
          }}
        >
          {" "}
          for Rent{" "}
        </Button>
      </TwoButton>
    </BannerContainer>
  );
};

export default Banner;
