import axios from 'axios';
import React from 'react';

export const uploadComment = async (newComment, id, callback) => {
  try {
    const result = await axios.get(`http://localhost:8080/feeds/${id}`);
    const body = { ...result.data };
    body.comment.push(newComment);
    await axios.put(`http://localhost:8080/feeds/${id}`, body);

    callback();
  } catch {
    console.log('error upload comment');
  }
};
