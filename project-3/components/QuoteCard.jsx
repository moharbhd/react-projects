"use client";

export default function QuoteCard({ quote }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-background p-5 shadow-sm transition hover:shadow-md">
      <p className="text-lg leading-relaxed italic text-foreground/90">
        “{quote.text}”
      </p>
      <p className="text-right mt-4 font-medium text-sm text-foreground/70">
        — {quote.author}
      </p>
    </div>
  );
}
