import { useEffect, useState } from 'react';
import { CardsContainer, AddToCart, Card, ImgCard, Price } from './style';
import { getCategoryProducts } from '../../api/API_PATH';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

function ProductCard() {
  const { priceUpFilter, priceDownFilter } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const name = location.pathname.split('/').filter(Boolean).pop();
    const fetchData = async () => {
      setItems(await getCategoryProducts(name.split('-').join(' ')));
    };

    fetchData();
  }, []);

  const filterItems = () => {
    let filteredItems = items.slice();

    if (priceUpFilter) {
      filteredItems = filteredItems.sort((a, b) => a.price - b.price);
    }
    if (priceDownFilter) {
      filteredItems = filteredItems.sort((a, b) => b.price - a.price);
    }

    return filteredItems;
  };

  return (
    <CardsContainer>
      {filterItems().map((item) => (
        <Card key={item.id}>
          <a href={`/product/${item.id}`}>
            <ImgCard src={item.image} alt={item.title} />
          </a>

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
      ))}
    </CardsContainer>
  );
}

export default ProductCard;
