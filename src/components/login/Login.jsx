import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Logo from '../common/Logo';

const Login = () => {
  return (
    <LoginContainer>
      <Logo />
      <LoginForm>
        <Input />
        <Button />
      </LoginForm>
    </LoginContainer>
  );
};
export default Login;

const LoginContainer = styled.div`
  border: 1px solid var(--color-border);
  background-color: var(--color-white);
  width: 450px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
`;

const LoginForm = styled.form`
  width: 100%;
  padding: 0 3rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
