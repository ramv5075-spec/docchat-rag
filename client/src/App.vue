<script setup>
import { ref } from "vue";
import { api } from "./api";

const prompt = ref("");
const answer = ref("");
const loading = ref(false);
const error = ref("");

async function ask() {
  if (!prompt.value.trim()) return;

  loading.value = true;
  error.value = "";
  answer.value = "";

  try {
    const res = await api.post("/chat", { prompt: prompt.value });
    answer.value = res.data.answer;
  } catch (e) {
    error.value = "Failed to get response from backend.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div style="max-width: 900px; margin: 0 auto; padding: 24px; font-family: Arial;">
    <h1>DocChat (Local Ollama)</h1>

    <div style="margin-top: 16px;">
      <textarea
        v-model="prompt"
        rows="4"
        placeholder="Ask something..."
        style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 10px;"
      ></textarea>

      <button
        @click="ask"
        :disabled="loading"
        style="margin-top: 10px; padding: 10px 14px; border: 0; border-radius: 10px; cursor: pointer;"
      >
        {{ loading ? "Thinking..." : "Ask" }}
      </button>
    </div>

    <div v-if="error" style="margin-top: 14px; color: #b00020;">
      {{ error }}
    </div>

    <div v-if="answer" style="margin-top: 16px; padding: 14px; border: 1px solid #ddd; border-radius: 10px;">
      <b>Answer:</b>
      <div style="margin-top: 8px; white-space: pre-wrap;">{{ answer }}</div>
    </div>
  </div>
</template>
