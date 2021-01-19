import React from 'react'
import { VictoryAxis, VictoryStack } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { OnClickHandler } from '../../types/chartTypes'
import { CoordinateSet } from '../../types/dataTypes'
import { drawBar } from './renderingFunctions'
import { createIntegerArray, getDatasetLength } from './utils'

export interface Props {
  datasets: CoordinateSet[],
  onClick: OnClickHandler
}

const StackedBarChart: React.FC<Props> = ({ datasets, onClick }) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((row, i) => drawBar(row, onClick, i))

  return (
    <ChartContainer>

      <VictoryAxis
        tickFormat={[ 'Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4' ]}
        tickValues={createIntegerArray(getDatasetLength(datasets))}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={x => `$${x / 1000}k`}
      />

      <VictoryStack>
        {drawBars()}
      </VictoryStack>

    </ChartContainer>
  )
}

export default StackedBarChart