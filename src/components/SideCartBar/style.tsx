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
`;

export const SidebarContent = styled.div`
  padding: 20px;
`;
export const CheckOutButton = styled.button`
  background-color: #fcd40a;
  color: black;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
export const CloseButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
