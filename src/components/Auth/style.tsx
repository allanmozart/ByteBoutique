import styled from 'styled-components';

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  input {
    color: black;
    width: 100%;
    padding: 8px;
    border: 1px solid #fefefe;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const SignInBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const GoogleSignInBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LogoutBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

export const GoogleSignInContainer = styled.div`
  width: 100%;
`;

export const LogoutContainer = styled.div`
  width: 100%;
`;
