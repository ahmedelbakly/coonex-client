import React, { useState } from "react";
import SearchContainer from "../../components/searchContainer/SearchItemCon";
import SearchContainerTwo from "../../components/searchContainer/SearchContainerTwo";

import styled from "styled-components"
import MapGoogle from "../../components/googleMap/Map";
import Banner from "../../components/home/Banner";
import SearchBar from "../../components/main/searchBar/SearchBar";
import adver from "../../images/adver.png";
const Links = styled.div`
    width: 100%;
    padding: 0px 50px;
    background: #f7f7f7;
    & a {
      border: none;
      background: white;
      color: #199956;
      font-size: 16px;
    }
  `;

  const Adver = styled.div`
    width: 844px;
    height: 189px;
    position: absolute;
    top: 10%;
   
    background-size: cover;
  `;
  const SearchContainerMap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 32px 50px;
    gap: 10px;

    & .cards {
      width: calc((100% / 3) * 2 + 50px);
      /* background:green; */
    }
    & .map {
      width: calc((100% / 3) * 1);
      /* background: orange; */
      height: 100vh;
      border: 3px solid black;
    }
  `;
const MapSearchPage = ({route,setRoute}) => {
  
  const [itemShow, setItemShow] = useState("withMap");

  const handleItemShow = (value) => setItemShow(value);

  return (
    <>
      <Links className="link">
        <a  href ="/"> home{`>>`} </a>
        <a  href="/">searchResult </a>
      </Links>
      <Banner height="400px" overlay={false} topButton="60%"  route={route} setRoute={setRoute}>
        <Adver style={{ backgroundImage: `url(${adver})`}}></Adver>
        <SearchBar top="80%"  route={route}/>
      </Banner>
      {itemShow === "twoSlide" && (
        <SearchContainerTwo
          justify="space-between"
          handleItemShow={handleItemShow}
          padding="32px 50px"
          itemShow={itemShow}
          
        />
      )}
      {itemShow === "withMap" && (
        <SearchContainerMap>
          <div className="map">
            <MapGoogle />
          </div>
          <div className="cards">
            <SearchContainer
              text="Residential for rent •49829 results"
              handleItemShow={handleItemShow}
              padding="5px"
              justify="space-between"
              cardWidth="49%"
              itemShow={itemShow}
              route={route}
            />
          </div>
        </SearchContainerMap>
      )}

      {itemShow === "withoutMap" && (
        <SearchContainer
          text="Residential for rent •49829 results"
          handleItemShow={handleItemShow}
          padding="32px 50px"
          justify="space-between"
          cardWidth="32.5%"
          itemShow={itemShow}
          route={route}
        />
      )}
    </>
  );
};

export default MapSearchPage;
