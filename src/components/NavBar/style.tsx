import styled from 'styled-components';

export const StyledNavBar = styled.div`
  display: flex;
  background-color: #e6e8e6;
  width: 100vw;
  height: 10vh;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-around;
    flex-direction: row;
    padding: 5px;
  }
`;

export const StyledLogo = styled.a`
  background-position: 50% 50%;
  width: 15%;
  height: 70%;
  background-image: url('/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: 25%;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 40%;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CategoriesButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: black;
  font-size: 15px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  height: 80%;
  width: 5%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #e6e8e6;
`;

export const CartLogo = styled.image`
  background-position: 50% 50%;
  width: auto;
  background-image: url('/src/assets/cartlogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    margin-right: 30px;
  }
`;
