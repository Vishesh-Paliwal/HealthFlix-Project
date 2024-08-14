// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import { addComment, deleteComment, editComment, addReply, deleteReply, editReply } from './actions';

function App() {
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  const handleAddComment = (name, text) => {
    dispatch(addComment(name, text));
  };

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  const handleEditComment = (id, text) => {
    dispatch(editComment(id, text));
  };

  const handleAddReply = (commentId, name, text) => {
    dispatch(addReply(commentId, name, text));
  };

  const handleDeleteReply = (commentId, replyId) => {
    dispatch(deleteReply(commentId, replyId));
  };

  const handleEditReply = (commentId, replyId, text) => {
    dispatch(editReply(commentId, replyId, text));
  };

  return (
    <div className="App">
      <h1>Comments Section</h1>
      <CommentForm addComment={handleAddComment} />
      <CommentList
        comments={comments}
        deleteComment={handleDeleteComment}
        editComment={handleEditComment}
        addReply={handleAddReply}
        deleteReply={handleDeleteReply}
        editReply={handleEditReply}
      />
    </div>
  );
}

export default App;
