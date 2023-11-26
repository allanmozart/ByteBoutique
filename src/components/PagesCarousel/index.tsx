import axios from 'axios';
import { CarouselContainer, CarouselImg } from './style';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

function PagesCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products/category/men's clothing"
        );

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <CarouselContainer>
      {products.map((product) => (
        <CarouselImg src={product.image} alt={product.title}></CarouselImg>
      ))}
    </CarouselContainer>
  );
}

export default PagesCarousel;
