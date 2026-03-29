"use client";

import { useSetAtom } from "jotai";
import { useState } from "react";
import { addTodoAtom } from "@/atoms/todo";

export function AddTodo() {
  const [text, setText] = useState("");
  const addTodo = useSetAtom(addTodoAtom);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        style={{ flex: 1, padding: "8px 12px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "8px 16px", borderRadius: "4px", background: "#0070f3", color: "#fff", border: "none", cursor: "pointer" }}>
        Add
      </button>
    </form>
  );
}
