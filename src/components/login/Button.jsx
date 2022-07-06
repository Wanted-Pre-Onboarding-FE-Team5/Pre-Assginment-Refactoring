import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

const Button = (props) => {
  const { formIsValid, onClick } = props;

  return (
    <ButtonContainer>
      <LoginButton onClick={onClick} disabled={!formIsValid}>
        Login
      </LoginButton>
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
  color: var(--color-gray);

  background-color: ${(props) =>
    props.disabled
      ? css`
    var(--color-blue);
  `
      : css`
    var(--color-dark-blue)
  `};
`;
