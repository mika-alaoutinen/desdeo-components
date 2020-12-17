import { Datum } from '../../types/dataTypes'

// Examples for how to style individual data points in a chart
export const mapFillStyle = (datum: Datum): string =>
  datum.isSelected ? 'black' : 'tomato'

export const mapOpacityStyle = (datum: Datum): number =>
  datum.y % 2 === 0 ? 1 : 0.7