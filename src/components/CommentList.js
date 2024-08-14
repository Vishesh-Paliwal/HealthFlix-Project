import './CommentList.css';
import React from 'react';
import CommentItem from './CommentItem';

function CommentList({ comments, deleteComment, editComment, addReply, deleteReply, editReply }) {
  return (
    <div className="comment-list">
      {comments.map(comment => (
        <CommentItem
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
          editComment={editComment}
          addReply={addReply}
          deleteReply={deleteReply}
          editReply={editReply}
        />
      ))}
    </div>
  );
}

export default CommentList;
