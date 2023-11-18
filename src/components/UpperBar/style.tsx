import styled, { keyframes } from 'styled-components';

const invertColors = keyframes`
    0% {
      filter: invert(0%);
    }
    100% {
      filter: invert(100%);
    }
    `;

const StyledBar = styled.div`
  background-color: black;
  color: #e6e8e6;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${invertColors} 0.5s infinite ease-in-out;
`;

export default function UpperBar() {
  return <StyledBar>FREE SHIPPING!!! BYTE JÁ ENCHER O CARRINHO!!!</StyledBar>;
}
