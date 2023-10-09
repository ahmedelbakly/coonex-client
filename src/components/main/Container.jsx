import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
`;
const MainContainer = ({ children, customClass, bg, padding }) => {
  return (
    <Container
      style={{ padding: padding, background: bg }}
      className={customClass}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
