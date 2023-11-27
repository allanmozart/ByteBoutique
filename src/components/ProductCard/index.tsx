import { useEffect, useState } from 'react';
import { CardsContainer, AddToCart, Card, ImgCard, Price } from './style';
import { getCategoryProducts } from '../../api/API_PATH';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

function ProductCard() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const name = location.pathname.split('/').filter(Boolean).pop();
    const fetchData = async () => {
      setItems(await getCategoryProducts(name.split('-').join(' ')));
    };

    fetchData();
  }, []);

  return (
    <CardsContainer>
      {items.map((item) => (
        <Card key={item.id}>
          {/* <CardTitle>{item.title}</CardTitle> */}
          <ImgCard src={item.image} alt={item.image} />
          <Price>{item.price}€</Price>
          <AddToCart>Add To Cart</AddToCart>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default ProductCard;
