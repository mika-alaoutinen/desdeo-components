import { Coordinate } from '../../data/dataTypes'

// Examples for how to style individual data points in a chart
export const mapFillStyle = (coordinate: Coordinate): string =>
  coordinate.y % 2 === 0 ? 'black' : 'tomato'

export const mapOpacityStyle = (coordinate: Coordinate): number =>
  coordinate.y % 2 === 0 ? 1 : 0.7