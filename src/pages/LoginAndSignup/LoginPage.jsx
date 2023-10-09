import React from "react";
import styled from "styled-components"
const LoginPageCon = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
/* background-color: orange; */
`;
const LoginPage = ({ component }) => {
 
  return <LoginPageCon className= "login">{component}</LoginPageCon>;
};

export default LoginPage;
