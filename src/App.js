// src/App.js
import React, { useState, useEffect } from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';

function App() {
  const [comments, setComments] = useState([]);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    // Convert date strings back to Date objects
    const convertedComments = savedComments.map(comment => ({
      ...comment,
      date: new Date(comment.date),
      replies: comment.replies.map(reply => ({
        ...reply,
        date: new Date(reply.date),
      }))
    }));
    setComments(convertedComments);
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addComment = (name, text) => {
    const newComment = {
      id: Date.now(),
      name,
      text,
      date: new Date(),
      replies: []
    };
    setComments([...comments, newComment]);
  };

  const deleteComment = (id) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
  };

  const editComment = (id, newText) => {
    const updatedComments = comments.map(comment =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
  };

  const addReply = (commentId, name, text) => {
    const newReply = {
      id: Date.now(),
      name,
      text,
      date: new Date()
    };
    const updatedComments = comments.map(comment =>
      comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment
    );
    setComments(updatedComments);
  };

  const deleteReply = (commentId, replyId) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.filter(reply => reply.id !== replyId);
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const editReply = (commentId, replyId, newText) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map(reply =>
          reply.id === replyId ? { ...reply, text: newText } : reply
        );
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="App">
      <h1>Comments Section</h1>
      <CommentForm addComment={addComment} />
      <CommentList
        comments={comments}
        deleteComment={deleteComment}
        editComment={editComment}
        addReply={addReply}
        deleteReply={deleteReply}
        editReply={editReply}
      />
    </div>
  );
}

export default App;
