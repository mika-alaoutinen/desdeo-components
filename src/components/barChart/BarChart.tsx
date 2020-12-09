import React from 'react'
import {
  VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme
} from 'victory'

import { Props } from './types'
import { createTickValues } from './utils'

const BarChart: React.FC<{ props: Props }> = ({ props }) => {
  const { data, onClick } = props

  const mapBarCharts = (): JSX.Element[] =>
    data.map(row =>
      <VictoryBar
        key={row.year}
        data={row.data}
        x='quarter'
        y='earnings'
      />
    )

  return (
    <div>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickFormat={[ 'Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4' ]}
          tickValues={createTickValues(data)}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={x => `$${x / 1000}k`}
        />

        <VictoryStack>
          {mapBarCharts()}
        </VictoryStack>
      </VictoryChart>

      <p>
        <button onClick={onClick}>Update</button>
      </p>
    </div>
  )
}

export default BarChart