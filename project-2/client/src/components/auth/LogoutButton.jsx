import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../ui/button";

export default function LogoutButton({ className = "" }) {
  const { logout } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
      toast.success("Logged out successfully");
      router.navigate({ to: "/login" });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className={`cursor-pointer bg-red-500 text-white ${className}`}
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
    >
      Logout
    </Button>
  );
}
