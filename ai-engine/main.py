from fastapi import FastAPI
from pydantic import BaseModel
import json

app = FastAPI()

class Query(BaseModel):
    message: str

# Load knowledge base
with open("knowledge_base.json", "r", encoding="utf-8") as file:
    knowledge = json.load(file)

@app.post("/process")
async def process_query(query: Query):
    msg = query.message.lower()

    # General human responses
    greetings = ["hi", "hello", "hey"]
    if any(word in msg for word in greetings):
        return {"reply": "Hello 👋 Welcome to Campus AI Chatbot!\n\nI can help you with admissions, courses, fees, placements, hostel, scholarships and more."}

    if "how are you" in msg:
        return {"reply": "I'm doing great 😊 and ready to assist you with campus information!"}

    if "thank" in msg:
        return {"reply": "You're very welcome! 😊 Let me know if you need anything else."}

    if "who are you" in msg:
        return {"reply": "I am an AI-powered Campus Assistant built to provide detailed information about academics, campus facilities, admissions and more."}

        # Knowledge base keyword matching
    for key, value in knowledge.items():
        if any(word in msg for word in key.lower().split()):
            return {"reply": value}
    return {
    "reply": "I may not have specific information about that yet.\n\nYou can ask about:\n• Admissions\n• Courses\n• Fees\n• Placements\n• Hostel\n• Transport\n• Scholarships"
}