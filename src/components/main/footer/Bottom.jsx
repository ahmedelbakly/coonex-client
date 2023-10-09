import React, { useState } from "react";
import "./footer.css";
import MainContainer from "../Container";
import logo from "../../../images/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Footer = ({lang}) => {
 
  const { i18n, t } = useTranslation();
  return (
    <MainContainer customClass="footer" bg="#F7F7F7" padding = "32px 50px">
      <div className="up">
        <div className="item1">
          <img src={logo} alt="logo" />
          <p>
  {t("bottomText")}
          </p>
        </div>
        <div className="list-container">
        <div className="Quick Links  list">
          {" "}
          <p className="p">{t("QuickLinks")}</p>
          <Link to="/">{t("home")}</Link>
          <Link to="/about">{t("About")}</Link>
          <Link to="/contactUs">{t("Contact")}</Link>
          <Link to="/fqa">{t("FAQs")}</Link>
        </div>
        <div className="Countries list">
          <p className="p">{t("Countries")}</p>
          <Link to="/">{t("SaudiArabia")}</Link>
          <Link to="/">{t("UAE")}</Link>
          <Link to="/">{t("Egypt")}</Link>
        </div>
        <div className="Support list">
          <p className="p">{t("Support")}</p>
          <Link to="/">{t("Help")}</Link>
          <Link to="/terms">{t("TermsConditions")}</Link>
          <Link to="/privacy">{t("Privacy")}</Link>
        </div>
        </div>
        
        <div className="Subscribe">
          <p className="p">{t("Subscribe")}</p>
          <form>
            <input type="email" name="" id="" placeholder={t("writeEmail")} />
            <button type="submit">
    {lang === "en"?  <BsFillArrowRightSquareFill className="icon"  />  : <BsFillArrowLeftSquareFill className="icon" />  }  
            </button>
          </form>
        </div>
      </div>
      <div className="down">
        <p className="copyright">
  
        {t("copyright1")}<span>{t("coonex")}</span>{t("copyright2")}
        </p>
        <div className="social-media">
          <AiFillFacebook className="icon" />
          <AiFillTwitterSquare className="icon" />
          <AiFillInstagram className="icon" />
          <AiFillLinkedin className="icon" />
        </div>
      </div>
    </MainContainer>
  );
};

export default Footer;
