import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: auto;
`;

const ProductContainer = styled.div`
  display: flex;
  overflow-x: hidden;
`;

const ProductBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
`;

interface Product {
  id: number;
  title: string;
  image: string;
}

function Carousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          'https://fakestoreapi.com/products'
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const renderProducts = () => {
    const startIndex = currentIndex % products.length;
    return (
      <ProductContainer>
        {Array.from({ length: 5 }).map((_, index) => {
          const productIndex = (startIndex + index) % products.length;
          return (
            <ProductBox key={products[productIndex].id}>
              <ProductImage
                src={products[productIndex].image}
                alt={products[productIndex].title}
                visible={index < 5}
              />
            </ProductBox>
          );
        })}
      </ProductContainer>
    );
  };

  return (
    <CarouselContainer>
      <button onClick={prevSlide}>Previous</button>
      {products.length > 0 && renderProducts()}
      <button onClick={nextSlide}>Next</button>
    </CarouselContainer>
  );
}

export default Carousel;
