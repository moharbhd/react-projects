import QuoteCard from "./QuoteCard";

async function fetchQuotes() {
  const res = await fetch("http://localhost:3000/api/quotes");
  return res.json();
}

export default async function QuoteList() {
  const quotes = await fetchQuotes();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pb-50">
      {quotes.map((q) => (
        <QuoteCard key={q.id} quote={q} />
      ))}
    </div>
  );
}
