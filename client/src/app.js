import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:5000/api/chat", {
      message: message
    });

    setResponse(res.data.reply);
  };

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Campus Chatbot </h1>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={sendMessage}>Send</button>

      <h3>{response}</h3>
    </div>
  );
}

export default App;