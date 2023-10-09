import React from "react";
import styled from "styled-components";
import { GrUpload } from "react-icons/gr";
import {
  ButtonsContainer,
  Container,
  InputsContainer,
  TextFieldCon,
  TextFieldCon2,
} from "./one";

const CreateAddOne = ({
  handleNext,
  handleChange,
  productSaleData,
  setProductSaleData,
  handleChangeFiles
}) => {
  const handleSelect = (e, name) => {
    setProductSaleData({ ...productSaleData, [name]: e.target.value });
  };

  

  return (
    <Container>
      <InputsContainer>
        <TextFieldCon className="input-con">
          <p>Ad Title *</p>

          <input
            type="text"
            placeholder="title"
            name="title"
            value={productSaleData.title}
            onChange={(e) => handleChange(e)}
          />
        </TextFieldCon>
        <TextField
          fieldName="Property Type *"
          options={["","villa","house","apartment","roof"]}
          change={handleSelect}
          name="propertyType"
        />
        <TextField
          fieldName="Category *"
          options={["","commercial","residential"]}
          change={handleSelect}
          name="category"
        />
      </InputsContainer>
      <TextFieldCon className="input-con videoCon">
        <p>Detailed Video Link *</p>
        <input
          type="url"
          id=""
          placeholder="https:/www.Haraj X.com"
          name="videoLink"
          value={productSaleData.videoLink}
          onChange={(e) => handleChange(e)}
        />
      </TextFieldCon>
      <TextFieldCon className="input-con disCon">
        <p>Ad Description *</p>
        <textarea
          type=""
          cols={187}
          rows={5}
          placeholder="Describe your property"
          name="description"
          value={productSaleData.description}
          onChange={(e) => handleChange(e)}
        />
      </TextFieldCon>
      <TextFieldCon className="add-img">
        <p>Add Images *</p>
        <div className="input">
          <label id="file-input-label" for="file-input">
            <GrUpload fontSize="20px" className="icon" />
            <p style={{ color: "#199956" }}>
              Upload the image or browse your device
            </p>
          </label>
          <input type="file" name="files" id="file-input" onChange={(e)=>handleChangeFiles(e)} multiple/>
        </div>
      </TextFieldCon>
      <ButtonsContainer>
        <button>Save as Draft</button>
        <button onClick={() => handleNext()}>Next</button>
      </ButtonsContainer>
    </Container>
  );
};

export default CreateAddOne;

const TextField = ({ fieldName, options, change, name }) => {
  return (
    <TextFieldCon2 className="input-con">
      <p>{fieldName}</p>

      <select onChange={(e) => change(e, name)}>
        {options.map((op,index) => (
          <option key={index} value={op}>{op}</option>
        ))}
      </select>
    </TextFieldCon2>
  );
};

//TextFieldCon2

/*{
    
      title: "",
      videoLink: "",
      propertyType: "",
      category: "",
      description: "",
      city: "",
      price: "",
      rooms:"",
      surfaceArea: "",
      paths: "",
      floor: "",
      buildingAge: "",
      listerType:"",
      paymentMethod: "",
      furnished: "",
      mortgaged: "",
      projectedBy:"",
      images:"",
    
  } */
