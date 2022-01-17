import React from "react";
import styled from "styled-components";

const ProductImg = styled.img`
  margin-bottom: 6px;
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  box-sizing: border-box;
  border: 0.5px solid #DBDBDB;
`;

const ProductName = styled.h2`
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 17.5px;
  font-weight: 400;
`;

const ProductPrice = styled.p`
  color: #F26E22;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Product(props) {
  return (
    <section>
      <ProductImg src={props.src}></ProductImg>
      <ProductName>{props.name}</ProductName>
      <ProductPrice>{numberWithCommas(props.price)}원</ProductPrice>
    </section>
  );
}

export default Product;
