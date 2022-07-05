import React from 'react';
import styled from 'styled-components';
import { VscSmiley } from 'react-icons/vsc';

const CommentForm = (props) => {
  const { comment } = props;

  return (
    <CommentFormContainer>
      {comment.map((cmt, index) => (
        <CommentListContainer key={index}>
          {cmt.userName}
          <CommentSpan>{cmt.text}</CommentSpan>
        </CommentListContainer>
      ))}
     
      <CommentInputForm>
        <VscSmiley size="27" />
        <Input type="input" placeholder="댓글 달기..." />
        <Button type="submit">게시</Button>
      </CommentInputForm>
    </CommentFormContainer>
  );
};

export default CommentForm;

const CommentFormContainer = styled.ul`
  padding: 5px 12px;
  margin-bottom: 5px;
  line-height: 25px;
`;

const CommentListContainer = styled.li`
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
`;

export const CommentSpan = styled.span`
  font-weight: 350;
  margin-left: 8px;
  word-break: break-all;
  text-align: left;
`;

export const CommentInputForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-top: 1.5px solid #efefef;
`;

export const Input = styled.input`
  background-color: transparent;
  color: #262626;
  display: flex;
  flex: 1;
  padding: 12px;
  border: none;
`;

export const Button = styled.button`
  color: #bfdffd;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  &.onComment {
    cursor: pointer;
    color: #0095f6;
  }
`;
