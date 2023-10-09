import React from "react";
import styled from "styled-components"
import CardTwo from "./CardTwo";
const CardsBox = styled.div`
width: 100%;
display: flex;

align-items: center;
flex-wrap: wrap;
gap: 20px;
`;
const CardContainerTwo= ({justify}) => {
 
  return <CardsBox style={{justifyContent:justify}}>
  
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  </CardsBox>;
};

export default CardContainerTwo;
