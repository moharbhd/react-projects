export const dynamic = "force-dynamic";

import { addQuote } from "@/utils/quotes";

export default async function AddQuotePage({ searchParams }) {
  const { token } = await searchParams;

  if (!token) return <p>Unauthorized</p>;

  async function handleSubmit(formData) {
    "use server";

    const text = formData.get("text");
    const author = formData.get("author");
    const isPrivate = formData.get("private") === "on";

    await addQuote({
      text,
      author,
      token: isPrivate ? token : null,
    });
  }

  return (
    <div className="max-w-md mx-auto mt-12 bg-background border border-gray-200 dark:border-gray-800 rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">
        Add a New Quote
      </h2>

      <form action={handleSubmit} className="space-y-5">
        <div>
          <label
            className="block mb-1 text-sm font-medium text-foreground/70"
            htmlFor="text"
          >
            Quote
          </label>
          <input
            name="text"
            id="text"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-background text-foreground focus:outline-none focus:ring focus:ring-green-500/30"
            placeholder="Enter the quote text"
          />
        </div>

        <div>
          <label
            className="block mb-1 text-sm font-medium text-foreground/70"
            htmlFor="author"
          >
            Author
          </label>
          <input
            name="author"
            id="author"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-background text-foreground focus:outline-none focus:ring focus:ring-green-500/30"
            placeholder="Enter the author name"
          />
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            name="private"
            id="private"
            className="w-4 h-4"
          />
          <label htmlFor="private" className="text-sm text-foreground/70">
            Mark as Private (Only visible to you)
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-5 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
