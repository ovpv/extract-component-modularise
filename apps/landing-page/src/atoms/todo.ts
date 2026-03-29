import { atom } from "jotai";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export const todosAtom = atom<Todo[]>([
  { id: "1", text: "Build a monorepo", completed: true },
  { id: "2", text: "Set up TurboRepo", completed: true },
  { id: "3", text: "Add Biome linting", completed: false },
  { id: "4", text: "Extract shared components", completed: false },
]);

export const addTodoAtom = atom(null, (get, set, text: string) => {
  const todos = get(todosAtom);
  set(todosAtom, [
    ...todos,
    { id: crypto.randomUUID(), text, completed: false },
  ]);
});

export const toggleTodoAtom = atom(null, (get, set, id: string) => {
  const todos = get(todosAtom);
  set(
    todosAtom,
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
});
