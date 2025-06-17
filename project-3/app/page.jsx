export const metadata = { title: "FireQuotes - Home" };

import QuoteList from "@/components/QuoteList";

export default async function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Inspirational Quotes</h1>
      <QuoteList />
    </div>
  );
}
