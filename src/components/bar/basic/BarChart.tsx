import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'

import { createCoordinateLabel } from '../rendering'
import { drawTooltip } from '../../victory/components'
import { mapCoordinateToValue } from '../../../data/outputTransformations'
import {
  DOMAIN_PADDING, mapFillStyle, MATERIAL_THEME
} from '../../../styles/victoryStyles'
import { ValueChart } from '../../../types/chartTypes'

const BarChart: React.FC<ValueChart> = ({ data, onClick, xAxisLabel }) => (
  <VictoryChart
    domainPadding={DOMAIN_PADDING}
    theme={MATERIAL_THEME}
  >

  <VictoryAxis
    label={xAxisLabel}
    style={{
      ticks: { stroke: 'transparent' },
      tickLabels: { fill: 'transparent' }
    }}
  />

  <VictoryAxis dependentAxis />

    <VictoryBar
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }) => onClick(mapCoordinateToValue(datum))
            }]
          }
        },
      ]}
      labelComponent={drawTooltip()}
      labels={({ datum }) => createCoordinateLabel(datum)}
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum)
        }
      }}
    />

  </VictoryChart>
)

export default BarChart