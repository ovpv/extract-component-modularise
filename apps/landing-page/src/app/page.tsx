import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
          padding: "80px 16px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: 800, margin: "0 0 16px" }}>
          Get Things Done
        </h1>
        <p style={{ fontSize: "1.25rem", margin: 0, opacity: 0.9 }}>
          A simple, fast, and beautiful todo app built with Next.js and Jotai.
        </p>
      </section>

      {/* Todo list section */}
      <section style={{ maxWidth: "600px", margin: "0 auto", padding: "48px 16px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "24px" }}>
          Your Todos
        </h2>
        <TodoList />
      </section>
    </main>
  );
}
