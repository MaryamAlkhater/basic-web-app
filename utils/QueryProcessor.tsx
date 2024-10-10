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

  const addMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    const z: number = parseInt(addMatch[3]);
    const largest_number = Math.max(x, y, z);
    return largest_number.toString();
  }

  const addMatch2 = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch2) {
    const x: number = parseInt(addMatch2[1]);
    const y: number = parseInt(addMatch2[2]);
    return (x+y).toString();
  }
  
  return "";

}

