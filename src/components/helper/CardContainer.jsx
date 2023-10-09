import React from "react";
import styled from "styled-components"
import Card from "./Card";
const CardsBox = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
row-gap: 25px;

`;
const CardContainer = ({justify,cardWidth, data}) => {
 console.log(data);
  return <CardsBox>
 {data.map((product)=> {
   return <Card width={cardWidth} product={product} key={product._id} title={product.title} cardId={product._id}/>
 })} 
 
  </CardsBox>;
};

export default CardContainer;
