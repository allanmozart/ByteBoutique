import styled from 'styled-components';

const StyledBar = styled.div`
  background-color: black;
  color: #e6e8e6;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

function UpperBar() {
  return <StyledBar>Free Shipping!!! Byte já encher o carrinho!!!</StyledBar>;
}

export default UpperBar;
