import React, { useCallback } from 'react';
import styled from 'styled-components';

const Button = () => {
  const buttonClickHandler = useCallback(() => {}, []);
  return (
    <ButtonContainer>
      <LoginButton onClick={buttonClickHandler}>Login</LoginButton>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;
const LoginButton = styled.button`
  padding: 0.8rem 0.5rem;
  width: 100%;
  height: 100%;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  background-color: var(--color-blue);
  color: var(--color-gray);
`;
