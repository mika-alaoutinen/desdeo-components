import { VictoryTheme } from 'victory'

import { Coordinate } from '../types/dataTypes'

// Style constants
export const DOMAIN_PADDING = 20
export const MATERIAL_THEME = VictoryTheme.material

// Data selection
export const SELECTED_COLOR = 'tomato'
export const NOT_SELECTED_COLOR = 'black'

export const mapFillStyle = (datum: Coordinate): string =>
  datum.isSelected ? SELECTED_COLOR : NOT_SELECTED_COLOR
