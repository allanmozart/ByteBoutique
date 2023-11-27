import MensClothingDropdown from '../DropDowns/MensClothingDropDown';
import WomensClothingDropdown from '../DropDowns/WomensClothingDropDown';
import JeweleryDropdown from '../DropDowns/JeweleryDropDown';
import ElectronicsDropdown from '../DropDowns/ElectronicsDropDown';
import ModalSignIn from '../ModalSignIn';
import {
  CartLogo,
  CategoriesButton,
  CategoriesContainer,
  RightSideContainer,
  StyledLogo,
  StyledNavBar,
} from './style';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/API_PATH';

interface Product {
  id: number;
  title: string;
}

export default function NavBar() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setItems(await getAllCategories());
    };

    fetchData();
  }, []);
  return (
    <>
      <StyledNavBar>
        <StyledLogo href='/' />
        <CategoriesContainer>
          {/* {items.map((item) => ( */}
          <CategoriesButton>
            {/* {items} */}
            <MensClothingDropdown />
            <WomensClothingDropdown />
            <JeweleryDropdown />
            <ElectronicsDropdown />
          </CategoriesButton>
          {/* ))} */}
        </CategoriesContainer>
        <RightSideContainer>
          <ModalSignIn />
          <CartLogo />
        </RightSideContainer>
      </StyledNavBar>
    </>
  );
}
