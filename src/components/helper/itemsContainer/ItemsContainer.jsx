import React from "react";
import styled from "styled-components";
import MainContainer from "../../main/Container";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import Swiper from "../swiper/Swiper";
import "./itemsContainer.css";
import CardContainer from "../CardContainer";
import { useState } from "react";
import { buttonsArrayResRent } from "../../../pages/Home/data";
const TextAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: max-content;
  margin-bottom: 20px;
  & .title {
    width: max-content;
    font-weight: 600;
    font-size: 20px;
    color: #3d3d3d;
    padding-left: 20px;
  }
  & button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    gap: 3px;
    text-transform: capitalize;
    font-weight: 600;
    color: #199956;
    background: #fff;
    border: none;
  }
`;
const ItemsContainer = ({ arrayItem, buttonsArray, text, cardWidth,customId,data}) => {
  const [rightBlock, setRightBlock] = useState(true);
  const [leftBlock, setLeftBlock] = useState(true);

  const [index, setIndex] = useState(0);

console.log(data);
  const handleNext = (array) => {
    if (index + 5  === array.length - 1) {
 
      
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrev = (array) => {
    if (index === 0) {
      
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div id={customId}>
    <MainContainer customClass="item-container" padding="32px 50px" >
      <TextAndButton>
        <p className="title">{text}</p>
        <button>
          <p>View All</p> <FiChevronRight />
        </button>
      </TextAndButton>
      <Swiper
        array1={buttonsArray}
        array2={[]}
        state={index}
        setState={setIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        ArrayShow={ buttonsArray.length>0 ? buttonsArray.slice(index,index + 5): []}
        index={index}
        
      />
      <CardContainer justify="space-between" cardWidth={cardWidth}  data={data}/>
    </MainContainer>
    </div>
  );
};

export default ItemsContainer;
