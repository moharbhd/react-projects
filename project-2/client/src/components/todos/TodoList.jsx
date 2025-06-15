import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await api.get("/todos");
        setTodos(data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const newTodo = await api.post("/todos", { title });
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = async (id, updates) => {
    const updatedTodo = await api.put(`/todos/${id}`, updates);
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
  };

  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex flex-row gap-2 mb-8">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-15" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-17 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="mb-8">
        <AddTodo onAdd={addTodo} />
      </div>
      {todos.length < 1 ? (
        <Label className="mt-20 flex items-center justify-center">
          No Todos
        </Label>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              index={index}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
