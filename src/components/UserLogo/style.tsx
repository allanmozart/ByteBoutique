import styled from 'styled-components';

export const UserLogo = styled.image`
  background-position: 50% 50%;
  width: 30%;
  height: 90%;
  background-image: url('src/assets/userlogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;

  &:hover {
    cursor: pointer;
  }
`;
