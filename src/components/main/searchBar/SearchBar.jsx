import React from "react";
import "./searchBar.css";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiMap } from "react-icons/bi";
// import { Typography } from '@mui/material';
import "./searchBar.css";
import MainButton from "../../helper/MainButton";
import SelectLabels from "../select";

import { useSelector, useDispatch } from "react-redux";
import {
  BedsAndBaths,
  Category,
  area,
  countries,
  paymentAndMethod,
  price,
  propertyType,
} from "./searchData";
import { useState } from "react";
import { axiosExpire } from "../../../axiosExpire";
import { useNavigate } from "react-router-dom";
import { addProduct, setProductSearch } from "../../../redux/productSlice";
import axios from "axios";
const SearchCon = styled.form`
  border-radius: 10px;
  box-shadow: 0px 2px 15px 0px gray;
  width: 93.5%;
  height: 170px;
  background-color: #fff;
  position: absolute;
  margin: auto 50px;

  z-index: 10;
  padding: 10px 30px;
  display: flex;
  justify-content: space-evenly;

  flex-direction: column;
`;
const SearchBar = ({ top,route }) => {
  console.log(route);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [searchData, setSearchData] = useState({
    country: "",
    category: "",
    rooms: "",
    paymentMethod: "",
    price: "",
    surfaceArea: "",
    more: "",
    propertyType: "",
    period: "",
  });

  console.log(searchData);

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(searchData).forEach((key) => {
      if (searchData[key] === "") {
        delete searchData[key];
      }
    });
    axios
      .post(`http://localhost:3001/${route}`, searchData)
      .then(function (response) {
        const data = response.data;
        if (data.error) {
          return setError(data.error);
        }

        console.log("###########", data);
        dispatch(setProductSearch(data));
        navigate("/search");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearchData({
      country: "",
      category: "",
      rooms: "",
      paymentMethod: "",
      price: "",
      surfaceArea: "",
      more: "",
      propertyType: "",
    });
  };

  return (
    <>
      <SearchCon className="searchCon" style={{ top: top }}>
        <div className="up">
          <form>
            <div className="inputCon">
              <input type="text" placeholder="Search by country and cities" />
              <BiMap className="icon-map" />
            </div>
            <SelectLabels
              label="Property & type"
              options={propertyType}
              name="propertyType"
              setSearchData={setSearchData}
              searchData={searchData}
              value={searchData.propertyType}
            />
            <MainButton
              text="Clear"
              padding="5px 20px"
              size="14px"
              click={handleClear}
            />
            <MainButton text="Search by AI" padding="5px 20px" size="14px" />
            <MainButton
              text="Search"
              padding="5px 20px"
              size="14px"
              click={handleSubmit}
            />
          </form>
        </div>
        <div className="down">
          <SelectLabels
            label={"countries"}
            options={countries}
            name="country"
            setSearchData={setSearchData}
            searchData={searchData}
            value={searchData.country}
          />
          <SelectLabels
            label="Category"
            options={Category}
            name="category"
            setSearchData={setSearchData}
            searchData={searchData}
            value={searchData.category}
          />
          <SelectLabels
            label="rooms"
            options={BedsAndBaths}
            name="rooms"
            setSearchData={setSearchData}
            searchData={searchData}
            value={searchData.rooms}
          />
          <SelectLabels
            label="Period"
            options={[]}
            name="period"
            setSearchData={setSearchData}
            searchData={searchData}
            value={searchData.period}
          />
          <SelectLabels
            label="Payment & Method"
            options={paymentAndMethod}
            name="paymentMethod"
            setSearchData={setSearchData}
            searchData={searchData}
            value={searchData.paymentMethod}
          />
          <SelectLabels
            label="Price"
            options={price}
            name="price"
            setSearchData={setSearchData}
            searchData={searchData}
            value={searchData.price}
          />
          <SelectLabels
            label="Area"
            options={area}
            name="surfaceArea"
            setSearchData={setSearchData}
            searchData={searchData}
            value={searchData.surfaceArea}
          />
          <SelectLabels
            label="more"
            options={[]}
            name="more"
            setSearchData={setSearchData}
            searchData={searchData}
            value={searchData.more}
            F
          />
        </div>
      </SearchCon>
    </>
  );
};

export default SearchBar;

const SearchItem = ({ text }) => {
  const SearchButton = styled.div`
    width: max-content;
    padding: 1px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #e2e2e2;
    & p {
      font-size: 14px;
      font-weight: 400;
    }
    /* &:hover {
      background: #199956;
      color: #fff;
    } */
  `;

  return (
    <SearchButton className="searchItem">
      <p>{text}</p>
      <>
        <RiArrowDropDownLine
          color="#3D3D3D"
          fontSize="30px"
          onClick={() => console.log("hadeer zabola")}
        />
      </>
    </SearchButton>
  );
};

export const SearchBarRes = () => {
  return (
    <form className="searchConRes">
      <div className="title">
        <p>search by AI</p>
        <MainButton text="Clear" padding="5px 20px" size="14px" />
      </div>
      <div className="content">
        <input
          type="text"
          placeholder="ex-city, category, price, property type"
        />
        <MainButton text="Normal Search" padding="5px 20px" size="14px" />
        <MainButton text="Search" padding="5px 20px" size="14px" />
      </div>
    </form>
  );
};
