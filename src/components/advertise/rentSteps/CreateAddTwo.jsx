import React from "react";
import styled from "styled-components";
import { GrUpload } from "react-icons/gr";
const TextFieldCon2 = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  & p {
    color: #3d3d3d;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: left;
  }

  & select {
    width: 100%;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    padding: 10px 15px;
    height: 100%;
    & option {
      color: #080808;
      font-size: 16px;
      padding: 3px;
    }
  }
`;

////////////////
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20xp;
  margin-top: 20px;
  flex-direction: column;
`;
const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & .input-con {
    width: 45%;
    & p {
    }
    & input {
      background: #f4f2f2;
    }
  }
`;
const TextFieldCon = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  & p {
    color: #3d3d3d;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: left;
  }

  & input {
    width: 100%;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    padding: 10px 15px;
    height: 100%;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .leftCon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
  }
  & button {
    display: block;
    border-radius: 8px;
    padding: 6px 20px;
    border: 1px solid #199956;
    background: white;
    transition: all 0.3s;
    min-width: 190px;
    &:hover {
      background: #199956;
      color: white;
    }
  }
`;

const AddImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 124px;
  border: 1px solid #f80202;
  margin-bottom: 20px;

  & .child {
    width: max-content;
  }
`;

const CreateAddTwo = ({
  handleBack,
  handleNext,
  productRentData,
  setProductRentData,
  handleChange,
 
}) => {
  const handleSelect = (e, name) => {
    setProductRentData({ ...productRentData, [name]: e.target.value });
  };
  return (
    <Container>
      <InputsContainer>
        <TextFieldCon className="input-con">
          <p>City *</p>

          <input
            type="text"
            id=""
            placeholder="city"
            name="city"
            value={productRentData.city}
            onChange={(e) => handleChange(e)}
          />
        </TextFieldCon>
        <TextField
          fieldName="Surface area *"
          options={[ "",100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
          change={handleSelect}
          name="surfaceArea"
        />
        <TextFieldCon className="input-con">
          <p>Price*</p>

          <input
            type="number"
            id=""
            placeholder="price"
            name="price"
            value={productRentData.price}
            onChange={(e) => handleChange(e)}
          />
        </TextFieldCon>

        <TextField
          fieldName="Baths*"
          options={["",1, 2, 3, 4, 5]}
          change={handleSelect}
          name="paths"
        />
        <TextField
          fieldName="Rooms *"
          options={["",1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          change={handleSelect}
          name="rooms"
        />
        <TextField
          fieldName="Floor *"
          options={["",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          change={handleSelect}
          name="floor"
        />
      </InputsContainer>

      <ButtonsContainer>
        <div className="leftCon">
          <button onClick={() => handleBack()}>Back</button>
          <button>Save as Draft</button>
        </div>
        <button onClick={() => handleNext()}>Next</button>
      </ButtonsContainer>
    </Container>
  );
};

export default CreateAddTwo;

const TextField = ({ fieldName, options, change, name }) => {
  return (
    <TextFieldCon2 className="input-con">
      <p>{fieldName}</p>
      <select onChange={(e) => change(e, name)}>
        {options.map((op, index) => (
          <option key={index} value={op}>
            {op}
          </option>
        ))}
        
      </select>
    </TextFieldCon2>
  );
};

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
