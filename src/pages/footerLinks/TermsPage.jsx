import React from "react";
import MainContainer from "../../components/main/Container";
import AdvBanner from "../../components/advertise/AdvBanner";
import styled from "styled-components"
import { CiEdit } from "react-icons/ci";
import { FcAdvertising } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCamera } from "react-icons/bs";
import { styleVar } from "../../variableStyle";
import Terms from "../../components/footerLinks/Terms";
const Container = styled.div`
background-color: #f6f9fb;
`;
const TermsPage = () => {
 

  return (
    <MainContainer>
      <AdvBanner text="Terms & Conditions" />
      <MainContainer padding="50px 15%">
        <Container>
          <Terms />
        </Container>
      </MainContainer>
    </MainContainer>
  );
};

export default TermsPage;
