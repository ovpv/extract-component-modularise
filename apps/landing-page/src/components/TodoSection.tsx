"use client";

import { TodoList } from "@repo/ui";
import { useAtomValue, useSetAtom } from "jotai";
import { todosAtom, toggleTodoAtom } from "@/atoms/todo";

export function TodoSection() {
	const todos = useAtomValue(todosAtom);
	const toggleTodo = useSetAtom(toggleTodoAtom);

	return <TodoList todos={todos} onToggle={toggleTodo} />;
}
