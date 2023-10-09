import React from "react";
import styled from "styled-components";
import product from "../../images/product.png";
import avatar from "../../images/avatar.png";
import { MdFavorite,MdEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import  {RiPriceTag2Fill}  from "react-icons/ri";
import Card from "../helper/Card";
import Swiper from "../helper/swiper/Swiper";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { ProductContainer, ProductImg, TextFieldCon } from "./style";

const ProductInfo = ({ cardWidth, productTitle }) => {
 
  return (
    <ProductContainer>
      <ProductImg>
        <div className="imgContainer">
          <div className="big">
            <img src={product} alt="" />
          </div>
          <div className="small">
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
          </div>
        </div>
      </ProductImg>

      <div className="content">
        <div className="leftContainer">
          <div className="name-fav">
            <p>{productTitle? productTitle:"House on the hollywood"}</p>
            <MdFavorite color="#199956" fontSize="20px" />
          </div>
          <div className="address">
            <BiMap fontSize="20px" />
            <p>9HC3+JHH Doha, Qata</p>
          </div>
          <div className="description">
            <h3 className="title">Description</h3>
            <p>
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
              Nullam tempus sollicitudin cursus. Ut et adipiscing erat.
              Curabitur this is a text link libero tempus congue.
            </p>
            <p>
              Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
              sagittis dolor sed mi elementum pretium. Donec et justo ante.
              Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Integer tristique elit lobortis purus bibendum,
              quis dictum metus mattis. Phasellus posuere felis sed eros.
            </p>
          </div>
          <div className="Property-Info">
            <h3>Property Information</h3>
            <div className="data-con">
              <ul>
                <li>
                  <p>City:</p>
                  <p>Alexandria</p>
                </li>
                <li>
                  <p>Baths:</p>
                  <p>2 bath</p>
                </li>
                <li>
                  <p>Floor:</p>
                  <p>2nd</p>
                </li>
                <li>
                  <p>Furnished / Unfurnished:</p>
                  <p>Semi furnished</p>
                </li>
                <li>
                  <p>Status:</p>
                  <p>for Rent</p>
                </li>
                <li>
                  <p>Payment Method:</p>
                  <p>Cash</p>
                </li>
              </ul>

              {/* //////////////////////////////////////////////////////////////////////////// */}
              <ul>
                <li>
                  <p>Surface area:</p>
                  <p>500 sqft</p>
                </li>
                <li>
                  <p>Rooms:</p>
                  <p>5 rooms</p>
                </li>
                <li>
                  <p>Building Age:</p>
                  <p>2009</p>
                </li>
                <li>
                  <p>Lister Type:</p>
                  <p>2009</p>
                </li>
                <li>
                  <p>Property Mortgaged ?:</p>
                  <p>No</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="Validated">
            <p>Validated information</p>
            <p>A project by mountain View</p>
          </div>
          <a href="/" className="extra-information">
            Extra information{" "}
          </a>
          <div className="location">
            <h3>location</h3>
            <div className="mapCon"></div>
          </div>
        </div>

        <div className="rightContainer">
          <div className="contact">
            <div className="price">
              <div className="priceText">
              <RiPriceTag2Fill/>
                <p>price</p>
              </div>
              <p>800,000 AED</p>
            </div>
            <div className="nameAvatar">
              <img src={avatar} alt="" />
              <p>Shabaan Hossam</p>
            </div>
            <button>
              <MdCall />
              <p>Call now</p>
            </button>
            <button>
              <FaWhatsapp />
              <p>Whats app</p>
            </button>
            <div className="issue">
              <p>Is there an issue?</p>
              <a href="/">Report this ad now</a>
            </div>
            <div className="Social">
              <p>Social Share:</p>
              <div className="icons">
                <FaFacebook fontSize={"25px"} color="#2751E8" />
                <AiFillLinkedin fontSize={"25px"} color="#3384DE" />
              </div>
            </div>
          </div>
          <form action="">
            <h3>Inquire about the Ad</h3>
            <TextField fieldName="Your Name" type="text" />
            <TextField fieldName="Your Email" type="email" />
            <TextField fieldName="Your Phone" type="tel" />
            <div className="textArea">
              <label>
                Your message:
                <textarea name="postContent" rows={4} cols={90} />
              </label>
            </div>
            <div className="checkRobot">
              <p>I'm not a robot</p>
              <div className="check"></div>
            </div>
            <button type="submit">
              <MdEmail/>
              <p>Inquire Now</p>
            </button>
          </form>
        </div>
      </div>
      <h3 className="recTitle">Recommended for you</h3>
      <Swiper
        array2={[
          <Card width={cardWidth} />,
          <Card width={cardWidth} />,
          <Card width={cardWidth} />,
          
        ]}
        array1={[]}
      />
    </ProductContainer>
  );
};

export default ProductInfo;

const TextField = ({ fieldName, type }) => {
  
  return (
    <TextFieldCon>
      <p>{fieldName}</p>

      <input type={type} id="" placeholder={fieldName} />
    </TextFieldCon>
  );
};
