// Types that extend Victory's interfaces.
// Victory's interfaces include fields that are of type 'any'.

import { BarProps } from 'victory'

export interface BarPropsExt extends BarProps {
  style: {
    fill?: string
  }
}