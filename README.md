# DocChat RAG (Local) — Ollama + Node + Vue

A **fully local**, **free** AI Q&A web app powered by **Ollama** (open models like Llama 3.1) with a **Node/Express backend** and a **Vue 3 frontend**.

✅ No paid APIs  
✅ Runs locally on your machine  
✅ Great portfolio project for Full-Stack / SDE / AI roles

---

## Features (Current)
- Local chat UI (Vue 3)
- Backend API (Node.js + Express)
- Local LLM inference using **Ollama**
- Health check endpoint
- End-to-end flow: **Frontend → Backend → Ollama → Response**

---

## Tech Stack
- **Frontend:** Vue 3, Vite, Axios  
- **Backend:** Node.js, Express, CORS, Axios  
- **LLM Runtime:** Ollama  
- **Model:** `llama3.1:8b` (local)

---

## Project Structure
```bash
docchat-rag/
├── client/   # Vue app
└── server/   # Express API
