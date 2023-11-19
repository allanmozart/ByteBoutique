import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 80%;
  margin: auto;
  /* border: 1px solid red; */
`;

export const ProductContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  gap: 20px;
  margin: auto;
`;

export const ProductBox = styled.div`
  display: flex;
  width: 15vw;
  height: 20vh;
  overflow: hidden;
  border: none;
  cursor: pointer;
  margin: auto;
`;

export const ProductImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: scale-down;
  margin: auto;
`;
