import React from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import "./Swiper.css";

const SwiperContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  & .items-show {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 10px;
    & button {
      padding: 2px 15px;
      font-weight: 400;
      color: #3d3d3d;
      font-weight: 400;
      background: #fff;
      border-radius: 5px;
      border: 1px solid #e2e2e2;
      transition: all 0.5s;
      min-width: 150px;
      &:hover {
        background: #199956;
        color: #fff;
      }
    }
  }
  & .arrow {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0px 2px 15px 0px gray;
    transition: all 0.3s;
  }
  & .arrow:hover {
    box-shadow: 0px 2px 15px 0px #199956;
  }
`;
const Swiper = ({
  array1,
  array2,
  handlePrev,
  handleNext,
  ArrayShow,
  index,
  
}) => {
 
  return (
    <SwiperContainer className="swiper">
      <FiChevronLeft
        className="arrow"
        onClick={() => handlePrev(array1)}
        visibility={index === 0 ? "hidden" : "visible"}
      

      />
      <div className="items-show">
        {ArrayShow!==undefined && ArrayShow.map((button, index) => (
          <button key={index}> {button} </button>
        ))}
        {array2.map((item, index) => item)}
      </div>
      <FiChevronRight
        className="arrow"
        onClick={() => handleNext(array1)}
        visibility={index + 5 === array1.length - 1? "hidden" : "visible"}
        
      />
    </SwiperContainer>
  );
};

export default Swiper;
