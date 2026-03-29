import { AddTodo } from "@/components/AddTodo";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "48px 16px" }}>
      <h1 style={{ marginBottom: "32px", fontSize: "2rem", fontWeight: 700 }}>Todo App</h1>
      <AddTodo />
      <TodoList />
    </main>
  );
}
