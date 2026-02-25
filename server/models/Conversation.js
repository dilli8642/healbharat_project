const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    sessionId: String,
    language: String,
    messages: [
        {
            sender: String,
            text: String,
            intent: String,
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model("Conversation", conversationSchema);