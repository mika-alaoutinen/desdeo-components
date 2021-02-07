import { Orientation, Padding } from 'types/layoutTypes'

// If layout is horizontal, add extra padding left for axis labels
const horizontalPadding: Padding = {
  top: 25,
  left: 75,
  right: 25,
  bottom: 25
}

const verticalPadding: Padding = {
  top: 25,
  left: 25,
  right: 25,
  bottom: 75
}

// Default orientation is horizontal
export const calculatePadding = (orientation: Orientation | undefined): Padding =>
  orientation === 'vertical' ? verticalPadding : horizontalPadding