import MensClothingDropdown from '../DropDowns/MensClothingDropDown';
import WomensClothingDropdown from '../DropDowns/WomensClothingDropDown';
import JeweleryDropdown from '../DropDowns/JeweleryDropDown';
import ElectronicsDropdown from '../DropDowns/EletronicsDropDown';
import ModalSignIn from '../ModalSignIn';
import {
  CartLogo,
  CategoriesButton,
  CategoriesContainer,
  RightSideContainer,
  StyledLogo,
  StyledNavBar,
} from './style';

export default function NavBar() {
  return (
    <>
      <StyledNavBar>
        <StyledLogo href='/' />
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
          <ModalSignIn />
          <CartLogo />
        </RightSideContainer>
      </StyledNavBar>
    </>
  );
}
