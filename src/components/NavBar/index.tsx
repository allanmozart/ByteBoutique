
import UpperBar from "../UpperBar/style";

import {
  StyledNavBar,
  StyledLogo,
  CategoriesContainer,
  CategoriesButton,
  RightSideContainer,
  ProductSearch,
  UserLogo,
  CartLogo,
} from "./style";

export default function NavBar() {
  return (
    <>
      <UpperBar />
      <StyledNavBar>
          <StyledLogo />
        <CategoriesContainer>
          <CategoriesButton to="/electronics">Men's Clothing</CategoriesButton>
          <CategoriesButton to="/electronics">Women's Clothing</CategoriesButton>
          <CategoriesButton to="/electronics">Jewelry</CategoriesButton>
          <CategoriesButton to="/electronics">Electronics</CategoriesButton>
        </CategoriesContainer>
        <RightSideContainer>
          <ProductSearch placeholder="Search..." />
          <UserLogo />
          <CartLogo />
        </RightSideContainer>
      </StyledNavBar>
    </>
  );
}
