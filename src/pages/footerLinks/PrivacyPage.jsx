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
import Privacy from "../../components/footerLinks/Privacy";
const Container = styled.div`
background-color: #f6f9fb;
`;

const PrivacyPage = () => {
 
  return (
    <MainContainer>
      <AdvBanner text="Privacy Policy" />
      <MainContainer padding="50px 15%">
        <Container>
          <Privacy />
        </Container>
      </MainContainer>
    </MainContainer>
  );
};

export default PrivacyPage;
