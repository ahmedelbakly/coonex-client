import React from "react";
import styled from "styled-components"
import MainContainer from "../main/Container";
import SubButton from "../main/SubButton";
import phonoLogo from "../../images/phonoLogo.png";
import phonoLogo2 from "../../images/phonoLogo2.png";
const Banner3 = styled.div`
    height: 422px;
    width: 100%;
    position: relative;
    border-radius: 10px;
    background: #f7f7f7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    overflow: hidden;
    & .vector1 svg {
      width: 450.353px;
      height: 400.989px;
      /* transform: rotate(-29.601deg); */
      position: absolute;
      right: -25px;
      bottom: -30px;
      z-index: 0;
      fill: #6449e7;
      /* opacity: 0.05; */
    }
  `;
  const BannerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 70px;
    color: black;
    z-index: 2;
    gap: 5px;
    text-align: left;
    width: 480px;
    & button {
      font-size: 14px;
      height: max-content;
      border: none;
      background-color: none;
      color: #b49668;
      text-transform: capitalize;
      font-weight: 600;
    }
    & h2 {
      font-weight: 700;
      font-size: 32px;
      height: max-content;
    }
    & p {
      font-weight: 400;
      font-size: 16px;
      color: #8898aa;
      text-transform: capitalize;
    }
    & .btn-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
    }
  `;
const HomeBanner3 = () => {
  const googleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M5.21517 3.25C5.68089 3.71265 6.14456 4.17734 6.61283 4.63691C9.4189 7.39078 12.226 10.1436 15.0341 12.8955C15.0832 12.9441 15.1472 12.9778 15.2209 13.0306C11.855 16.3325 8.52636 19.5977 5.19368 22.8669C4.66655 22.5829 4.37842 22.156 4.34157 21.5655C4.33696 21.4892 4.34003 21.4124 4.34003 21.3357C4.34003 15.8208 4.34311 10.3064 4.33594 4.79147C4.33492 4.1364 4.54935 3.62309 5.12305 3.28173C5.13175 3.27661 5.1338 3.26075 5.13892 3.25C5.16451 3.25 5.1901 3.25 5.21568 3.25H5.21517Z"
        fill="#00CFFF"
      />
      <path
        d="M7.53731 3.80078C11.1428 5.83612 14.7477 7.87145 18.3056 9.87966C17.5594 10.6652 16.8117 11.4524 16.0538 12.2502C13.1873 9.42316 10.3495 6.62425 7.51172 3.82586C7.52042 3.81767 7.52912 3.80948 7.53731 3.80078Z"
        fill="#00F270"
      />
      <path
        d="M7.51562 22.2887C10.3504 19.4929 13.1851 16.6975 16.0485 13.873C16.7992 14.6663 17.5434 15.4524 18.2936 16.2451C14.7552 18.2426 11.1441 20.281 7.53354 22.3199C7.52739 22.3097 7.52125 22.2989 7.51562 22.2887Z"
        fill="#FF373D"
      />
      <path
        d="M16.957 13.1149C17.2564 12.7874 17.5338 12.4614 17.8352 12.1599C18.3317 11.6635 18.8465 11.1855 19.348 10.6937C19.4376 10.6062 19.5021 10.6005 19.6085 10.662C20.2928 11.0576 20.9847 11.4388 21.6664 11.839C22.1413 12.118 22.3332 12.5719 22.3256 13.098C22.3179 13.6149 22.1265 14.053 21.6429 14.3196C20.9622 14.6953 20.2846 15.0765 19.607 15.4573C19.5246 15.5034 19.4622 15.5356 19.3736 15.4496C18.5594 14.6574 17.7406 13.8703 16.9575 13.1149H16.957Z"
        fill="#FFCB00"
      />
    </svg>
  );
  const AppStore = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M17.3786 2.16602C17.3938 2.50294 17.4252 2.83987 17.4209 3.17679C17.4019 4.67616 16.6669 5.73136 15.3712 6.42688C14.7596 6.75513 14.1107 6.97993 13.4249 7.09314C13.3697 7.10235 13.3144 7.10777 13.2369 7.11806C13.1887 6.6143 13.2413 6.12949 13.3361 5.64577C13.5809 4.3972 14.3127 3.52022 15.4026 2.91083C15.9703 2.59286 16.565 2.34531 17.201 2.20122C17.2194 2.19689 17.2351 2.17847 17.2519 2.16656C17.2941 2.16656 17.3364 2.16656 17.3786 2.16656V2.16602Z"
        fill="#121212"
      />
      <path
        d="M22.0288 18.0732C21.4253 19.5238 20.8382 20.9761 19.7905 22.1548C19.3242 22.6797 18.7316 23.1006 18.1617 23.5225C17.6108 23.931 16.9814 23.8844 16.3617 23.6758C15.9424 23.5344 15.521 23.3931 15.1164 23.2149C14.1787 22.8016 13.2487 22.8248 12.3045 23.1851C11.7802 23.3855 11.2499 23.5751 10.7136 23.7397C9.95958 23.971 9.28411 23.7387 8.65576 23.3232C7.85299 22.7929 7.25172 22.0659 6.71708 21.2821C5.73448 19.8413 5.08013 18.2541 4.68795 16.5603C4.38298 15.2413 4.21344 13.9028 4.44094 12.5573C4.80766 10.3879 5.90185 8.70648 7.95645 7.79537C9.07664 7.29865 10.2483 7.35661 11.3907 7.81866C11.7423 7.96113 12.0976 8.09546 12.4481 8.24172C13.0304 8.48439 13.6046 8.4183 14.176 8.20705C14.7822 7.98333 15.3726 7.69841 15.9955 7.54187C17.5567 7.15023 19.0008 7.46332 20.2759 8.44864C20.6784 8.76011 21.0256 9.14307 21.4129 9.50708C19.8897 10.6636 18.8513 12.0286 19.0972 13.9944C19.3296 15.8518 20.2759 17.2482 22.0288 18.0732Z"
        fill="#121212"
      />
    </svg>
  );

  const vectorSvg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="458"
      height="325"
      viewBox="0 0 458 325"
      fill="none"
    >
      <path
        opacity="0.05"
        d="M14.2888 98.919C-45.5638 220.453 105.11 452.029 210.665 450.216C253.362 449.482 263.741 410.986 386.004 357.81C445.16 332.078 462.386 332.545 482.649 309.205C526.115 259.135 525.911 165.957 495.585 110.852C418.394 -29.3914 82.2084 -38.9987 14.2888 98.919Z"
        fill="#6449E7"
      />
    </svg>
  );

  
  return (
    <MainContainer customClass="Banner4-container" padding="32px 50px">
      <Banner3>
        <BannerText>
          <button>Download Our App</button>
          <h3>App is availablefor free on app store</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            mod tempor incididunt.
          </p>
          <div className="btn-container">
            <SubButton
              text="App Store"
              icon={googleIcon}
              color="black"
              childColor="white"
            />
            <SubButton
              text="Google play"
              icon={AppStore}
              color="white"
              childColor="black"
            />
          </div>
        </BannerText>
        <Phone1 right="70px" top="35px" index={2} rotate={0} />
        <Phone2 right="215px" top="75px" index={1} rotate={"-15deg"} />
        <span className="vector1"> {vectorSvg1}</span>
      </Banner3>
    </MainContainer>
  );
};

export default HomeBanner3;
const PhoneStyle = styled.div`
    width: 168px;
    height: 352px;
    fill: #fff;
    position: absolute;
    border-radius: 20px;
    border-left: 10px solid black;
    border-right: 10px solid black;
    border-top: 50px solid black;
    border-bottom: 50px solid black;
    display: flex;
    align-items: center;
    background: #fff;

    & .curricle {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 1px solid #444444 !important;
      position: absolute;
      left: 58px;
      bottom: -38px;
      z-index: 1;
      background: black;
    }
    & .small-dote {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      position: absolute;
      left: 72px;
      top: -38px;
      z-index: 1;
      background: #444444;
    }
    & div {
      width: max-content;
      height: max-content;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      position: absolute;
      left: 54px;
      top: -28px;
      z-index: 1;

      & .big-dote {
        width: 6px;
        height: 6px;
        background: #444444;
        border-radius: 50%;
      }

      & .speaker {
        width: 30px;
        height: 2px;
        background: #444444;
        border-radius: 1px;
      }
    }
    & img {
      width: 121.951px;
      height: 36.833px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `;
const Phone1 = ({ rotate, index, top, right }) => {
  

  return (
    <PhoneStyle style={{ rotate: rotate, top: top, right: right, zIndex: index }}>
      <span className="curricle"></span>
      <span className="small-dote"></span>
      <div>
        <span className="big-dote"></span>
        <span className="speaker"></span>
      </div>

      <span className="power"></span>
      <span className="volumeUp"></span>
      <span className="volumeDown"></span>
      <span className="upVolume"></span>
      <img src={phonoLogo2} alt="logo" />
    </PhoneStyle>
  );
};


const PhoneStyle2 = styled.div`
    width: 152px;
    height: 320px;
    fill: #fff;
    position: absolute;
    border-radius: 20px;
    border-left: 8px solid black;
    border-right: 8px solid black;
    border-top: 40px solid black;
    border-bottom: 40px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;

    & .curricle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #444444 !important;
      position: absolute;
      left: 52px;
      bottom: -32px;
      z-index: 1;
      background: black;
    }
    & .small-dote {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      position: absolute;
      left: 72px;
      top: -29px;
      z-index: 1;
      background: #444444;
    }
    & div {
      width: max-content;
      height: max-content;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      position: absolute;
      left: 50px;
      top: -20px;
      z-index: 1;

      & .big-dote {
        width: 6px;
        height: 6px;
        background: #444444;
        border-radius: 50%;
      }

      & .speaker {
        width: 30px;
        height: 2px;
        background: #444444;
        border-radius: 1px;
      }
    }
    & img {
      width: 110.737px;
      height: 33.447px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      rotate: 5deg;
    }
  `;
const Phone2 = ({ rotate, index, top, right }) => {
  

  return (
    <PhoneStyle2 style={{ rotate: rotate, top: top, right: right, zIndex: index }}>
      <span className="curricle"></span>
      <span className="small-dote"></span>
      <div>
        <span className="big-dote"></span>
        <span className="speaker"></span>
      </div>

      <span className="power"></span>
      <span className="volumeUp"></span>
      <span className="volumeDown"></span>
      <span className="upVolume"></span>
      <img src={phonoLogo} alt="logo" />
    </PhoneStyle2>
  );
};
