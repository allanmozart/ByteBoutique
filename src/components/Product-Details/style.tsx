import styled from 'styled-components';

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
  padding: 20px;
  border: #2e1a12 solid 20px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 1);
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 0;
  margin-top: 20px;
  margin-left: 100px;
`;

export const AddToCartBtn = styled.button`
  width: 200px;
  align-items: center;
  border-radius: 5px;
  background: #fdca40;
  border: none;
  color: black;
  cursor: pointer;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
