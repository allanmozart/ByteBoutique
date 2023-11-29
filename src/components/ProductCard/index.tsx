import { useEffect, useState } from 'react';
import { CardsContainer, AddToCart, Card, ImgCard, Price } from './style';
import { getCategoryProducts } from '../../api/API_PATH';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

function ProductCard() {
  const dispatch = useDispatch();
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
        <Link to={`/product/${item.id}`}>
          <Card key={item.id}>
            <ImgCard src={item.image} alt={item.image} />
            <Price>{item.price}€</Price>
            <AddToCart
              onClick={() =>
                dispatch(
                  addToCart({
                    id: `${item.id}`,
                    name: `${item.title}`,
                    price: `${item.price}`,
                  })
                )
              }
            >
              Add To Cart
            </AddToCart>
          </Card>
        </Link>
      ))}
    </CardsContainer>
  );
}

export default ProductCard;
