import './CommentItem.css'
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import deleteimg from '../Assets/delete_12236949.png'

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
  function formatDate(dateString) {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      return "Invalid Date"; 
    }
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
  
    function getOrdinalSuffix(day) {
      if (day > 3 && day < 21) return 'th'; 
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }
  
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  }

  return (
    <div className="comment-item">
        <div id='namendate'>
      <h4>{comment.name}</h4>
      <small>{formatDate(comment.date)}</small></div>
      {isEditing ? (
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <p>{comment.text}</p>
      )}
      
      <button id='editbtn' onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button id='replybtn' onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
      <button id='delBtn' onClick={() => deleteComment(comment.id)}><img className="delImg" src={deleteimg} alt="linkedin"></img></button>

      {showReplyForm && (
        <div id='abc'><CommentForm addComment={handleReply} heading="Reply" height='22vh' width='5vw' twidth='30vw' btnmargin='70%' btnwidth='70px' /></div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map(reply => (
            <div key={reply.id} className="reply-item">
              <div id='namendate'><h4>{reply.name}</h4>
              <small>{formatDate(reply.date)}</small></div>
              <p>{reply.text}</p>
              <button id='replyEditBtn' onClick={() => handleEditReply(reply.id, prompt('Edit your reply', reply.text))}>
                Edit
              </button>
              <button id='delBtn' onClick={() => handleDeleteReply(reply.id)}><img className="delImg" src={deleteimg} alt="linkedin"></img></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentItem;
