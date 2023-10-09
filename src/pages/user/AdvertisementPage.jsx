import React from "react";
import MainContainer from "../../components/main/Container";
import AdvBanner from "../../components/advertise/AdvBanner";
import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
import { FcAdvertising } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCamera } from "react-icons/bs";
import { styleVar } from "../../variableStyle";
import Advertisement from "../../components/userInfo/Advertisement";
import BasicPagination from "../../components/main/Pagination";
import { Link } from "react-router-dom";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
gap: 4%;
`;
const SideBar = styled.div`
width: 23%;
border: ${styleVar.borderStyle};
border-radius: 10px;
height: max-content;
display: flex;
justify-content: flex-start;
flex-direction: column;
padding: 10px 20px;
& .item {
  width: 100%;
  height: 50px;
  /* background-color: orange; */
  border-bottom: ${styleVar.borderStyle};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  & a {
    color: ${styleVar.mainColor};
    font-size: 16px;
    font-weight: 600;
  }
  & .icon {
    font-size: 20px;
  }
}
& .last {
  border: none;
}
`;
const Content = styled.div`
width: 73%;
border: ${styleVar.borderStyle};
padding: 10px 0px;
`;
const Pagination = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 150px;
`;
const AdvertisementPage = ({handleLogout}) => {
 
  return (
    <MainContainer>
      <AdvBanner text="advertisements" />
      <MainContainer padding="30px 50px">
        <Container>
          <SideBar>
            <div className="item">
              <CiEdit className="icon" />
              <Link to ="/profile">My Profile</Link>
            </div>
            <div className="item">
              <IoMdNotificationsOutline className="icon" />
              <Link to="/notification">notifications</Link>
            </div>
            <div className="item">
              <FcAdvertising className="icon" />
              <Link to="/advertisement">advertisements</Link>
            </div>
            <div className="item last">
              <FiLogOut className="icon" />
              <Link to="/" onClick={()=> handleLogout()}>Log out</Link>
            </div>
          </SideBar>
          <Content>
            <Advertisement />
            <Pagination>
            <BasicPagination />
          </Pagination>
          </Content>
         
        </Container>
        
      </MainContainer>
    </MainContainer>
  );
};

export default AdvertisementPage;
