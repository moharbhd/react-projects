import { Link } from "@tanstack/react-router";
import LoginForm from "../components/auth/LoginForm";
import { Card } from "../components/ui/card";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md p-6">
        <h2 className="text-3xl font-bold mb-5 mt-3 text-center">Login</h2>
        <LoginForm />
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}
