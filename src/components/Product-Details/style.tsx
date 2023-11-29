import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductPageDisplay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
`;

export const ProductImgContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  display: flex;
  height: 60vh;
  margin-left: 50px;
  box-shadow: 0 0 10px 10px #888888;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 60vh;
  margin-top: 90px;
  margin-left: 100px;
  /* border: 2px green solid; */
`;

export const AddToCartBtn = styled(Link)`
  display: inline-flex;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  text-decoration: none;
  border-radius: 5px;
  background: #fdca40;
  border: none;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;
