import styled from 'styled-components';
import UpperBar from '../UpperBar/style';

const StyledNavBar = styled.div`
  display: flex;
  background-color: #e6e8e6;
  width: 100vw;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const StyledLogo = styled.div`
  background-position: 50% 50%;
  width: 15%;
  height: 70%;
  background-image: url('src/assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 10px;
  /* box-shadow: 3px 3px rgba(0, 0, 0, 0.2); */

  &:hover {
    cursor: pointer;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoriesButton = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 18px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    font-size: 19px;
  }
`;

const RightSideContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ProductSearch = styled.input`
  width: 200px;
  height: 20px;
  background: white;
  border: 1px solid black;
  color: black;
`;

const UserLogo = styled.image`
  background-position: 50% 50%;
  width: 20%;
  height: 80%;
  background-image: url('src/assets/userlogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

const CartLogo = styled.image`
  background-position: 50% 50%;
  width: 20%;
  height: 80%;
  background-image: url('src/assets/cartlogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;
  background-color: #e6e8e6;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export default function NavBar() {
  return (
    <>
      <UpperBar />
      <StyledNavBar>
        <StyledLogo />
        <CategoriesContainer>
          <CategoriesButton>Men's Clothing</CategoriesButton>
          <CategoriesButton>Women's Clothing</CategoriesButton>
          <CategoriesButton>Jewelry</CategoriesButton>
          <CategoriesButton>Electronics</CategoriesButton>
        </CategoriesContainer>
        <RightSideContainer>
          <ProductSearch placeholder='Search...' />
          <UserLogo />
          <CartLogo />
        </RightSideContainer>
      </StyledNavBar>
    </>
  );
}
