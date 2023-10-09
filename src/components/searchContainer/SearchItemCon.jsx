import React from "react";
import styled from "styled-components"
import { BsListUl } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import MainContainer from "../main/Container";
import CardContainer from "../helper/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import CardContainer3 from "../helper/cardcon3";
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
    & .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: max-content;
      gap: 15px;
      text-transform: capitalize;
      font-weight: 600;
      border: none;
      & .active {
          background: #199956;
          color: white;
        }

      & .icon {
        width: 48px;
        height: 44px;
        padding: 10px;
        border-radius: 7px;
        &:hover {
          color: white;
          background: #199956;
        }
        
      }
    }
  `;
  const SeeMore = styled.div`
    width: 100%;
    margin-top: 30px;
    & button {
      background: #199956;
      margin: auto;
      display: block;
      padding: 8px 22px;
      border-radius: 10px;
      color: white;
      font-weight: 500;
    }
  `;

const SearchContainer = ({
  text,
  handleItemShow,
  cardWidth,
  padding,
  justify,
  itemShow
}) => {

  const products = useSelector((state) => state.product.searchProducts);
 
  
  return (
    <MainContainer customClass="" padding={padding}>
      <TextAndButton>
        <p className="title">{`Residential for rent ${products.length}  results`}</p>
        <div className="icons">
          <FaMapMarkedAlt
            className={`icon ${itemShow === "withMap" ? "active" : ""}` }
            onClick={() => handleItemShow("withMap")}
          />
          <BsListUl
          className={`icon ${itemShow === "withoutMap" ? "active" : ""}` }
            onClick={() => handleItemShow("withoutMap")}
          />
          <BsListUl
          className={`icon ${itemShow === "twoSlide" ? "active" : ""}` }
            onClick={() => handleItemShow("twoSlide")}
          />
        </div>
      </TextAndButton>

      <CardContainer3 justify={justify} cardWidth={cardWidth} products={products} />
      <SeeMore>
        <button>Load More</button>
      </SeeMore>
    </MainContainer>
  );
};

export default SearchContainer;
