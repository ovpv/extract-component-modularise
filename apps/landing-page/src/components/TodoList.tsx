"use client";

import { useAtom } from "jotai";
import { todosAtom, toggleTodoAtom } from "@/atoms/todo";

export function TodoList() {
  const todos = useAtom(todosAtom)[0];
  const toggleTodo = useAtom(toggleTodoAtom)[1];

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 0",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            style={{ width: "16px", height: "16px", cursor: "pointer" }}
          />
          <span
            style={{
              fontSize: "1rem",
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#9ca3af" : "#111827",
            }}
          >
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
