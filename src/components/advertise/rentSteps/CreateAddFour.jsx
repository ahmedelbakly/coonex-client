import React from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
    width: 100%;
    & p {
    }
    & input {
      background: #f4f2f2;
    }
  }
`;

const Advantage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 20px;
  gap: 50px;
  & .item {
    min-width: 150px;
    padding: 10px 15px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #01582b;
    gap: 20px;
    border-radius: 30%;
    transition: all 0.3s;

    &:hover {
      background: #c0f0c0;
    }

    & p {
      color: #3d3d3d;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.28px;
    }
    & .icon {
      color: red;
    }
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
const TextFieldCon = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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
const CreateAddFour = ({
  handleBack,
  handleNext,
  productRentData,
  setProductRentData,
  handleSubmit,
}) => {
  const handleSelect = (e, name) => {
    if (!productRentData.unitDetails.includes(e.target.value)) {
      setProductRentData({
        ...productRentData,
        unitDetails: [...productRentData.unitDetails, e.target.value],
      });
      
    }
    
  };
  return (
    <Container>
      <InputsContainer>
        <TextField
          fieldName="Building Age"
          options={["", "prop1", "prop2", "prop3", "prop4", "prop5"]}
          change={handleSelect}
          name="furnished"
        />
      </InputsContainer>
      <Advantage>
       { productRentData.unitDetails.length > 0 &&
        productRentData.unitDetails.map((item,index)=>(
        <div key={index} className="item">
          <p>{item}</p>
          <MdOutlineClose className="icon" />
        </div>
        ) )}
      </Advantage>
      <ButtonsContainer>
        <div className="leftCon">
          <button onClick={() => handleBack()}>Back</button>
          <button>Save as Draft</button>
        </div>
        <button
          onClick={(e) => {
            handleNext();
            handleSubmit(e);
          }}
        >
          Next
        </button>
      </ButtonsContainer>
    </Container>
  );
};

export default CreateAddFour;

const TextField = ({ fieldName, options, change, name }) => {
  return (
    <TextFieldCon className="input-con">
      <p>{fieldName}</p>

      <select onChange={(e) => change(e, name)}>
        {options.map((op, index) => (
          <option key={index} value={op}>
            {op}
          </option>
        ))}
      </select>
    </TextFieldCon>
  );
};
