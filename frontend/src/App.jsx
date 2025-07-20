import React from 'react';
import { ChatProvider } from './contexts/ChatContext';
import ChatWindow from './components/ChatWindow';
import InputBox from './components/InputBox';
import './App.css';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <ChatProvider>
      <div className="app-container">
        <h1>How can I help you today?</h1>
        <ChatWindow />
        <InputBox />
      </div>
    </ChatProvider>
  );
}
<div className="app-wrapper">
  <Sidebar />
  <ChatProvider>
    <main className="chat-area">
      <h1>How can I help you today?</h1>
      <ChatWindow />
      <InputBox />
    </main>
  </ChatProvider>
</div>
