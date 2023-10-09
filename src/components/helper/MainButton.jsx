import React from "react";
import styled from "styled-components";
const Button = styled.button`

background: #ffffff;
color: black;
border-radius: 8px;
transition: all 0.5s;
border: 1px solid #199956;
&:hover {
  background: #199956;
  color: #fff;
}
`;
const MainButton = ({ text, padding, size, click,customClass }) => {
 
  return <Button className={customClass} style={{padding:padding}} onClick={(e) => click(e)}>{text}</Button>;
};

export default MainButton;
