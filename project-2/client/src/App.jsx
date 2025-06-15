import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Toaster } from "./components/ui/sonner";
import { useAuth } from "./hooks/useAuth";
import { routeTree } from "./routeTree.gen";

export default function App() {
  const auth = useAuth();

  const router = createRouter({
    routeTree,
    context: { user: null, loading: true },
  });

  return (
    <>
      <RouterProvider router={router} context={auth} />
      <Toaster position="top-center" />
    </>
  );
}
