import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../../api/API_PATH';
import {
  ProductPageDisplay,
  ProductImage,
  ProductImgContainer,
  ProductDescription,
  AddToCartBtn,
  Rating,
  ProductTitle,
  ProductDescriptionContainer,
  Price,
  PriceAddContainer,
  ProductText,
} from './style';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  name: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetailsDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetails | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(await getProduct(productId ? productId : ''));
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      {product && (
        <ProductPageDisplay>
          <ProductImgContainer>
            <ProductImage
              src={product.image}
              alt={product.title}
            ></ProductImage>
          </ProductImgContainer>
          <ProductDescriptionContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductText>{product.description}</ProductText>
            <Rating>
              <ProductDescription>
                Rating: {product.rating.rate}/5
              </ProductDescription>
              <span className='material-symbols-outlined'>star_rate_half</span>
            </Rating>
            <ProductDescription>
              {product.rating.count} Reviews
            </ProductDescription>
            <PriceAddContainer>
              <Price>{product.price}€</Price>
              <AddToCartBtn onClick={() => dispatch(addToCart(product))}>
                <b>Add to Cart</b>
              </AddToCartBtn>
            </PriceAddContainer>
          </ProductDescriptionContainer>
        </ProductPageDisplay>
      )}
    </>
  );
};

export default ProductDetailsDisplay;
