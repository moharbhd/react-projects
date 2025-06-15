import { Request, Response } from "express";
import Todo from "../models/todo_model";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find({
      user: req.session.userId,
    }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getTodosCount = async (req: Request, res: Response) => {
  try {
    const count = await Todo.countDocuments({
      user: req.session.userId,
    });
    res.json({ count });
  } catch (error) {
    res.status(400).json({
      error: (error as Error).message,
    });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const todo = new Todo({ title, user: req.session.userId });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.session.userId },
      { title, completed },
      { new: true }
    );

    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
    }

    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({
      _id: id,
      user: req.session.userId,
    });

    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
