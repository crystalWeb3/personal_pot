// components/ChatComponent.tsx
import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: input,
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-medium text-white mb-2">Chat</h2>
      <div className="h-48 overflow-y-auto mb-2 bg-gray-700 p-2 rounded">
        {messages.map((msg) => (
          <div key={msg.id} className="text-white mb-1">
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-600 rounded p-2 flex-grow bg-white text-black"
          placeholder="Type your message..."
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2 ml-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
