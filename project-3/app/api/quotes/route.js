import { getAllQuotes } from "@/utils/quotes";

export async function GET() {
  const quotes = await getAllQuotes();
  const publicQuotes = quotes.filter((q) => q.token == null);

  return Response.json(publicQuotes);
}
