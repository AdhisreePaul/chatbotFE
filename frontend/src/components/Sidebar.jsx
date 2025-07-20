import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>My Chats</h2>
      <input type="search" placeholder="Search…" />
      <div className="folders">
        <div className="folder">Work chats</div>
        <div className="folder">Life chats</div>
        <div className="folder">Project chats</div>
        <div className="folder">Client chats</div>
      </div>
      <div className="new-chat">➕ New chat</div>
    </aside>
  );
}
