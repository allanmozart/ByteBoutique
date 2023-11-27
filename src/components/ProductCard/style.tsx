import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
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
  width: 200px;
  height: 400px;
  margin: 10px 0;
  padding: 5px;
`;

export const CardTitle = styled.h4`
  width: 100%;
`;

export const ImgCard = styled.img`
  width: 70%;
  height: 70%;
  object-fit: scale-down;
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
