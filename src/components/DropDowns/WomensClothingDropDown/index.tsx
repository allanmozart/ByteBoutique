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

const WomensClothingDropdown: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const womensClothingData = await getCategoryProducts("women's clothing");
      setItems(womensClothingData.slice(0, 4));
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <DropdownContainer>
      <Button onClick={toggleDropdown}>Women's Clothing</Button>
      <DropdownContent isVisible={isDropdownVisible}>
        {items.map((item) => (
          <DropdownItem key={item.id} href={`/product/${item.id}`}>
            {item.title}
          </DropdownItem>
        ))}
        <DropdownItem href="/women's-clothing">More...</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default WomensClothingDropdown;
