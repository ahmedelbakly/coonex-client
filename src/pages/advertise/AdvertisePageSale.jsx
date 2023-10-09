import React, { useState } from "react";

import MainContainer from "../../components/main/Container";

import AdvBanner from "../../components/advertise/AdvBanner";
import CreateAddOne from "../../components/advertise/saleSteps/CreateAddOne";
import CreateAddTwo from "../../components/advertise/saleSteps/CreateAddTwo";
import CreateAddThree from "../../components/advertise/saleSteps/CreateAddThree";
import VerificationPhone from "../../components/advertise/saleSteps/VerificationPhone";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { axiosExpire } from "../../axiosExpire";
import { Slides, Title, titles } from "./saleStyled";
import {setSaleProCom,setSaleProRes,setAllProducts} from "../../redux/productSlice";

const AdvertisePageSale = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ///////////////////////////////////////////////
  const [index, setIndex] = useState(1);
  const [error, setError] = useState("");
  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };
  const handleBack = () => {
    setIndex((prev) => prev - 1);
    setError("");
  };
  ///////////////////////////////////////////////////////////////////////////////////
  const [file, setFile] = useState("");
  const [files, setFiles] = useState([]);
  /////////////////////////////////////////////////////////////////////////////////////////////
  const [productSaleData, setProductSaleData] = useState({
    title: "",
    userId: localStorage.getItem("coonexUId"),
    videoLink: "",
    propertyType: "",
    category: "",
    description: "",
    city: "",
    price: 0,
    rooms: 0,
    surfaceArea: "",
    paths: 0,
    floor: 0,
    buildingAge: 0,
    listerType: "",
    paymentMethod: "",
    furnished: "",
    mortgaged: "",
  });
  //////////////////////////////////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    setProductSaleData({ ...productSaleData, [e.target.name]: e.target.value });
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChangeFiles = (e) => {
    setFiles(e.target.files);
  };
  //////////////////////////////////////////////////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ads", JSON.stringify(productSaleData));
    formData.append("logo", file);
    files &&
      Object.values(files).map((file, index) =>
        formData.append("proImg", file)
      );
    axiosExpire
      .post("http://localhost:3001/adSale", formData)
      .then(function (response) {
        const data = response.data;
        console.log("111111111111111111111111111",data);
        if (data.error) {
          setIndex((prev) => prev - 1);
          setFiles(null);
          setFile(null);
          return setError(data.error);
        }
      
       
        dispatch(setSaleProRes(data.saleProRes));
        dispatch(setSaleProCom(data.saleProCom));
        dispatch(setAllProducts(data.allProducts));
        setFiles(null);
        setFile(null);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <MainContainer>
      <AdvBanner text="Properties for rent ads" />
      <MainContainer padding="50px 10%">
        <Title>
          <h3>{titles[0]}</h3>
          {index < 4 && <p>{index < 4 && index}/3</p>}
        </Title>
        <Slides className="slides">
          <div className={`slide ${index >= 1 ? "active" : ""}`}></div>
          <div className={`slide ${index >= 2 ? "active" : ""}`}></div>
          <div className={`slide ${index >= 3 ? "active" : ""}`}></div>
        </Slides>
        {error && (
          <p
          style={{
            color: "white",
            fontSize: "16px",
            padding: "5px 15px",
            background: "#199956",
            width: "max-content",
            marginTop: "10px",
            borderRadius:`10px`
          }}
          >
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          {index === 1 && (
            <CreateAddOne
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange}
              productSaleData={productSaleData}
              setProductSaleData={setProductSaleData}
              handleChangeFiles={handleChangeFiles}
            />
          )}
          {index === 2 && (
            <CreateAddTwo
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange}
              productSaleData={productSaleData}
              setProductSaleData={setProductSaleData}
            />
          )}
          {index === 3 && (
            <CreateAddThree
              handleNext={handleNext}
              handleBack={handleBack}
              productSaleData={productSaleData}
              setProductSaleData={setProductSaleData}
              handleSubmit={handleSubmit}
              handleChangeFile={handleChangeFile}
              file={file}
            />
          )}
        </form>
        {/*index === 4 && <VerificationPhone />*/}

        {/*<VerificationPhone/>*/}
      </MainContainer>
    </MainContainer>
  );
};

export default AdvertisePageSale;

///////////////////////////////////////////////////////
/*  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file);

    axiosExpire
      .post("http://localhost:3001/user/avatar", formData)
      .then((res) => {
        const data = res.data;
        dispatch(loginUser(data));
        navigate("/profile");
      })
      .catch((err) => console.error(err));
    setFile("");
  };
   */

/////////////////////////////////////////////////////
