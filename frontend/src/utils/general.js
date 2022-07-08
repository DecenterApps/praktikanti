import Dec from 'decimal.js';

export const formatNumber = (str) => {
  if (!str) throw new Error(`Invalid number: "${str}"`);
  return (new Dec(str)).toDP(2).toString();
}
