import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../api/API_PATH";

interface ProductDetails {
  id: string;
  title: string;
}

function ProductDetailsDisplay() {
  const {productId} = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetails | null>(null);

  useEffect(() => {
      const fetchProduct = async () => {
          setProduct(await getProduct("1"));
          console.log("product", product)
      };
      fetchProduct();
    }, [productId]);

  return <>{product && (
    <div>
        <p>{product.title}</p>
    </div>
  )}</>;
}

export default ProductDetailsDisplay;
