import React, { useState, useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';
import './InputBox.css';

export default function InputBox() {
  const [text, setText] = useState('');
  const { sendMessage } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    sendMessage(text);
    setText('');
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">➤</button>
    </form>
  );
}