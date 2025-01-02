interface OddMap {
  [key: string | number]: number;
}

export default function filtrarPares<T extends string | number>(
  array: T[]
): T[] {
  const oddsValues = array.reduce((map: OddMap, current) => {
    map[current] = (map[current] || 0) + 1;
    return map;
  }, {});

  return Object.entries(oddsValues).reduce((odds: T[], [key, value]) => {
    if (value % 2 === 0) {
      const parsedKey = !isNaN(Number(key)) ? Number(key) : key;

      odds.push(parsedKey as T);
    }
    return odds;
  }, []);
}


console.log(filtrarPares([1, 1, 2, 3, 4, 4, 5]));

