export default function esIsograma(string: string): boolean {
  const moreThanTwoWords = string.split(" ")[1] ? true : false;

  if (moreThanTwoWords) {
    return false;
  }

  const formatedString = string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  
  return new Set([...formatedString]).size === string.length

}
