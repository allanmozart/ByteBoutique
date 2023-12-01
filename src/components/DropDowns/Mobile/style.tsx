import styled from 'styled-components';

export const MobileDropDownContainer = styled.div`
  display: none;

  @media (max-width: 767px) {
    position: relative;
    display: inline-block;
  }
`;

export const DropDownBtn = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: black;
  font-size: 15px;
`;

export const MenuLogo = styled.image`
  background-image: url('/src/assets/menuLogo.png');
  background-position: 50% 50%;
  width: auto;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
`;
