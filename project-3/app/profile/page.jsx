export const dynamic = "force-dynamic";

export default async function ProfilePage({ searchParams }) {
  const { token } = await searchParams;

  if (!token) return <p>Unauthorized</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome, {token}</h1>
      <p className="text-gray-500 mt-2">This is your profile page.</p>
    </div>
  );
}
