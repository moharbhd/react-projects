export const dynamic = "force-dynamic";

import QuoteCard from "@components/QuoteCard";

export default async function MyQuotesPage({ searchParams }) {
  const { token } = await searchParams;
  const res = await fetch("http://localhost:3000/api/user/quotes", {
    headers: { Authorization: token },
  });

  if (!res.ok) return <p>Unauthorized</p>;
  const quotes = await res.json();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Your Quotes</h1>

      {quotes.length >= 1 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pb-20">
          {quotes.map((q) => (
            <QuoteCard key={q.id} quote={q} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <h1 className="text-foreground/50 text-lg">No Quotes</h1>
        </div>
      )}
    </div>
  );
}
