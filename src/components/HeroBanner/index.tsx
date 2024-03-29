import { useEffect, useState } from "react";
import {
  DiscoverMoreButton,
  HeroContainer,
  HeroImage,
  ShopNowButton,
} from "./style";
import { getProduct } from "../../api/API_PATH";

export default function HeroBanner() {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const imageResponse = await getProduct("14");
      setImageURL(imageResponse.image);
    };
    fetchImages();
  }, []);

  return (
    <HeroContainer>
      <div>
        <h1 style={{ margin: "20px" }}>Buy the best in tech</h1>
        <ShopNowButton to="/electronics">Shop Now</ShopNowButton>
        <DiscoverMoreButton to="/electronics">Discover More</DiscoverMoreButton>
      </div>
      <HeroImage src={imageURL}/>
    </HeroContainer>
  );
}
