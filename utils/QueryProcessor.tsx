export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My andrew id is: malkhate"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Maryam"
    );
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g).map(Number);
    const largest_number = Math.max(...numbers);
    return largest_number;
  }

  return "";

}

