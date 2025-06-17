export const dynamic = "force-dynamic";

import { getAllQuotes } from "@/utils/quotes";

export async function GET(req) {
  const token = req.headers.get("authorization");
  if (!token) return new Response("Unauthorized", { status: 401 });

  const quotes = await getAllQuotes();
  const userQuotes = quotes.filter((q) => q.token === token);

  return Response.json(userQuotes);
}
