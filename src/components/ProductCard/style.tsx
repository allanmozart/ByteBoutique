import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  gap: 10px;
  overflow-y: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 400px;
  margin: 10px 0;
  padding: 5px;
`;

export const ImgCard = styled.img`
  height: 30vh;
  max-width: 80%;
  object-fit: contain;
  margin: auto;

  &:hover {
    cursor: pointer;
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
  height: 8%;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
