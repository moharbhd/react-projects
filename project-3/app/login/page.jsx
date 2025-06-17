"use client";
import { useAuth } from "@context/authContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [tokenInput, setTokenInput] = useState("");
  const { login } = useAuth();

  function handleLogin() {
    if (!tokenInput.trim()) return;
    login(tokenInput.trim());
    router.push(`/profile?token=${tokenInput.trim()}`);
  }

  return (
    <div className="max-w-sm mx-auto bg-background p-6 rounded-xl shadow mt-12 border border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <div className="space-y-4">
        <input
          className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring focus:ring-blue-500/30"
          placeholder="Enter token (e.g. user123)"
          onChange={(e) => setTokenInput(e.target.value)}
        />
        <button
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
