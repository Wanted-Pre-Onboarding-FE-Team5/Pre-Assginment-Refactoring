import React, { useEffect } from 'react';
import GNB from './GNB';
import FeedList from './FeedList';
import styled from 'styled-components';

const Main = () => {
  
  return (
    <MainContainer>
      <GNB />
      <FeedList>Feed</FeedList>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
