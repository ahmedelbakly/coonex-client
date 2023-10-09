import React from "react";
import styled from "styled-components"
import MainContainer from "../main/Container";
import MainButton from '../helper/MainButton'
const Banner = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 238px;
border-radius: 10px;
padding-left: 30px;

background-image: 
background-repeat: no-repeat;
background-position: right;

margin: 30px 0px;
& .text {
  width: 42%;
  & h4 {
    font-size: 18px;
    font-weight: 600;
    color:#fff;
    text-transform: capitalize;
    margin-bottom:10px;
  }
  & p {
  
    font-weight: 400;
    color:#fff;
    margin-bottom:10px;
  }
  & button {
  
    font-weight: 400;
    color:#199956;
    font-weight: 500;
  }
  & button:hover {
  
    font-weight: 400;
    color:white;
  }
}
`;
const SubBanner = ({img}) => {
 
  return (
    <MainContainer customClass="subBanner-container" padding="32px 50px">
      <Banner style={{backgroundImage:`linear-gradient(
        90deg,
        #b49668 47%,
        rgba(180, 150, 104, 0) 57%
      ),
      url(${img})`}}>
        <div className="text">
          <h4>Explore your future properties with detailed images</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            mod tempor incididunt.
          </p>
          <MainButton text="View Now" padding="5px 20px" size="16px" />
        </div>
      </Banner>
    </MainContainer>
  );
};

export default SubBanner;
