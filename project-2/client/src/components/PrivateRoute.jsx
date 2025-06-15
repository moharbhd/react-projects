import { Navigate, Outlet } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { Label } from "./ui/label";

export default function PrivateRoute() {
  const { user, loading } = useAuth();

  if (loading) return <Label>Loading....</Label>;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
