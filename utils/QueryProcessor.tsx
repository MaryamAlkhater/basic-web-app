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
  
  const multiply = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiply) {
    const x: number = parseInt(multiply[1]);
    const y: number = parseInt(multiply[2]);
    return (x * y).toString();
  }

  const sc = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (sc) {
    const x: number = parseInt(sc[1]);
    const y: number = parseInt(sc[2]);
    const z: number = parseInt(sc[3]);
    const a: number = parseInt(sc[4]);
    const b: number = parseInt(sc[5]);
    const c: number = parseInt(sc[6]);
    const numbers = [x, y, z, a, b, c];
    for (let i = 0; i < numbers.length; i++) {
      if (Math.sqrt(numbers[i]) % 1 === 0 && Math.cbrt(numbers[i]) % 1 === 0) {
        return numbers[i].toString();
      }
    }
  }

  const prime = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (prime) {
    const x: number = parseInt(prime[1]);
    const y: number = parseInt(prime[2]);
    const z: number = parseInt(prime[3]);
    const a: number = parseInt(prime[4]);
    const b: number = parseInt(prime[5]);
    const numbers = [x, y, z, a, b];
    let primeNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        primeNumbers.push(numbers[i]);
      }
    }
    return primeNumbers.join(", ");
  }

  const minus = query.match(/What is (\d+) minus (\d+)/);
  if (minus) {
    const x: number = parseInt(minus[1]);
    const y: number = parseInt(minus[2]);
    return (x - y).toString();
  }
  return "";
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

