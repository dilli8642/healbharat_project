import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const suggestions = [
    "Hi",
    "How are you?",
    "What is the fee?",
    "Tell me about courses",
    "Hostel details",
    "Admission process"
  ];

  const sendMessage = async (msg) => {
    const finalMessage = msg || message;

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: finalMessage
      });

      setResponse(res.data.reply);
    } catch (err) {
      setResponse("Server Error ❌");
    }

    setMessage("");
  };

  return (
    <div style={{
      textAlign:"center",
      marginTop:"50px",
      fontFamily:"Arial"
    }}>
      <h1> Campus Chatbot</h1>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
        style={{
          padding:"12px",
          width:"400px",
          borderRadius:"8px",
          border:"1px solid #ccc"
        }}
      />

      <br /><br />

      <button
        onClick={() => sendMessage()}
        style={{
          padding:"10px 25px",
          borderRadius:"8px",
          background:"#007bff",
          color:"white",
          border:"none",
          cursor:"pointer"
        }}
      >
        Send
      </button>

      <div style={{marginTop:"30px"}}>
        <h3>Quick Questions:</h3>

        {suggestions.map((item, index) => (
          <button
            key={index}
            onClick={() => sendMessage(item)}
            style={{
              margin:"5px",
              padding:"8px 15px",
              borderRadius:"20px",
              border:"1px solid #007bff",
              background:"white",
              cursor:"pointer"
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div style={{
        marginTop:"40px",
        padding:"20px",
        width:"60%",
        marginLeft:"auto",
        marginRight:"auto",
        background:"#f5f5f5",
        borderRadius:"10px"
      }}>
        <h3>Bot Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;