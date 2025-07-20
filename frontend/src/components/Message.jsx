import React from 'react';
import './Message.css'; // you can style later

export default function Message({ from, text }) {
  const className = from === 'user' ? 'message user' : 'message bot';
  return <div className={className}>{text}</div>;
}