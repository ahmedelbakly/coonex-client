import React from "react";
import styled from "styled-components";
const SubBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;

padding: 10px;
border-radius: 10px;
gap: 10px;
// border: solid 2px  #B49668 !important; 

& div {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  & child1 {
    font-weight: 500;
    color:#121212
  }

  & child2 {
    font-size: 12px;
    color:#121212 !important;
    font-weight: 400;
  }
}
`;
const SubButton = ({ icon, text, color, childColor }) => {
 
  return (
    <SubBtn style={{ color: color }}>
      {icon}
      <div>
        <p className="child1">Available on</p>
        <p className="child1">{text}</p>
      </div>
    </SubBtn>
  );
};

export default SubButton;


//{//${color === "black" ? "white" : "black"} !important;}