import React from 'react'
// This error is a bug with Victory
import { VictorySelectionContainer } from 'victory'

import ChartContainer from './ChartContainer'

const SelectionContainer: React.FC = ({ ...props }) => {
  return (
    <ChartContainer
      { ...props }
      component={<VictorySelectionContainer />}
    />
  )
}

export default SelectionContainer