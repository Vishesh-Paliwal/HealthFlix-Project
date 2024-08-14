import './CommentItem.css'
import React, { useState } from 'react';
import CommentForm from './CommentForm';

function CommentItem({ comment, deleteComment, editComment, addReply, deleteReply, editReply }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(comment.text);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      editComment(comment.id, newText);
    }
    setIsEditing(!isEditing);
  };

  const handleReply = (name, text) => {
    addReply(comment.id, name, text);
    setShowReplyForm(false);
  };

  const handleEditReply = (replyId, newText) => {
    editReply(comment.id, replyId, newText);
  };

  const handleDeleteReply = (replyId) => {
    deleteReply(comment.id, replyId);
  };

  return (
    <div className="comment-item">
      <h4>{comment.name}</h4>
      {isEditing ? (
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <p>{comment.text}</p>
      )}
      <small>{comment.date.toLocaleString()}</small>
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => deleteComment(comment.id)}>Delete</button>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>

      {showReplyForm && (
        <CommentForm addComment={handleReply} />
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map(reply => (
            <div key={reply.id} className="reply-item">
              <h4>{reply.name}</h4>
              <p>{reply.text}</p>
              <small>{reply.date.toLocaleString()}</small>
              <button onClick={() => handleEditReply(reply.id, prompt('Edit your reply', reply.text))}>
                Edit
              </button>
              <button onClick={() => handleDeleteReply(reply.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentItem;
