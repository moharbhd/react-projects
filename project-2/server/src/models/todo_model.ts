import mongoose, { Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  completed: boolean;
  user: mongoose.Schema.Types.ObjectId;
}

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ITodo>("Todo", todoSchema);
