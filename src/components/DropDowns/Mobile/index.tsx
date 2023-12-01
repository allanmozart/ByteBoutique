import { useEffect, useState } from 'react';
import { getAllCategories } from '../../../api/API_PATH';
import { DropDownBtn, MenuLogo, MobileDropDownContainer } from './style';
import { DropdownContent, DropdownItem } from '../MensClothingDropDown/style';

interface Product {
  id: number;
  title: string;
}
const MobileDropDown: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setItems(await getAllCategories());
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <MobileDropDownContainer>
      <DropDownBtn onClick={toggleDropdown}>
        <MenuLogo />
      </DropDownBtn>
      <DropdownContent isVisible={isDropdownVisible}>
        {items.map((item) => (
          <DropdownItem href={`/${item}`}>{item}</DropdownItem>
        ))}
      </DropdownContent>
    </MobileDropDownContainer>
  );
};

export default MobileDropDown;
