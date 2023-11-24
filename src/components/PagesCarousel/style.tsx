import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`;

export const CarouselImg = styled.img`
  width: 40%;
  height: 40%;
  object-fit: scale-down;
  margin: auto;
  overflow-y: auto;

  &:hover {
    border: 1px solid #e6e8e6;
  }
`;
