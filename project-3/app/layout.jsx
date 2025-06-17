import Navbar from "@/components/Navbar";
import { AuthProvider } from "@context/authContext";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow container mx-auto p-4">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
