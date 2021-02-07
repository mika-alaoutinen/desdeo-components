import { Coordinate } from 'types/dataTypes'
import { VictoryTheme } from 'victory'

// Style constants
export const DOMAIN_PADDING = 20
export const MATERIAL_THEME = VictoryTheme.material

// Data selection
export const SELECTED_COLOR = 'tomato'
export const NOT_SELECTED_COLOR = 'black'
export const SOLID = 1
export const OPAQUE = 0.7

// Examples for how to style individual data points in a chart
export const mapFillStyle = (datum: Coordinate): string =>
  datum.isSelected ? SELECTED_COLOR : NOT_SELECTED_COLOR

export const mapOpacityStyle = (datum: Coordinate): number =>
  datum.y % 2 === 0 ? SOLID: OPAQUE