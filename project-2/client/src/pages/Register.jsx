import { Link } from "@tanstack/react-router";
import RegisterForm from "../components/auth/RegisterForm";
import { Card } from "../components/ui/card";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md p-6">
        <h2 className="text-3xl font-bold mb-5 mt-3 text-center">
          Create Account
        </h2>
        <RegisterForm />
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}
