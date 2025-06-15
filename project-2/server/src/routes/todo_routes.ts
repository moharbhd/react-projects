import { Router } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodosCount,
} from "../controllers/todo_controller";
import { requireAuth } from "../middleware/auth_middleware";

const router = Router();

router.use(requireAuth);

router.get("/", getTodos);
router.get("/count", getTodosCount);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
