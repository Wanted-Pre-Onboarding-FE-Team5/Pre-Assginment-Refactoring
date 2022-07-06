import React from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import useInput from '../../utils/hooks/useInput';
import { emailValidate, passwordValidate } from '../../utils/validator.js';

const Input = (props) => {
  const { setFormIsValid, setEnteredUserInfo } = props;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    
  } = useInput(emailValidate);

  console.log(enteredEmail);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidate);
  let formIsValid = false;

  useEffect(() => {
    if (enteredPasswordIsValid && enteredEmailIsValid) {
      formIsValid = true;
      setFormIsValid(true);
      setEnteredUserInfo({
        email: enteredEmail,
        password: enteredPassword,
      });
    }
  }, [enteredPasswordIsValid, enteredEmailIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <InputContainer onSubmit={formSubmissionHandler}>
      <InputCommon
        placeholder="Email"
        type="email"
        id="email"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        isValid={emailInputHasError}
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
        isValid={passwordInputHasError}
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
  border: 1px solid;
  border-radius: 3px;
  border-color: ${(props) =>
    props.isValid
      ? css`
    var(--color-red)
  `
      : css`
    var(--color-border)
  `};
`;
