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

const calculatePadding = (orientation: Orientation): Padding =>
  orientation === 'vertical' ? verticalPadding : horizontalPadding

/**
 * Orientation is a required parameter of my bar chart components that is used to
 * render Victory's bar components. Orientation determines the value of Victory's
 * "horizontal" property, which dictates the orientation of a single bar. From
 * Victory's point of view, "horizontal" means that bars should be laid out
 * sideways, growing from left to right.
 *
 * This is probably not what users of my component library expect to happen when
 * they ask for a "horizontal bar chart". Therefore, let's flip the orientation
 * around so it makes sense for the chart.
 *
 * @param orientation of chart
 */
const swapOrientation = (orientation: Orientation): Orientation =>
  orientation === 'vertical' ? 'horizontal' : 'vertical'

export { calculatePadding, swapOrientation }