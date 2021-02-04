import React from 'react'
import { VictoryGroup } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { OnClickHandler } from '../../types/chartTypes'
import { CoordinateSet } from '../../types/dataTypes'
import { padding } from './layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from './renderingFunctions'
import { createAlternativesLabels, createCriterialabels, } from '../../utils/dataTransformations'

interface Props {
  datasets: CoordinateSet[],
  grouping: 'alternatives' | 'criteria',
  onClick: OnClickHandler,
  horizontal?: boolean
}

const GroupedBarChart: React.FC<Props> = ({
  datasets, grouping, onClick, horizontal
}) => {

  const createLabels = (): string[] => {
    if (grouping === 'alternatives') {
      // Expecting all datasets to have equal number of items
      return createAlternativesLabels(datasets[0].data.length)
    } else if (grouping === 'criteria') {
      return createCriterialabels(datasets)
    }
    return []
  }

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <ChartContainer
      padding={horizontal ? padding : undefined}
    >

      {drawMainAxis(datasets, createLabels())}
      {drawDependentAxis()}

      <VictoryGroup
        // colorScale={[ 'brown', 'tomato', 'gold' ]}
        horizontal={horizontal}
        labelComponent={drawTooltip(horizontal)}
        offset={8}
        style={{
          data: {
            width: 6
          }
        }}
      >
        {drawBars()}
      </VictoryGroup>

    </ChartContainer>
  )
}

export default GroupedBarChart