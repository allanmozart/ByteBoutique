import React, { useState, useEffect } from 'react';
import {
  Button,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from './style';
import { getCategoryProducts } from '../../../api/API_PATH';

interface Product {
  id: number;
  title: string;
}

const MensClothingDropdown: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const mensClothingData = await getCategoryProducts("men's clothing");
      setItems(mensClothingData.slice(0, 4));
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <DropdownContainer>
      <Button onClick={toggleDropdown}>Men's Clothing</Button>
      <DropdownContent isVisible={isDropdownVisible}>
        {items.map((item) => (
          <DropdownItem key={item.id} href={`/product/${item.id}`}>
            {item.title}
          </DropdownItem>
        ))}
        <DropdownItem href="/men's-clothing">More...</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default MensClothingDropdown;
