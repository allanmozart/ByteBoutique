import { useEffect, useState } from 'react';
import Cards from '../Card';
import { CardsContainer } from './style';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
}

function ProductCard() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          'https://fakestoreapi.com/products/category/'
        );
        setItems(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CardsContainer>
      <Cards />
    </CardsContainer>
  );
}

export default ProductCard;
