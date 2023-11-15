import styled from 'styled-components';

const StyledNavBar = styled.div`
  display: flex;
  background-color: #e6e8e6;
  height: 10vh;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  background-position: 50% 50%;
  width: 15%;
  height: 60%;
  background-image: url('src/assets/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
`;

const CategoriesContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const CategoriesButton = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  /* font-size: 18px; */
`;

const RightSideContainer = styled.div`
  display: flex;
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
  background-image: url('public/userlogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 10px;
`;

const CartLogo = styled.image`
  background-position: 50% 50%;
  width: 20%;
  height: 80%;
  background-image: url('public/cartlogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 10px;
  background-color: #e6e8e6;
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <StyledLogo />
      <CategoriesContainer>
        <CategoriesButton>Men's Clothing</CategoriesButton>
        <CategoriesButton>Women's Clothing</CategoriesButton>
        <CategoriesButton>Jewelry</CategoriesButton>
        <CategoriesButton>Electronics</CategoriesButton>
      </CategoriesContainer>
      <RightSideContainer>
        <ProductSearch />
        <UserLogo />
        <CartLogo />
      </RightSideContainer>
    </StyledNavBar>
  );
}
