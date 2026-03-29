"use client";

import { useSetAtom } from "jotai";
import { removeTodoAtom, toggleTodoAtom } from "@/atoms/todo";
import type { Todo } from "@/atoms/todo";

type Props = {
  todo: Todo;
};

export function TodoItem({ todo }: Props) {
  const toggleTodo = useSetAtom(toggleTodoAtom);
  const removeTodo = useSetAtom(removeTodoAtom);

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 0", borderBottom: "1px solid #eee" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ cursor: "pointer" }}
      />
      <span style={{ flex: 1, textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "#999" : "inherit" }}>
        {todo.text}
      </span>
      <button
        type="button"
        onClick={() => removeTodo(todo.id)}
        style={{ padding: "2px 8px", borderRadius: "4px", background: "#ff4d4f", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Delete
      </button>
    </li>
  );
}
