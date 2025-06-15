import { useRouter } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-screen">
        <div>
          <span className="text-9xl font-bold text-gray-400 block">404</span>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-light text-gray-700 mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist.
        </p>

        <Button
          size="lg"
          onClick={() => {
            router.navigate({ to: "/" });
          }}
        >
          Return Back
        </Button>
      </div>
    </div>
  );
}
