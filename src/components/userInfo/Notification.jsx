import React from "react";
import styled from "styled-components"
import notification from "../../images/notification.png";
import { GoClock } from "react-icons/go";
const Container = styled.div`
padding: 2%;
& .empty {
  width: 100%;
  height: 500px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  & .banner {
    width: 60%;
    height: 70%;
    background-color: red;
  }
}
`;
const NotContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
gap: 20px;
padding: 0px 20px;
`;
const NotificationStyle = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
gap: 10px;
& .imgCon {
  width: 50px;
  height: 50px;
  & img {
    width: 100%;
    height: 100%;
  }
}
& .textCon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
  & p {
    color: #3d3d3d;
    font-weight: 400;
    & span {
      font-weight: 600;
    }
  }
  & .date {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
}
`;

const Notification = () => {
 
  return (
    <Container>
      {/* <div className="empty">
        <div className="banner"></div>
  </div>*/}
      <NotContainer>
        <NotificationStyle>
          <div className="imgCon">
            <img src={notification} alt="" />
          </div>
          <div className="textCon">
            <p>
              <a href="/"> Jean Bowman</a> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsu has been the
              industry's standard dummy text ever since the 1500s
            </p>
            <div className="date">
              <GoClock />
              <p>Jul 23, 2022</p>
            </div>
          </div>
        </NotificationStyle>
        <NotificationStyle>
          <div className="imgCon">
            <img src={notification} alt="" />
          </div>
          <div className="textCon">
            <p>
              <a href="/"> Jean Bowman</a> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsu has been the
              industry's standard dummy text ever since the 1500s
            </p>
            <div className="date">
              <GoClock />
              <p>Jul 23, 2022</p>
            </div>
          </div>
        </NotificationStyle>
        <NotificationStyle>
          <div className="imgCon">
            <img src={notification} alt="" />
          </div>
          <div className="textCon">
            <p>
              <a href="/"> Jean Bowman</a> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsu has been the
              industry's standard dummy text ever since the 1500s
            </p>
            <div className="date">
              <GoClock />
              <p>Jul 23, 2022</p>
            </div>
          </div>
        </NotificationStyle>
        <NotificationStyle>
          <div className="imgCon">
            <img src={notification} alt="" />
          </div>
          <div className="textCon">
            <p>
              <a href="/"> Jean Bowman</a> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsu has been the
              industry's standard dummy text ever since the 1500s
            </p>
            <div className="date">
              <GoClock />
              <p>Jul 23, 2022</p>
            </div>
          </div>
        </NotificationStyle>
        <NotificationStyle>
          <div className="imgCon">
            <img src={notification} alt="" />
          </div>
          <div className="textCon">
            <p>
              <a href="/"> Jean Bowman</a> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsu has been the
              industry's standard dummy text ever since the 1500s
            </p>
            <div className="date">
              <GoClock />
              <p>Jul 23, 2022</p>
            </div>
          </div>
        </NotificationStyle>
        <NotificationStyle>
          <div className="imgCon">
            <img src={notification} alt="" />
          </div>
          <div className="textCon">
            <p>
              <a href="/"> Jean Bowman</a> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsu has been the
              industry's standard dummy text ever since the 1500s
            </p>
            <div className="date">
              <GoClock />
              <p>Jul 23, 2022</p>
            </div>
          </div>
        </NotificationStyle>
      </NotContainer>
    </Container>
  );
};

export default Notification;
