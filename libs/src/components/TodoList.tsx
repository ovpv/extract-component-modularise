export type Todo = {
	id: string;
	text: string;
	completed: boolean;
};

type Props = {
	todos: Todo[];
	onToggle?: (id: string) => void;
};

export function TodoList({ todos, onToggle }: Props) {
	if (todos.length === 0) {
		return (
			<p style={{ color: "#9ca3af", textAlign: "center", padding: "24px 0" }}>
				No todos yet.
			</p>
		);
	}

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
						onChange={() => onToggle?.(todo.id)}
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
