# 🎓 Campus Chatbot – AI Powered Student Assistant

> A full-stack AI-powered web application designed to assist students with campus-related queries using intelligent response handling and modern web technologies.

---

## 🚀 Project Overview

Campus Chatbot is a scalable full-stack web application built to provide automated assistance for campus-related queries such as admissions, courses, facilities, and events.  

The system integrates a modern React frontend, a Node.js backend with RESTful APIs, MongoDB for data persistence, and a Python-based AI engine for intelligent response generation.

This project demonstrates full-stack development, API design, database integration, and modular system architecture.

---

## 🏗 System Architecture

Frontend (React.js)  
⬇  
Backend (Node.js + Express.js)  
⬇  
Database (MongoDB)  
⬇  
AI Engine (Python)

---

## 🛠 Tech Stack

### 🔹 Frontend
- React.js
- CSS
- Axios

### 🔹 Backend
- Node.js
- Express.js
- REST API Architecture

### 🔹 Database
- MongoDB

### 🔹 AI Engine
- Python

### 🔹 Development Tools
- Git
- GitHub
- Visual Studio Code

---

## 📁 Project Structure

campus_chatbot/

├── client/                 → React Frontend  
├── server/                 → Node.js Backend  
│   ├── routes/  
│   ├── models/  
│   └── index.js  
├── ai-engine/              → Python AI logic  
│   └── main.py  
└── README.md  

---

## ✨ Key Features

- Full-stack web architecture
- RESTful API integration
- Modular backend structure
- AI-based chatbot response handling
- Responsive user interface
- Environment-based configuration
- Clean project organization
- Scalable system design

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/dilli8642/healbharat_project.git  
cd campus_chatbot  

---

### 2️⃣ Backend Setup

Navigate to backend folder:

cd server  

Install dependencies:

npm install  

Create a `.env` file inside the `server` folder and add:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  

Start backend server:

npm start  

Backend runs on:  
http://localhost:5000  

---

### 3️⃣ Frontend Setup

Navigate to frontend folder:

cd ../client/client  

Install dependencies:

npm install  

Start frontend:

npm start  

Frontend runs on:  
http://localhost:3000  

---

## 🔌 API Endpoint

### POST /chat

Request Body:

{
  "message": "Your question here"
}

Response:

{
  "reply": "AI generated response"
}

---

## 🔒 Security Practices

- Environment variables used for sensitive data
- `.gitignore` configured to exclude:
  - node_modules
  - .env
  - logs
  - build files
- Clean Git history maintained

---

## 🚀 Future Enhancements

- User authentication system
- Admin dashboard
- User-specific chat history
- NLP model optimization
- Cloud deployment (Frontend + Backend)
- Performance optimization
- Role-based access control

---

## 📊 Learning Outcomes

This project demonstrates:

- Full-stack application development
- REST API implementation
- MongoDB integration
- AI module integration
- Version control using Git & GitHub
- Professional documentation practices
- Modular and scalable architecture design

---

## 👨‍💻 Developed By

Dilli  
B.Tech Project – 2026  
Campus Chatbot System  

---

## 📌 Conclusion

Campus Chatbot is a complete full-stack AI-driven web application that integrates frontend, backend, database, and intelligent response mechanisms into a unified scalable system.  

The project reflects practical implementation of modern web development concepts and structured software engineering principles.