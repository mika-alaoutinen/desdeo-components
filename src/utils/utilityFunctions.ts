export const createIntegerArray = (max: number): number[] =>
  max < 0 ? [] : createRange(max)

const createRange = (max: number): number[] => {
  const numbersFromZero = [...Array(max).keys()]
  return numbersFromZero.map(n => n + 1)
}