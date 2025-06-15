import Todos from "@/pages/Todos";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/todos/")({
  component: Todos,
});
