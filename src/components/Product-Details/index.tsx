import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { getProduct } from "../../api/API_PATH";
import { ProductPageDisplay, ProductImage, ProductImgContainer, ProductDescription, AddToCartBtn } from "./style";

interface ProductDetails {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductDetailsDisplay() {
  // const {productId} = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetails | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(await getProduct("18"));
      console.log("product", product);
    };
    fetchProduct();
  }, []);

  return (
    <>
      {product && (
        <ProductPageDisplay>
          <ProductImgContainer>
            <ProductImage src={product.image}></ProductImage>
          </ProductImgContainer>
          <ProductDescription>
            <h1>{product.title}</h1>
            <h3>Product Price: {product.price}€</h3>
            <p>Product Description: {product.description}</p>
            <AddToCartBtn to="/cart">Add to Cart</AddToCartBtn>
          </ProductDescription>
        </ProductPageDisplay>
      )}
    </>
  );
}

export default ProductDetailsDisplay;
