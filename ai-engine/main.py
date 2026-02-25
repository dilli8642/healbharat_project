from fastapi import FastAPI
from pydantic import BaseModel
from langdetect import detect

# 1️⃣ Create FastAPI app FIRST
app = FastAPI()

# 2️⃣ Request model
class Message(BaseModel):
    text: str

# 3️⃣ Simple intent detection
def simple_intent(text):
    text = text.lower()
    if "fee" in text:
        return "fees_query"
    if "scholarship" in text:
        return "scholarship_query"
    if "timetable" in text:
        return "timetable_query"
    return "unknown"

# 4️⃣ API Route
@app.post("/process")
def process_message(msg: Message):

    language = detect(msg.text)
    intent = simple_intent(msg.text)

    responses = {
        "fees_query": {
            "en": "You can pay fees through the student portal.",
            "hi": "आप छात्र पोर्टल के माध्यम से फीस जमा कर सकते हैं।"
        },
        "scholarship_query": {
            "en": "Scholarship forms are available in the admin office.",
            "hi": "छात्रवृत्ति फॉर्म प्रशासनिक कार्यालय में उपलब्ध हैं।"
        },
        "timetable_query": {
            "en": "Timetable is available on the college website.",
            "hi": "समय सारणी कॉलेज वेबसाइट पर उपलब्ध है।"
        }
    }

    lang = "hi" if language == "hi" else "en"

    if intent not in responses:
        return {
            "intent": "unknown",
            "language": language,
            "response": "Your query has been forwarded to the moderator." if lang == "en"
            else "आपका प्रश्न मॉडरेटर को भेज दिया गया है।",
            "fallback": True
        }

    return {
        "intent": intent,
        "language": language,
        "response": responses[intent][lang],
        "fallback": False
    }