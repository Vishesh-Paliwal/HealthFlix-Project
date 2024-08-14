import React, { useState } from 'react';
import './CommentForm.css'

function CommentForm({ addComment }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) {
      alert('Please enter both your name and a comment.');
      return;
    }
    addComment(name, text);
    setName('');
    setText('');
  };

  return (
    <div id='comBox'> Comment
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
    </div>
  );
}

export default CommentForm;
