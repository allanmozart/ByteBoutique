import styled, { keyframes } from 'styled-components';

const invertColors = keyframes`
    0% {
      background-color: black;
      color: white;
    }
    25% {
      background-color: white;
      color: black;
    }
    50%{
      background-color: black;
      color: white;
      
    }
    75%{
      background-color: white;
      color: black;
    }
    100% {
      background-color: red;
      color: black;
    }
    `;

const StyledBar = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${invertColors} 0.8s infinite;
`;

export default function UpperBar() {
  return <StyledBar>FREE SHIPPING!!! BYTE JÁ ENCHER O CARRINHO!!!</StyledBar>;
}
