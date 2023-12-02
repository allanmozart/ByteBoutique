import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100vh;
  gap: 10px;
  overflow: auto;

  @media (max-width: 767px) {
    margin-top: 0;
    width: 100vw;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100vh;
  margin: auto;
  padding: 5px;

  @media (max-width: 767px) {
    height: 20vh;
    width: 80%;
    margin-top: 0px;
    margin-bottom: 20px;
    justify-content: flex-start;
  }
`;

export const ImgCard = styled.img`
  height: 20vh;
  max-width: 80%;
  object-fit: contain;
  margin: auto;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    height: 20vh;
    margin-top: 0px;
  }
`;

export const Price = styled.h5``;

export const AddToCart = styled.button`
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #fdca40;
  border: none;
  color: black;
  width: 50%;
  height: 10%;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: auto;
  }
`;
