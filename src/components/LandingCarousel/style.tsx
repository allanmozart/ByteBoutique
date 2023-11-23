import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 80%;
  margin: auto;
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
    border: 1px solid #e6e8e6;
  }

  .details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    background: rgba(255, 255, 255, 0.9);
    padding: 8px;
    border-radius: 4px;
    text-align: center;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
  }

  &:hover .details {
    width: 20%;
    background-color: #e6e8e6;
    color: black;
    opacity: 1;
  }
`;

export const ProductImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: scale-down;
  margin: auto;
`;

export const BlackFriday = styled.p`
  font-size: 0.8rem;
  margin: 4px 0;
`;
