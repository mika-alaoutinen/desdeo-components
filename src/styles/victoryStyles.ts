import { VictoryTheme } from 'victory'
import { Coordinate } from '../types/dataTypes'

// Data selection
const SELECTED_COLOR = 'tomato'
const NOT_SELECTED_COLOR = 'black'
const SELECTED_OPACITY = 1
const NOT_SELECTED_OPACITY = 0.5

// Style constants
export const DEFAULT_COLOR_SCALE = 'qualitative'
export const DOMAIN_PADDING = 20
export const MATERIAL_THEME = VictoryTheme.material

export const mapFillStyle = ({ isSelected }: Coordinate): string | null =>
  isSelected ? SELECTED_COLOR : NOT_SELECTED_COLOR

export const mapOpacity = ({ isSelected }: Coordinate): number =>
  isSelected ? SELECTED_OPACITY : NOT_SELECTED_OPACITY
