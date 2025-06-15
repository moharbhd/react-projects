import TodoList from "../components/todos/TodoList";

export default function Todos() {
  return (
    <div className="mt-2">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Your Todos</h1>
      <TodoList />
    </div>
  );
}
