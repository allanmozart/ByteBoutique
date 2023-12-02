import styled from 'styled-components';

export const ProductPageDisplay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 0px;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: start;
    width: 100vw;
  }
`;

export const ProductImgContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    height: 35%;
    margin-top: 0;
  }
`;

export const ProductImage = styled.img`
  display: flex;
  max-width: 90%;
  max-height: 60%;
  margin-left: 50px;
  padding: 20px;
  border: #d4af47 solid 20px;
  border-radius: 5px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 1);

  @media (max-width: 767px) {
    margin: auto;
    height: 80%;
  }
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 0;
  margin-top: 150px;
  margin-left: 100px;

  @media (max-width: 767px) {
    height: 50%;
    margin: auto;
    font-size: medium;
    width: 60%;
  }
`;

export const ProductTitle = styled.h1`
  @media (max-width: 767px) {
    font-size: medium;
  }
`;

export const ProductText = styled.p`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ProductDescription = styled.p`
  @media (max-width: 767px) {
    font-size: small;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PriceAddContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const Price = styled.h3`
  @media (max-width: 767px) {
    font-size: small;
  }
`;

export const AddToCartBtn = styled.button`
  width: 200px;
  align-items: center;
  border-radius: 5px;
  background: #fdca40;
  border: none;
  color: black;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 30%;
  }
`;
