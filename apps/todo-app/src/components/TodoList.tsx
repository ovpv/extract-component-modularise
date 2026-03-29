"use client";

import { useAtomValue } from "jotai";
import { todosAtom } from "@/atoms/todo";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todos = useAtomValue(todosAtom);

  if (todos.length === 0) {
    return <p style={{ color: "#999", textAlign: "center", padding: "24px 0" }}>No todos yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
