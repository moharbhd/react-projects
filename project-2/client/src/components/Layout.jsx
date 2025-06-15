import { useAuth } from "@/hooks/useAuth";
import { Outlet } from "@tanstack/react-router";
import LoadingPage from "./Loading";
import Navbar from "./Navbar";

export default function Layout() {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingPage />;
  }

  ///
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 w-full">
        <Navbar />
      </header>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
