"use client";
import { useAuth } from "@context/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const { token, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace("/");
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">FireQuotes</div>

        <div className="flex gap-4 text-sm font-medium text-foreground/80 items-center">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>

          {token ? (
            <>
              <Link
                href={`/profile?token=${token}`}
                className="hover:text-foreground transition-colors"
              >
                Profile
              </Link>
              <Link
                href={`/my-quotes?token=${token}`}
                className="hover:text-foreground transition-colors"
              >
                My Quotes
              </Link>
              <Link
                href={`/add?token=${token}`}
                className="hover:text-foreground transition-colors"
              >
                Add
              </Link>
              <button
                onClick={handleLogout}
                className="ml-2 px-3 py-1 rounded text-sm text-white bg-red-500 cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="hover:text-foreground transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
