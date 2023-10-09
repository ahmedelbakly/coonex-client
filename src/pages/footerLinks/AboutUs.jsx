import React from "react";
import MainContainer from "../../components/main/Container";
import styled from "styled-components"
import vision from "../../images/vision.png";
import mission1 from "../../images/mission1.png";
import mission2 from "../../images/mission2.png";
import AdvBanner from "../../components/advertise/AdvBanner";
const Vision = styled.div`
    width: 100%;
    height: 348px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    & .imgCon {
      width: 48%;
      height: 100%;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    & .textCon {
      width: 48%;
      height: 100%;
      padding: 30px 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
      & h3 {
        color: var(--black, #3d3d3d);
        font-size: 32px;
        font-weight: 600;
      }
      & p {
        color: #8898aa;
        font-size: 16px;
        font-weight: 400;
      }
    }
  `;
  const Mission = styled.div`
    width: 100%;
    height: 348px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    & .imgCon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 48%;
      height: 100%;
      & img {
        width: 48%;
        height: 100%;
        display: block;
        
      }
      & img:first-child {
          margin-top: 50px;
        }
    }
    & .textCon {
      width: 48%;
      height: 100%;
      padding: 30px 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
      & h3 {
        color: var(--black, #3d3d3d);
        font-size: 32px;
        font-weight: 600;
      }
      & p {
        color: #8898aa;
        font-size: 16px;
        font-weight: 400;
      }
    }
  `;
const AboutUsPage = () => {
  
  return (
<>
<AdvBanner text="About Us" />
    <MainContainer padding="50px 50px">

      <Vision>
        <div className="textCon">
          <h3>Vision</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="imgCon">
          <img src={vision} alt="vision" />
        </div>
      </Vision>
      <Mission>
        <div className="imgCon">
          <img src={mission1} alt="Mission" />
          <img src={mission2} alt="Mission" />
        </div>
        <div className="textCon">
          <h3>Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Mission>
    </MainContainer>
    </>
  );
};

export default AboutUsPage;
