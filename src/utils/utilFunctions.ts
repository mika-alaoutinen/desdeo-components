const range = (max: number): number[] =>
  max < 0
    ? []
    : [...Array(max).keys()].map(n => n + 1)

export { range }