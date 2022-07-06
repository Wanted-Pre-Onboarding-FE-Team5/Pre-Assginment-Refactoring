import React, { useState } from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import { FiHeart, FiMessageCircle, FiBookmark } from 'react-icons/fi';
import { BiPaperPlane } from 'react-icons/bi';
import CommentForm from './CommentForm';

const Feed = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // isLoading false 시 스타일 변경 필요

  const { userName, profileImgUrl, postImgUrl, postText, like, comment } =
    props.feedData;

  return (
    <FeedContainer isLoaded={isLoaded}>
      <ProfileContainer>
        <UserProfile src={profileImgUrl} alt="profileImg" />
        <UserName>{userName}</UserName>
        <BsThreeDots size="20" />
      </ProfileContainer>
      <PostContainer>
        <PostImageContainer>
          <PostImg
            src={postImgUrl}
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
        </PostImageContainer>
        <PostContentContainer>
          <ReactionBox>
            <LikeCmtMsgIcon>
              <FiHeart size="24" />
              <FiMessageCircle size="25" />
              <BiPaperPlane size="26" />
            </LikeCmtMsgIcon>
            <BookmarkIcon>
              <FiBookmark size="27" />
            </BookmarkIcon>
          </ReactionBox>
          <LikeCount>좋아요 {like}개</LikeCount>
        </PostContentContainer>
      </PostContainer>
      <CommentForm comment={comment} />
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  width: 100%;
  max-width: 550px;
  min-width: 470px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 8px;
  background-color: #ffffff;
  visibility: ${(props) => (props.isLoaded ? 'visible' : 'hidden')};

  @media (max-width: 499px) {
    min-width: 0px;
    width: 95%;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const UserProfile = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 17px;
  background-color: #d3d3d3;
`;

const UserName = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  padding: 15px;
  font-size: 15px;
  font-weight: 800;
  margin-top: -5px;
`;

const PostContainer = styled.div`
  /* This is PostContainer */
`;

const PostImageContainer = styled.div`
  /* This is PostImageContainer */
`;

const PostImg = styled.img`
  width: 100%;
`;

const PostContentContainer = styled.div`
  /* This is PostContentContainer */
`;

const ReactionBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const LikeCmtMsgIcon = styled.div`
  width: 6rem;
  display: flex;
  justify-content: space-between;
`;

const BookmarkIcon = styled.div`
  /* This is BookmarkIcon */
`;

const LikeCount = styled.div`
  padding: 10px;
  font-size: 14.5px;
  font-weight: 600;
  display: flex;
`;
