import React from 'react';
import styled from 'styled-components';
import useInput from '../../utils/hooks/useInput';
import { emailValidate, passwordValidate } from '../../utils/Validator.js';

const Input = (props) => {
  const { setFormIsValid } = props;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidate);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidate);

  let formIsValid = false;
  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
    setFormIsValid(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredPasswordIsValid) return;

    resetEmailInput();
    resetPasswordInput();
  };

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const passwordInputClasses = passwordInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <InputContainer onSubmit={formSubmissionHandler}>
      <InputCommon
        placeholder="Email"
        type="email"
        id="email"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={enteredEmail}
      />
      {emailInputHasError && (
        <p className="error-text">이메일 형식이 틀렸습니다.</p>
      )}
      <InputCommon
        placeholder="Password"
        type="text"
        id="password"
        onChange={passwordChangedHandler}
        onBlur={passwordBlurHandler}
        value={enteredPassword}
      />
      {passwordInputHasError && (
        <p className="error-text">
          잘못된 비밀번호입니다. ( * 최소 8자, 하나 이상의 대문자, 하나의 숫자
          및 하나의 특수 문자)
        </p>
      )}
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
