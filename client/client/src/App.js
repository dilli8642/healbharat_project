import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  const suggestions = [
    "Tell me about admissions",
    "Available courses"
  ];

 
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async (msg) => {
    const finalMessage = msg || message;
    if (!finalMessage.trim()) return;

    const newChat = [...chat, { type: "user", text: finalMessage }];
    setChat(newChat);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message: finalMessage
      });

      setChat([
        ...newChat,
        { type: "bot", text: res.data.reply }
      ]);
    } catch (err) {
      setChat([
        ...newChat,
        { type: "bot", text: "Server Error ❌ Please check backend." }
      ]);
    }
  };

  // ✅ Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <h2>🎓 Campus AI Chatbot</h2>

      <div className="suggestions">
        {suggestions.map((item, index) => (
          <button key={index} onClick={() => sendMessage(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="input-area">
        <input
          type="text"
          value={message}
          placeholder="Ask about campus..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}   // ✅ Enter works
        />
        <button onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
}

export default App;