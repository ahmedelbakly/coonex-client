import React from "react";
import MainContainer from "../../components/main/Container";
import ProductInfo from "../../components/product/ProductInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductInfoPage = () => {
  const products = useSelector((state) => state.product.allProducts);
  let { id } = useParams();
  const product = products.find((item)=>item._id === id)
  console.log("###########3",product);
  return <MainContainer     padding="32px 50px"> 

  <ProductInfo  cardWidth="32%" productTitle={product!==undefined?product.title: ""}/>
 
  
  </MainContainer>;
};

export default ProductInfoPage;



