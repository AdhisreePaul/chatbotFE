import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to send user message and fetch AI reply
  const sendMessage = async (text) => {
    setLoading(true);
    // Add user message locally
    setMessages(prev => [...prev, { from: 'user', text }]);

    try {
      // Call backend API
      const res = await fetch('http://localhost:4000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      // Add AI reply
      setMessages(prev => [...prev, { from: 'bot', text: data.reply }]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message to chat
      setMessages(prev => [...prev, { 
        from: 'bot', 
        text: 'Sorry, I encountered an error. Please check your API key and try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, loading, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}