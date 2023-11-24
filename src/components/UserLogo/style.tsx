import styled from 'styled-components';

export const UserLogo = styled.image`
  background-position: 50% 50%;
  width: 20%;
  height: 80%;
  background-image: url('src/assets/userlogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;

  &:hover {
    cursor: pointer;
  }
`;
