import React, { useCallback, useState } from 'react';
import Feed from './Feed';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getFeeds } from '../../utils/getFeeds';

const FeedList = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    getFeeds().then((res) => {
      setFeedData(res);
    });
  }, []);

  return (
    <FeedListContainer>
      {feedData.map((data, index) => (
        <Feed key={index} feedData={data} />
      ))}
    </FeedListContainer>
  );
};

export default FeedList;

const FeedListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;
