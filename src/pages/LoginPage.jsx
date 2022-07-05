import React from 'react';
import Login from '../components/login/Login';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Login />
    </LoginPageContainer>
  );
};

export default LoginPage;

const LoginPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray);
`;
