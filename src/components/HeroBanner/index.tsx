import { useEffect, useState } from "react";
import { DiscoverMoreButton, HeroContainer, HeroImage, ShopNowButton } from "./style";
import { getProductImage } from "../../api";

export default function HeroBanner() {
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        const fetchImages = async () => {
           const imageResponse = await getProductImage("14")
           setImageURL(imageResponse);
        }
        fetchImages();
    }, [])
    
    return (
      <HeroContainer>
        <h1 style={{margin: '20px'}}>Buy the best in tech</h1>
        <ShopNowButton>Shop Now</ShopNowButton>
        <DiscoverMoreButton>Discover More</DiscoverMoreButton>
        <HeroImage src={imageURL} style={{maxHeight: "100px",}}></HeroImage>
      </HeroContainer>
    );
  }