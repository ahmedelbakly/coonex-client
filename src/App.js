import "./App.css";
import { Home } from "./pages/Home/Home";
import Topbar from "./components/main/topbar/Topbar";
import {ButtonAppBar} from "./components/main/topbar/Topbar";
import {MenuList} from "./components/main/topbar/Topbar";
import { useState } from "react";
import Footer from "./components/main/footer/Bottom";
import { useTranslation } from "react-i18next";
import LoginPage from "./pages/LoginAndSignup/LoginPage";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import ConfirmLoginOne from "./components/login/ConfirmLogin";
import ConfirmLoginTwo from "./components/login/ConfirmLogin2";
import ConfirmPassOne from "./components/login/ConfirmPassOne";
import ConfirmPassTwo from "./components/login/ConfirmPassTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapSearchPage from "./pages/search/MapSearchPage";
import ProductInfoPage from "./pages/search/ProductInfoPage";
import Slider from "./components/helper/Slider";
import AdvertisePageRent from "./pages/advertise/AdvertisePageRent";
import AdvertisePageSale from "./pages/advertise/AdvertisePageSale";
import ProfilePage from "./pages/user/ProfilePage";
import AdvertisementPage from "./pages/user/AdvertisementPage";
import NotificationPage from "./pages/user/NotificationPage";
import TermsPage from "./pages/footerLinks/TermsPage";
import PrivacyPage from "./pages/footerLinks/PrivacyPage";
import AboutUsPage from "./pages/footerLinks/AboutUs";
import FavoritesPage from "./pages/footerLinks/FavoritesPage";
import ContactUsPage from "./pages/footerLinks/ContactUs";
import FQAPage from "./pages/footerLinks/FQAPage";
import AddAvatarPage from "./pages/AddImages/addAvaterPage";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { logOutUser, loginUser } from "./redux/userSlice";
import {setRentProCom,setRentProRes,setSaleProCom,setSaleProRes,setAllProducts} from "./redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ScrollToTop from "./components/helper/scroll";
// npm install @mui/material @mui/styled-engine-sc styled-components
function App() {
  const user = useSelector((state) => state.user.userInfo);
  const products = useSelector((state) => state.product.searchProducts);
  const dispatch = useDispatch();
  console.log();
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState("en");

  console.log(products);
  const [massage, setMassage] = useState("");
  const [route, setRoute] = useState("searchSale");
  console.log(route);
  //************************************************************************************** */
  const handleLogout = () => {
    dispatch(logOutUser());
  };
  //************************************************************************************** */
  const protectRoute = (component) => {
    if (Object.keys(user).length !== 0) {
      return component;
    }
    return <LoginPage component={<Login />} />;
  };
  //************************************************************************************** */
  const getUser = () => {
    axios
      .post("http://localhost:3001/getUser",{id:""}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("reToken")}`,
        },
      })
      .then(function (response) {
        const data = response.data;
       console.log(data)
        localStorage.setItem("token", data.userToken);
        localStorage.setItem("reToken", data.refreshToken);
        localStorage.setItem("coonexUId", data.user._id);
        dispatch(loginUser(data.user));
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //************************************************************************************** */
  //************************************************************************************** */
  const getProduct = () => {
    axios
      .get("http://localhost:3001/getProduct", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("reToken")}`,
        },
      })
      .then(function (response) {
        const data = response.data;
       console.log(data);
        dispatch(setRentProRes(data.rentProRes));
        dispatch(setRentProCom(data.rentProCom));
        dispatch(setSaleProRes(data.saleProRes));
        dispatch(setSaleProCom(data.saleProCom));
        dispatch(setAllProducts(data.allProducts));
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //************************************************************************************** */
  useEffect(() => {
    getProduct()
    getUser()
   
    
  },[]);
  //************************************************************************************** */
  // create CreateRefreshToken to create new valid access token by refresh token

  //******************************************************************************* */

  const handelChangeLang = (e) => {
    i18n.changeLanguage(lang === "en" ? "ar" : "en");
    setLang(lang === "en" ? "ar" : "en");
  };

  /******************************************************************************* */
  const [show, setShow] = useState(false);

const handleClose = ()=>{
  setShow(false)
}

const handleShow = ()=>{
  setShow(true)
}

  /******************************************************************************* */


  return (
    <div
      className="App"
      dir={lang === "en" ? "ltr" : "rtl"}
      lang={lang === "en" ? "en" : "ar"}
    >
      <BrowserRouter>
      <ScrollToTop />
        <Topbar lang={lang} handelChangeLang={handelChangeLang} />
        <ButtonAppBar lang={lang} handelChangeLang={handelChangeLang} handleShow={handleShow}/>
        <MenuList lang={lang} handelChangeLang={handelChangeLang}  show={show} handleClose={handleClose}/>
        <Routes className="routs">
          <Route path="/" element={<Home route={route} setRoute={setRoute}/>} />
          <Route path="login" element={<LoginPage component={<Login />} />} />
          <Route path="signup" element={<LoginPage component={<Signup />} />} />
          <Route
            path="forgetPass"
            element={<LoginPage component={<ConfirmPassTwo />} />}
          />
          <Route
            path="confirmPass"
            element={<LoginPage component={<ConfirmLoginTwo />} />}
          />
          <Route path="search" element={<MapSearchPage setRoute={setRoute}  route={route}/>} />
          <Route path="productInfo/:id" element={<ProductInfoPage />} />
          <Route path="slider" element={<Slider />} />
          <Route path={"advertise/rent"} element={<AdvertisePageRent />} />
          <Route path="advertise/sale" element={<AdvertisePageSale />} />
          <Route
            path="profile"
            element={protectRoute(<ProfilePage handleLogout={handleLogout} />)}
          />
          <Route
            path="advertisement"
            element={protectRoute(
              <AdvertisementPage handleLogout={handleLogout} />
            )}
          />
          <Route
            path="notification"
            element={protectRoute(
              <NotificationPage handleLogout={handleLogout} />
            )}
          />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route
            path="favorite"
            element={protectRoute(
              <FavoritesPage handleLogout={handleLogout} />
            )}
          />
          <Route path="contactUs" element={<ContactUsPage />} />
          <Route path="fqa" element={<FQAPage />} />
          <Route path="avatar" element={<AddAvatarPage />} />
        </Routes>

        <Footer lang={lang} />
      </BrowserRouter>
    </div>
  );
}

export default App;
