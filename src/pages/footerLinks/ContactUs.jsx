import React from "react";
import MainContainer from "../../components/main/Container";
import AdvBanner from "../../components/advertise/AdvBanner";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import styled from "styled-components"
import contactUs from "../../images/contactUs.jpg";
const UpCon = styled.div`
width: 100%;
height: 72px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 100px;
& .item {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  & .iconCon {
    height: 72px;
    width: 72px;
    background: #b49668;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    & .icon {
      font-size: 25px;
      color: #fff;
    }
  }
  & .text {
    & h4 {
      color: #3d3d3d;
      font-size: 18px;
      font-weight: 600;
    }
    & p {
      color: #8898aa;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.429px;
    }
  }
}
`;
const DownCon = styled.div`
height: 500px;
display: flex;
justify-content: space-between;
align-items: center;
& .imgCon {
  height: 100%;
  width: 45%;
  padding: "10px 0px";

  & img {
    width: 100%;
    height: 100%;
  }
}
& form {
  border: 1px solid #e2e2e2;
  width: 51%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 10px;
  border-radius: 10px;
  & .title {
    & h3 {
      color: #3d3d3d;
      font-size: 20px;
      font-weight: 600;
    }
    & p {
      color: #8898aa;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.429px;
    }
  }
  & .inputsCon {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 15px;
    & .item {
      width: 48%;
    }
  }
  & .message {
    width: 100%;
    & textArea {
      width: 100%;
      height: 155px;
      border-radius: 10px;
      border: 1px solid #e2e2e2;
    }
    & label {
      color: #3d3d3d;
      font-size: 14px;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
  & button {
    padding: 12px 20px;
    border-radius: 10px;
    background: #199956;
    color: #fff;
    margin-left: auto;
  }
}
`;
const ContactUsPage = () => {
 
  return (
    <>
      <AdvBanner text="ContactUs" />
      <MainContainer padding="70px 10%">
        <UpCon>
          <div className="item">
            <div className="iconCon">
              {" "}
              <BsTelephone className="icon" />
            </div>
            <div className="text">
              <h4>Phone</h4>
              <p>01234567890</p>
              <p>01234567890</p>
            </div>
          </div>
          <div className="item">
            <div className="iconCon">
              {" "}
              <AiOutlineMail className="icon" />
            </div>
            <div className="text">
              <h4>Email</h4>
              <p>ahmed@gmail.com</p>
              <p>elbakly@yahoo.com</p>
            </div>
          </div>
          <div className="item">
            <div className="iconCon">
              {" "}
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="text">
              <h4>Location</h4>
              <p>Apt. 8109, HERNDON</p>
              <p>13830 Jefferson Park Dr, </p>
            </div>
          </div>
        </UpCon>
        <DownCon>
          <form>
            <div className="title">
              <h3>Contact us</h3>
              <p>Fill out the form below to reach us</p>
            </div>
            <div className="inputsCon">
              <div className="item">
                {" "}
                <TextFled type="text" label="First Name" />
              </div>
              <div className="item">
                {" "}
                <TextFled type="text" label="First Name" />
              </div>
              <div className="item">
                {" "}
                <TextFled type="text" label="First Name" />
              </div>
              <div className="item">
                {" "}
                <TextFled type="text" label="First Name" />
              </div>
            </div>
            <div className="message">
              <label>Message</label>
              <textarea name="" id="" cols="50" rows="7"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <div className="imgCon">
            <img src={contactUs} alt="" />
          </div>
        </DownCon>
      </MainContainer>
    </>
  );
};

export default ContactUsPage;

const TextFled = ({ type, label }) => {
  const FledCon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    & label {
      color: #3d3d3d;
      font-size: 14px;
      font-weight: 600;
      text-transform: capitalize;
    }
    & input {
      width: 100%;
      border-radius: 9px;
      border: 1px solid #e2e2e2;
      background: #fff;
      height: 35px;
      padding-left: 10px;
    }
  `;
  return (
    <FledCon>
      <label>{label}</label>
      <input type={type} placeholder={label} />
    </FledCon>
  );
};
