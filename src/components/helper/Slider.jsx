import React from "react";
import styled from "styled-components"
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import product from "../../images/product.png";
const SliderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #020202;
    
      top: 0;
      left: 0;
    }
  `;
  const SlideSubCon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #212121;
    z-index: 1;
    width: 1000px;
    height: 600px;

    & .arrowLeft {
      position: absolute;
      top: 49%;
      left: 4%;
      color: #fbf9f9;
      font-size: 30px;
      cursor: pointer;
    }
    & .arrowRight {
      position: absolute;
      top: 49%;
      right: 4%;
      color: #fdfbfb;
      font-size: 30px;
      cursor: pointer;
    }
    & .imgCon {
      width: 80%;
      height: 70%;
      background: #f8f6f6;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      z-index: 8;
      & img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  `;
const Slider = () => {
  
  return (
    <SliderContainer>
      <SlideSubCon>
        <BsChevronDoubleLeft className="arrowLeft" />
        <div className="imgCon">
            <img src={product} alt="" />
        </div>
        <BsChevronDoubleRight className="arrowRight" />
      </SlideSubCon>
    </SliderContainer>
  );
};

export default Slider;
