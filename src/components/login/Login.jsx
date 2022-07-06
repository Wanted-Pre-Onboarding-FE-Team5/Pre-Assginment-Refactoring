import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Logo from '../common/Logo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredUserInfo, setEnteredUserInfo] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const checkLogin = () => {
    const result = userInfo.filter(
      (user) => user.email === enteredUserInfo.email
    );
    if (result.length && result[0].password === enteredUserInfo.password) {
      return true;
    } else {
      alert('회원 정보를 다시 확인해주세요.');
    }
  };

  const buttonClickHandler = (event) => {
    event.preventDefault();
    const valid = checkLogin();

    if (valid) {
      window.localStorage.setItem('userEmail', enteredUserInfo.email);
      navigate('/main');
    }
  };

  return (
    <LoginContainer>
      <Logo />
      <LoginForm>
        <Input
          setFormIsValid={setFormIsValid}
          setEnteredUserInfo={setEnteredUserInfo}
        />
        <Button formIsValid={formIsValid} onClick={buttonClickHandler} />
      </LoginForm>
    </LoginContainer>
  );
};
export default Login;

const userInfo = [
  {
    email: 'qhtjd2131@nate.com',
    password: 'Abcd1234!',
  },
];

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
