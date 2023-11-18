import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100vw;
  height: auto;
  border: 1px solid black;
  position: absolute;
  top: 50%;

`;

export const ShopNowButton = styled.button`
  display: inline-flex;
  padding: 13px 49px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;

  background: #FDCA40;
  border: none;
  color: black;

  &:hover{
    cursor: pointer;
  }
`;

export const DiscoverMoreButton = styled.button`
  display: inline-flex;
  padding: 13px 49px;
  /* margin-left: 20px; */
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: black;
  &:hover{
    cursor: pointer;
  }
`;

export const HeroImage = styled.img``