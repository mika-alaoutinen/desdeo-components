// Types that extend Victory's interfaces.
// Victory's interfaces include fields that are of type 'any'.

import { BarProps } from 'victory'
import { Datum } from './dataTypes'

export interface BarPropsExt extends BarProps {
  datum: Datum,
  style: {
    fill?: string
  }
}