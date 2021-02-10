import { Orientation, Padding } from '../../types/layoutTypes'

// If layout is horizontal, add extra padding left for axis labels
const horizontalPadding: Padding = {
  top: 25,
  left: 75,
  right: 75,
  bottom: 25
}

const verticalPadding: Padding = {
  top: 25,
  left: 50,
  right: 50,
  bottom: 75
}

// Default orientation is horizontal
export const calculatePadding = (orientation: Orientation): Padding =>
  orientation === 'vertical' ? verticalPadding : horizontalPadding