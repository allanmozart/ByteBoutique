import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 80%;
  height: 45%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    height: 40%;
    margin-top: 0;
  }
`;

export const ShopNowButton = styled(Link)`
  display: inline-flex;
  padding: 13px 49px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
  text-decoration: none;
  border-radius: 5px;
  background: #fdca40;
  border: none;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: 20%;
  }
`;

export const DiscoverMoreButton = styled(Link)`
  display: inline-flex;
  padding: 13px 49px;
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
  max-height: 350px;
  @media (max-width: 767px) {
    width: 50%;
  }
`;
