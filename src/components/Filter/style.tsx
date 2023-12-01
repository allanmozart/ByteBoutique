import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  width: 10%;
  @media (max-width: 767px) {
    width: 15%;
    font-size: small;
  }
`;

export const Title = styled.h4`
  background-color: #fcd40a;
  text-align: center;
  color: black;
  width: 60%;
  border: 1px solid black;
  border-radius: 5px;
`;
