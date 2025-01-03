const MAP = [
 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
 'u', 'v', 'w', 'x', 'y', 'z'
];
export default function letrasPorNumeros(string: string): string {
  const parsedString = string.replaceAll(/\s/g, "").toLowerCase();

  return Array.from(parsedString).reduce(
    (acc, letter) => acc.concat(`${MAP.indexOf(letter) + 1} `),
    ""
  ).trim();
}
