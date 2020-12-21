/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
// This error is a bug with Victory
import { VictorySelectionContainer } from 'victory'
import { selectionHandler } from '../events/onSelection'
import { Datum } from '../types/dataTypes'

import ChartContainer from './ChartContainer'

// The points argument in onSelection is always an array with a length of one.
type Points = [ Point ]

interface Point {
  childName: string,
  data: Datum[],
  eventKey: number[]
}

const SelectionContainer: React.FC = ({ ...props }) => {
  
  const selectionContainer = (): JSX.Element =>
    <VictorySelectionContainer
      onSelection={(points: Points) => selectionHandler(points[0].data)}
    />
  
  return (
    <ChartContainer
      { ...props }
      component={selectionContainer()}
    />
  )
}

export default SelectionContainer