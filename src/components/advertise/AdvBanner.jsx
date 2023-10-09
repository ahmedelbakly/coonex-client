import React from "react";
import styled from "styled-components"
import bannerRight from "../../images/bannerRight.png";
import bannerLeft from "../../images/bannerLeft.png";
import Advertise from "../../images/Advertise.png";
const AdvBanner = ({ text }) => {
  const BannerContainer = styled.div`
    height: 292px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
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
    top: 13%;
    z-index: 3;
  `;
  const BannerRight = styled.img`
    position: absolute;
    right: 0;
    top: 13%;
    z-index: 3;
  `;
  const Text = styled.p`
    width: max-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    color: white;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 5px;
  `;

  return (
    <BannerContainer>
      <Image src={Advertise} alt="banner" />
      <Overlay></Overlay>
      <BannerLeft src={bannerLeft} alt="left" />
      <BannerRight src={bannerRight} alt="right" />
      <Text>{text}</Text>
    </BannerContainer>
  );
};

export default AdvBanner;
