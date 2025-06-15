import LogoutButton from "@/components/auth/LogoutButton";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  console.log(user);

  const formattedDate =
    user?.createdAt != null
      ? new Date(user.createdAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "No Date";

  return (
    <div className="max-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
            <div className="flex items-center space-x-4">
              <div>
                <img
                  className="h-24 w-24 rounded-full border-4 border-white shadow-md"
                  src={
                    "https://i.pinimg.com/736x/d3/f3/b4/d3f3b4a5bac5a1e52a801dba8d952851.jpg"
                  }
                  alt="User profile"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {user?.username}
                </h1>
                <p className="text-blue-100">{user?.email}</p>
              </div>
            </div>
          </div>
          {/* Profile Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Personal Information
                </h2>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Username
                  </label>
                  <p className="mt-1 text-gray-700">{user?.username}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <p className="mt-1 text-gray-700">{user?.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Created Date
                  </label>
                  <p className="mt-1 text-gray-700">{formattedDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-auto w-full items-center justify-center p-6">
            <LogoutButton className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
