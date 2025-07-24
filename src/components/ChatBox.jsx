"use client";
import React, { useState } from "react";

import socket from "../../utils/socket.jsx";
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 h-full flex flex-col">
      <div className="flex-1 overflow-y-auto text-white space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="p-2 bg-gray-800 rounded shadow">{msg}</div>
        ))}
      </div>
      <div className="mt-3 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-4 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;