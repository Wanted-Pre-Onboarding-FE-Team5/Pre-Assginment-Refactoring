import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <InputContainer>
      <InputCommon placeholder="Email" />
      <InputCommon placeholder="Password" />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputCommon = styled.input`
  width: 100%;
  padding: 0.8rem 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 3px;

`;
// const InputEmail = styled(InputCommon)``;
