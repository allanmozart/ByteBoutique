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
          <CategoriesButton>Men's Clothing</CategoriesButton>
          <CategoriesButton>Women's Clothing</CategoriesButton>
          <CategoriesButton>Jewelry</CategoriesButton>
          <CategoriesButton>Electronics</CategoriesButton>
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
