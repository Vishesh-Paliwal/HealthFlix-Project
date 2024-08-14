import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm({ addComment, heading, height, width , theight , twidth , btnmargin , btnwidth}) {
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
    <div
      id='comBox'
      style={{
        height: height || '22vh',
        width: width || '42vw',
      }}
    >
      {heading}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          style={{
            height: theight || '4vh',
            width: twidth || '38vw',
          }}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Comment"
          value={text}
          style={{
            height: theight || '6vh',
            width: twidth || '38vw',
          }}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          id='post'
          type="submit"
          style={{
            marginLeft: btnmargin || '85%',
            width : btnwidth || 'auto',
          }}
        >
          POST
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
