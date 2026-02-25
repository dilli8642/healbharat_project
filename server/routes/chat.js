const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const message = req.body.message.toLowerCase();

  let reply = "I didn't understand that. Please ask about admissions, fees, courses, or hostel.";

  if (message.includes("hi") || message.includes("hello")) {
    reply = "Hello 👋 Welcome to Campus Chatbot!";
  }
  else if (message.includes("how are you")) {
    reply = "I'm doing great 😊 How can I help you today?";
  }
  else if (message.includes("fee")) {
    reply = "The annual tuition fee is ₹85,000. Scholarship options are available.";
  }
  else if (message.includes("admission")) {
    reply = "Admissions are open from May to July every year.";
  }
  else if (message.includes("course")) {
    reply = "We offer B.Tech, MBA, BBA, and MCA programs.";
  }
  else if (message.includes("hostel")) {
    reply = "Hostel facilities are available for both boys and girls.";
  }

  res.json({ reply });
});

module.exports = router;