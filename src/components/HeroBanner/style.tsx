import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 80%;
  height: 45%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  /*
   border: 1px solid blue;
  width: 80%;
  height: 45%;
  margin: auto;
  */
`;

export const ShopNowButton = styled(Link)`
  display: inline-flex;
  padding: 13px 49px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
  text-decoration: none;

  background: #fdca40;
  border: none;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

export const DiscoverMoreButton = styled(Link)`
  display: inline-flex;
  padding: 13px 49px;
  /* margin-left: 20px; */
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const HeroImage = styled.img`
  max-height: 400px;
`;
