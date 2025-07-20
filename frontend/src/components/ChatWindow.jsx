import React, { useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';
import Message from './Message';
import './ChatWindow.css';

export default function ChatWindow() {
  const { messages, loading } = useContext(ChatContext);

  return (
    <div className="chat-window">
      {messages.map((m, i) => <Message key={i} from={m.from} text={m.text} />)}
      {loading && <div className="message bot">...</div>}
    </div>
  );
}