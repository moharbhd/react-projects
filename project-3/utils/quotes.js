let quotes = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    token: null,
    author: "Steve Jobs",
  },
  {
    id: 2,
    text: "I’ll be back.",
    token: null,
    author: "Terminator (1984)",
  },
  {
    id: 3,
    text: "Fear is not evil. It tells you what your weakness is.",
    token: null,
    author: "Gildarts (Fairy Tail)",
  },
  {
    id: 4,
    text: "Victory is always possible for the person who refuses to stop fighting.",
    token: null,
    author: "Napoleon Hill",
  },
  {
    id: 5,
    text: "A lesson without pain is meaningless.",
    token: null,
    author: "Edward Elric (Fullmetal Alchemist)",
  },
  {
    id: 6,
    text: "I’m gonna make him an offer he can’t refuse.",
    token: null,
    author: "The Godfather (1972)",
  },
  {
    id: 7,
    text: "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.",
    token: null,
    author: "Matsumoto Rangiku (Bleach)",
  },
  {
    id: 8,
    text: "Pain is inevitable. Suffering is optional.",
    token: null,
    author: "Haruki Murakami",
  },
  {
    id: 9,
    text: "You should enjoy the little detours. Because that's where you'll find the things more important than what you want.",
    token: null,
    author: "Ging Freecss (Hunter x Hunter)",
  },
  {
    id: 10,
    text: "There is no growth without pain.",
    token: null,
    author: "Bruce Lee",
  },
  {
    id: 11,
    text: "Sometimes the right path is not the easiest one.",
    token: null,
    author: "Grandmother Willow (Pocahontas)",
  },
  {
    id: 12,
    text: "Power comes in response to a need, not a desire.",
    token: null,
    author: "Goku (Dragon Ball Z)",
  },
  {
    id: 13,
    text: "What we do in life echoes in eternity.",
    token: null,
    author: "Maximus (Gladiator)",
  },
  {
    id: 14,
    text: "A man who stands for nothing will fall for anything.",
    token: null,
    author: "Malcolm X",
  },
  {
    id: 15,
    text: "Bang.",
    token: null,
    author: "Spike Spiegel (Cowboy Bebop)",
  },
  {
    id: 16,
    text: "The world isn't perfect. But it's there for us, doing the best it can.",
    token: null,
    author: "Roy Mustang (Fullmetal Alchemist)",
  },
  {
    id: 17,
    text: "You either die a hero, or you live long enough to see yourself become the villain.",
    token: null,
    author: "Harvey Dent (The Dark Knight)",
  },
  {
    id: 18,
    text: "I’m not in danger, Skyler. I am the danger.",
    token: null,
    author: "Walter White (Breaking Bad)",
  },
  {
    id: 19,
    text: "It’s not about how hard you hit. It’s about how hard you can get hit and keep moving forward.",
    token: null,
    author: "Rocky Balboa",
  },
  {
    id: 20,
    text: "In the world of ninjas, those who break the rules are scum. But those who abandon their friends are worse than scum.",
    token: null,
    author: "Kakashi Hatake (Naruto)",
  },
];

export async function getAllQuotes() {
  return quotes;
}

export async function addQuote(newQuote) {
  const newQoute = {
    ...newQuote,
    id: quotes.length + 1,
  };

  quotes = [newQoute, ...quotes];
}
