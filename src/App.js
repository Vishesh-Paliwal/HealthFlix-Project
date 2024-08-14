// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import { addComment, deleteComment, editComment, addReply, deleteReply, editReply, setSortOrder } from './actions';

function App() {
  const comments = useSelector(state => state.comments);
  const sortOrder = useSelector(state => state.sortOrder);
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

  const handleSortChange = (e) => {
    dispatch(setSortOrder(e.target.value));
  };

  return (
    <div className="App">
      <h1>Comments Section</h1>
      <CommentForm addComment={handleAddComment} />

      <div className="sort-options">
        <label>Sort by:</label>
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

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
