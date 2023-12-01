import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 80%;
  margin: auto;

  @media (max-width: 767px) {
    height: 30%;
    margin-top: 0;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  gap: 20px;
  margin: auto;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15vw;
  height: 20vh;
  overflow: hidden;
  border: none;
  cursor: pointer;
  margin: auto;

  &:hover {
    border: 1px solid #fdca40;
  }
`;

export const ProductImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: scale-down;
  margin: auto;
`;

export const Route = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
