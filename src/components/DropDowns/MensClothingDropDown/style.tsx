import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: black;
  font-size: 15px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    text-decoration: underline;
  }
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  background-color: #fefefe;
  font-size: 13px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #fdca40;
  }
`;
