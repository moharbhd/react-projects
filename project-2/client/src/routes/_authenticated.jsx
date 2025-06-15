import Layout from "@/components/Layout";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: Layout,
  beforeLoad: async ({ context }) => {
    const { user, loading } = context;

    if (loading) return;

    if (!user) {
      throw redirect({ to: "/login" });
    }
  },
});
