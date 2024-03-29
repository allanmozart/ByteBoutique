import styled from 'styled-components';

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0px;
  margin: auto;
  overflow: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    overflow: auto;
  }
`;
