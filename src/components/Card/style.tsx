import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 200px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid orange;
`;

export const CardTitle = styled.h3`
  width: 100%;
`;

export const ImgCard = styled.img``;

export const Price = styled.div``;

export const AddToCart = styled.button`
  width: 50%;
`;
