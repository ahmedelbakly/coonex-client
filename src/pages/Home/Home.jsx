import React from "react";
import "./home.css";
import MainContainer from "../../components/main/Container";
import Banner from "../../components/home/Banner";
import homesalepaner from "../../images/homesalepaner.png";
import bannerLeft from "../../images/bannerLeft.png";
import SearchBar, {
  SearchBarRes,
} from "../../components/main/searchBar/SearchBar";
import ItemsContainer from "../../components/helper/itemsContainer/ItemsContainer";
import SubBanner from "../../components/home/SubBanner";
import homeSubBanner from "../../images/homeSubBanner.png";
import homeSubBanner2 from "../../images/homeSubBanner2.png";
import HomeBanner4 from "../../components/home/HomeBanner4";
import HomeBanner3 from "../../components/home/HomeBanne3";
import { buttonsArray, buttonsArrayResRent } from "./data";
import { useState } from "react";
import { useSelector } from "react-redux";


export const Home = ({setRoute,route}) => {
  const proSaleRes = useSelector((state) => state.product.saleProRes);
  const proRentRes = useSelector((state) => state.product.rentProRes);
  const proSaleCom = useSelector((state) => state.product.saleProCom);
  const proRentCom = useSelector((state) => state.product.rentProCom);
  console.log('====================================');
  console.log(proSaleRes, proRentRes, proSaleCom, proRentCom);
  console.log('====================================');
  return (
    <MainContainer customClass="home-page">
      <Banner
        img={homesalepaner}
        height="601px"
        imgRight={""}
        imgLeft={bannerLeft}
        text1=""
        text2=""
        overlay={true}
        topButton="70%"
        setRoute={setRoute}
      >
        <div className="banner-text">
          <h2>The best way to find your happy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            mod tempor incididunt ut labore et dolore{" "}
          </p>
        </div>
        <SearchBar top="85%" route={route}/>
        <SearchBarRes top="85%" />
      </Banner>
      <ItemsContainer
        text="Residential for rent"
        buttonsArray={buttonsArrayResRent}
        cardWidth="32.5%"
        customId="resRent"
        data={proRentRes} 
      />
      <ItemsContainer
        text="Residential for sale"
        buttonsArray={buttonsArray}
        cardWidth="32.5%"
        customId="resSale"
        data={proSaleRes} 
      />
      <SubBanner img={homeSubBanner} />
      <ItemsContainer
        text="Commercial for rent"
        buttonsArray={buttonsArray}
        cardWidth="32.5%"
        customId="comRent"
        data={proRentCom} 
      />
      <ItemsContainer
        text="Commercial for sale"
        buttonsArray={buttonsArray}
        cardWidth="32.5%"
        customId="comSale"
        data={proSaleCom}
      />
      <SubBanner img={homeSubBanner2} />
      <HomeBanner3 />
      <HomeBanner4 />
    </MainContainer>
  );
};
