import React from "react";
import MainContainer from "../../components/main/Container";
import styled from "styled-components";
import vision from "../../images/vision.png";
import mission1 from "../../images/mission1.png";
import mission2 from "../../images/mission2.png";
import CardContainer from "../../components/helper/CardContainer";
import FavCard from "../../components/helper/FavCard";
import AdvBanner from "../../components/advertise/AdvBanner";
import favCard from "../../images/favCard.png";
import favCard2 from "../../images/favCard2.png";
import BasicPagination from "../../components/main/Pagination";
const CardsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 25px;
  `;
  const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
  `;
  const Mission = styled.div``;
const FavoritesPage = () => {
  
  return (
    <>
      <AdvBanner text="Favorites" />
      <MainContainer padding="50px 50px">
        <CardsBox>
          <FavCard img={favCard2} />
          <FavCard img={favCard} />
          <FavCard img={favCard} />
          <FavCard img={favCard2} />
          <FavCard img={favCard} />
          <FavCard img={favCard2} />
          <FavCard img={favCard} />
          <FavCard img={favCard} />
          <FavCard img={favCard2} />
          <FavCard img={favCard} />
          <FavCard img={favCard2} />
          <FavCard img={favCard} />
        </CardsBox>
        <Pagination>
          <BasicPagination />
        </Pagination>
      </MainContainer>
    </>
  );
};

export default FavoritesPage;
