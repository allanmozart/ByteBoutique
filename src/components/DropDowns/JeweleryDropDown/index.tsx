import React, { useState, useEffect } from 'react';
import {
  Button,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from '../MensClothingDropDown/style';
import { getCategoryProducts } from '../../../api/API_PATH';

interface Product {
  id: number;
  title: string;
}

const JeweleryDropdown: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const jeweleryData = await getCategoryProducts('jewelery');
      setItems(jeweleryData.slice(0, 4));
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <DropdownContainer>
      <Button onClick={toggleDropdown}>Jewelery</Button>
      <DropdownContent isVisible={isDropdownVisible}>
        {items.map((item) => (
          <DropdownItem key={item.id} href={`/product/${item.id}`}>
            {item.title}
          </DropdownItem>
        ))}
        <DropdownItem href='/jewelery'>More...</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default JeweleryDropdown;
