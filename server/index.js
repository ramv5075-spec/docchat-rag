import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("DocChat RAG server running ✅"));
app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body || {};
    console.log("POST /chat body:", req.body);

    if (!prompt) {
      return res.status(400).json({ error: "Missing 'prompt' in request body" });
    }

    const ollamaRes = await axios.post("http://127.0.0.1:11434/api/generate", {
      model: "llama3.1:8b",
      prompt,
      stream: false,
    });

    return res.json({ answer: ollamaRes.data.response });
  } catch (err) {
    console.error("Server /chat error:", err?.response?.data || err.message);
    return res.status(500).json({
      error: "Server error",
      details: err?.response?.data || err.message,
    });
  }
});

const PORT = 5050;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://localhost:${PORT}`));

