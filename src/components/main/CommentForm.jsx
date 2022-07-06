import React, { useState } from 'react';
import styled from 'styled-components';
import { VscSmiley } from 'react-icons/vsc';
import useInput from '../../utils/hooks/useInput';
import { whitespaceValidate } from '../../utils/validator.js';
import { uploadComment } from '../../utils/uploadComment';
import { useRef } from 'react';

const CommentForm = (props) => {
  const inputRef = useRef(null);

  const { comment, feedId } = props;
  const [commentArray, setCommentArray] = useState(comment);

  const {
    isValid: enteredCommentIsValid,
    valueChangeHandler: commentChangedHandler,
    inputBlurHandler: commentBlurHandler,
    reset: resetCommentInput,
    getEnteredValue,
  } = useInput(whitespaceValidate);

  let formIsValid = false;
  if (enteredCommentIsValid) formIsValid = true;

  const uploadButtonClickHandler = (event) => {
    event.preventDefault();
    const newComment = {
      userName: window.localStorage.getItem('userEmail'),
      text: getEnteredValue(),
    };
    uploadComment(newComment, feedId, () => {
      setCommentArray((comment) => [...comment, newComment]);
    });
    resetCommentInput();
    inputRef.current.value = '';
  };

  return (
    <CommentFormContainer commentArray={commentArray}>
      {commentArray.map((cmt, index) => (
        <CommentListContainer key={new Date() + index}>
          {cmt.userName}
          <CommentSpan>{cmt.text}</CommentSpan>
        </CommentListContainer>
      ))}

      <CommentInputForm onSubmit={uploadButtonClickHandler}>
        <VscSmiley size="27" />
        <Input
          ref={inputRef}
          type="input"
          placeholder="댓글 달기..."
          onChange={commentChangedHandler}
          onBlur={commentBlurHandler}
        />
        <Button
          type="submit"
          disabled={!formIsValid}
          onClick={uploadButtonClickHandler}
        >
          게시
        </Button>
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
  cursor: pointer;
  &.onComment {
    cursor: pointer;
    color: #0095f6;
  }
`;
