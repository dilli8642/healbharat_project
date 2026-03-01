const express = require("express");
const axios = require("axios");   // 🔥 THIS WAS MISSING
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/process",
      {
        message: req.body.message
      }
    );

    res.json({ reply: response.data.reply });

  } catch (error) {
    console.error("AI Engine Error:", error.message);
    res.status(500).json({
      reply: "Server Error ❌ Please check backend."
    });
  }
});

module.exports = router;