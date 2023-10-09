import React, { useState } from "react";
import "./topbar.css";
import logo from "../../../images/logo.png";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { FcAdvertising } from "react-icons/fc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import MainButton from "../../helper/MainButton";
import MainContainer from "../Container";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import AccountMenu from "../menu";
import { logOutUser } from "../../../redux/userSlice";
//////////////////////////////////////////////////////////////////////////////////////
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// ahmed
//////////////////////////////////////////////////////////////////////////////////////

const Topbar = ({ lang, handelChangeLang }) => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const handleLink = (nav) => {
    navigate(nav);
  };

  const handleLogout = () => {
    dispatch(logOutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("reToken");
  };
  const { i18n, t } = useTranslation();
  return (
    <MainContainer customClass="topbar-container" padding="32px 50px">
      <div className="up">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => handleLink("/")} />
        </div>

        <div className="with-icon">
          <div className="icon">
            <GrFavorite />
            <Link to="/favorite"> {t("Favorites")}</Link>
          </div>
          <div className="icon">
            <FcAdvertising />
            <Link to="/advertisement">{t("myAds")}</Link>
          </div>
          <div className="icon">
            <IoIosNotificationsOutline />
            <Link to="/notification">{t("notifications")}</Link>
          </div>
        </div>
        <div className="buttons">
          <div className="lang">
            <button onClick={handelChangeLang}>
              {" "}
              <TfiWorld />
            </button>{" "}
            <p>{lang}</p>
          </div>

          {Object.keys(user).length !== 0 ? (
            <div className="nameAvatar">
              <Avatar
                alt=""
                src={`http://localhost:3001/images/${user.image}`}
              />
              <AccountMenu
                username={user.username}
                logout={handleLogout}
                handleLink={handleLink}
              />
            </div>
          ) : (
            <MainButton
              text={t("loginButton")}
              padding="5px 20px"
              size="20px"
              click={() => handleLink("/login")}
            />
          )}
          <MainButton
            text={t("adsButton")}
            padding="5px 20px"
            size="20px"
            click={() => handleLink("/advertisement")}
          />
        </div>
      </div>
      <div className="down">
        <a href="/#resRent">{t("ResidentialRent")}</a>
        <a href="/#resSale">{t("ResidentialScale")}</a>
        <a href="/#comRent">{t("CommercialRent")}</a>
        <a href="/#comSale">{t("CommercialScale")}</a>
        <a href="/contactUs">{t("Contact")}</a>
      </div>
    </MainContainer>
  );
};

export default Topbar;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// buttonAppbar
export function ButtonAppBar({ handleShow }) {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState("");
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const handleLink = (nav) => {
    navigate(nav);
  };
  const handleLogout = () => {
    dispatch(logOutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("reToken");
  };
  const { i18n, t } = useTranslation();
  return (
    <MainContainer customClass="topbar-responsive" padding="10px 5px">
      <Box sx={{ flexGrow: 1, background: "white !important" }}>
        <AppBar position="static" className="top-res">
          <Toolbar className="tool-res">
            <IconButton
              onClick={() => handleShow()}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <img
              src={logo}
              alt="logo-res"
              className="logo-res"
              onClick={() => handleLink("/")}
            />

            {Object.keys(user).length !== 0 ? (
              <div className="nameAvatar">
                <Avatar
                  alt=""
                  src={`http://localhost:3001/images/${user.image}`}
                />
                <AccountMenu
                  username={user.username}
                  logout={handleLogout}
                  handleLink={handleLink}
                />
              </div>
            ) : (
              <Button
                onClick={() => {
                  handleLink("/login");
                }}
                color="inherit"
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </MainContainer>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export const MenuList = ({ lang, handelChangeLang, show, handleClose }) => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const handleLink = (nav) => {
    navigate(nav);
  };

  const handleLogout = () => {
    dispatch(logOutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("reToken");
  };
  const { i18n, t } = useTranslation();
  return (
    <div className={`menu-list ${show ? "show-menu" : ""} `}>
      <Typography className="close" onClick={() => handleClose()}>
        <AiOutlineClose />
      </Typography>
      <div className="down">
        <Link to="/">Home</Link>
        <Link to="/">{t("ResidentialRent")}</Link>
        <Link to="/">{t("ResidentialScale")}</Link>
        <Link to="/">{t("CommercialRent")}</Link>
        <Link to="/">{t("CommercialScale")}</Link>
        <Link to="/contactUs" onClick = {()=>handleClose()}>{t("Contact")}</Link>
      </div>
      <div className="up">
        <div className="with-icon">
          <div className="icon">
            <GrFavorite />
            <Link to="/favorite" onClick={() => handleClose()}>
              {" "}
              {t("Favorites")}
            </Link>
          </div>
          <div className="icon">
            <FcAdvertising />
            <Link to="/advertisement" onClick={() => handleClose()}>
              {t("myAds")}
            </Link>
          </div>
          <div className="icon">
            <IoIosNotificationsOutline />
            <Link to="/notification" onClick={() => handleClose()}>
              {t("notifications")}
            </Link>
          </div>
        </div>
        <div className="buttons">
          <div className="lang">
            <button onClick={handelChangeLang}>
              {" "}
              <TfiWorld />
            </button>{" "}
            <p>{lang}</p>
          </div>
        </div>
      </div>

      <Button
        className="adsButton"
        onClick={() => {
          handleLink("/advertisement");
          handleClose();
        }}
      >
        {t("adsButton")}
      </Button>
    </div>
  );
};
