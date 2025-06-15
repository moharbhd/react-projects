import LoadingPage from "@/components/Loading";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LoadingPage,
  beforeLoad: async ({ context }) => {
    const { user, loading } = context;

    if (loading) return;

    if (!user) {
      throw redirect({ to: "/login" });
    } else {
      throw redirect({ to: "/todos" });
    }
  },
});
