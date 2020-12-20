/*
  Types that extend Victory's interfaces.
  Victory's TypeScript interfaces are not very good. Many of the interfaces
  are plain wrong and they use the type 'any' quite liberally.
  These custom interfaces extend Victory's interfaces in order to make them
  more usable in this application.
*/

import { BarProps, VictoryScatterProps } from 'victory'
import { Datum } from './dataTypes'

export interface DatumProps {
  datum: Datum
}

export interface BarPropsExt extends BarProps {
  datum: Datum,
  style: {
    fill?: string
  }
}

export interface ScatterPropsExt extends VictoryScatterProps, DatumProps {
}