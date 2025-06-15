import NotFound from "@/components/NotFound";
import { createRootRoute, redirect } from "@tanstack/react-router";

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  beforeLoad: async ({ context, location }) => {
    const { user, loading } = context;

    if (loading) return;

    if (!loading) {
      if (user != null && location.pathname === "/login") {
        throw redirect({ to: "/todos" });
      }
    }
  },
});
