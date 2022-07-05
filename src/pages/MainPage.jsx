import React from 'react';
import styled from 'styled-components';
import Main from '../components/main/Main';

const MainPage = () => {
  return (
    <MainContainer>
      <Main />
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  width: 100%;
`;
