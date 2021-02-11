const range = (max: number): number[] =>
  max < 0
    ? []
    : [...Array(max).keys()].map(n => n + 1)

const replaceSpacesWithLineBreaks = (stringWithSpaces: string): string =>
  stringWithSpaces
    .replace(/\s+/g,'\n')
    .trim()

export { range, replaceSpacesWithLineBreaks }