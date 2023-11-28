import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from '../MensClothingDropDown/style';

interface Product {
  id: number;
  title: string;
}

const JeweleryDropdown: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          'https://fakestoreapi.com/products/category/jewelery'
        );
        setItems(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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
