import { Trash2 } from "lucide-react"; // Importing the trash icon
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export default function TodoItem({ todo, index, onUpdate, onDelete }) {
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = async () => {
    try {
      setLoading(true);
      await onUpdate(todo._id, { completed: !todo.completed });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleteLoading(true);
      await onDelete(todo._id);
      toast.success("Todo deleted");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div
      className={`
      w-full p-4 flex items-center justify-between
      border border-gray-400 rounded-lg
      transition-all duration-200
      hover:shadow-md hover:border-gray-300
      ${todo.completed ? "bg-gray-50" : "bg-white"}
    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Label
          className="
          flex items-center justify-center
          w-6 h-6 rounded-md
          bg-gray-100 text-gray-600 text-xs font-medium
          shrink-0
        "
        >
          {index + 1}
        </Label>

        <Checkbox
          className="h-4.5 w-4.5 cursor-pointer  data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
          checked={todo.completed}
          onCheckedChange={handleToggle}
          disabled={loading || deleteLoading}
        />

        <p
          className={`
             ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}
             break-words whitespace-pre-wrap
             line-clamp-none
             transition-all duration-200
        `}
        >
          {todo.title}
        </p>
      </div>

      <Button
        variant="ghost"
        size="sm"
        className={`
          p-3 text-gray-400 hover:text-red-500
          ${isHovered ? "opacity-100" : "opacity-0"}
          transition-opacity
          cursor-pointer
        `}
        disabled={loading || deleteLoading}
        onClick={handleDelete}
      >
        <Trash2 className="size-5" />
      </Button>
    </div>
  );
}
