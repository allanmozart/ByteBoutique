import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CarouselContainer,
  ProductContainer,
  ProductBox,
  ProductImage,
  BlackFriday,
  Route,
} from './style';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
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
              <Route
                href={`/${products[productIndex].category
                  .split(' ')
                  .join('-')}`}
              >
                <ProductImage
                  src={products[productIndex].image}
                  alt={products[productIndex].title}
                />
              </Route>
              <BlackFriday className='details'>
                <h2>{products[productIndex].title}</h2>
                <h5>
                  Before:
                  <s> {(products[productIndex].price * 1.2).toFixed(2)}€</s>
                </h5>
                <h3>NOW ONLY: {products[productIndex].price}€</h3>
              </BlackFriday>
            </ProductBox>
          );
        })}
      </ProductContainer>
    );
  };

  return (
    <CarouselContainer>
      <button
        onClick={prevSlide}
        style={{
          backgroundColor: '#fefefe',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src='src/assets/arrow_left.png' alt='' />
      </button>
      {products.length > 0 && renderProducts()}
      <button
        onClick={nextSlide}
        style={{
          backgroundColor: '#fefefe',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src='src/assets/arrow_right.png' alt='' />
      </button>
    </CarouselContainer>
  );
}

export default Carousel;
