export function convertDegrees(celcius) {
  return (celcius / 5) * 9 + 32;
}

export function convertDate(date) {
  return `${date.substring(8)}/${date.substring(5, 7)}`;
}
