import styled from 'styled-components';
import UpperBar from '../UpperBar/style';
import MensClothingDropdown from '../DropDowns/MensClothingDropDown';
import WomensClothingDropdown from '../DropDowns/WomensClothingDropDown';
import JeweleryDropdown from '../DropDowns/JeweleryDropDown';
import ElectronicsDropdown from '../DropDowns/EletronicsDropDown';
import ModalSignIn from '../ModalSignIn';

const StyledNavBar = styled.div`
  display: flex;
  background-color: #e6e8e6;
  width: 100vw;
  height: 10vh;
  align-items: center;
  justify-content: space-evenly;
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
  width: 40%;
`;

const CategoriesButton = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 15px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const RightSideContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 20%;
`;

const ProductSearch = styled.input`
  min-width: 50%;
  height: 20px;
  background: white;
  border: 1px solid black;
  color: black;
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

  &:hover {
    cursor: pointer;
  }
`;

export default function NavBar() {
  return (
    <>
      <UpperBar />
      <StyledNavBar>
        <StyledLogo />
        <CategoriesContainer>
          <CategoriesButton>
            <MensClothingDropdown />
          </CategoriesButton>
          <CategoriesButton>
            <WomensClothingDropdown />
          </CategoriesButton>
          <CategoriesButton>
            <JeweleryDropdown />
          </CategoriesButton>
          <CategoriesButton>
            <ElectronicsDropdown />
          </CategoriesButton>
        </CategoriesContainer>
        <RightSideContainer>
          <ProductSearch placeholder='Search...' />
          <ModalSignIn />
          <CartLogo />
        </RightSideContainer>
      </StyledNavBar>
    </>
  );
}
