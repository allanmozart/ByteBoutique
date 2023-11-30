import styled from 'styled-components';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-400px')};
  width: 400px;
  height: 90%;
  background-color: #e6e8e6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: right 1s ease-in-out;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SidebarContent = styled.div`
  padding: 20px;
`;

export const CartItems = styled.div``;

export const RemoveBtn = styled.button`
  display: flex;
  background-color: gray;
  align-items: center;
  justify-content: center;
  width: 5px;
  height: 5px;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  border-radius: 5px;
  box-shadow: 2px 2px;

  &:hover {
    color: black;
    text-shadow: -0.25px -0.25px 0 black, 0.25px 0.25px black;
  }
`;

export const CloseButton = styled.button`
  width: 15%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export const Total = styled.div`
  background-color: #fcd40a;
  color: black;
  padding: 10px;
  border: none;
`;

export const ResetBtn = styled.button`
  color: black;
  padding: 15px;
  border: none;
  cursor: pointer;
  width: 20%;
  border-radius: 5px;

  &:hover {
    color: white;
    text-shadow: -0.25px -0.25px 0 black, 0.25px 0.25px black;
  }
`;
