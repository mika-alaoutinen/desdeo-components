import React from 'react'
import { VictoryAxis, VictoryBar, VictoryStack } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { TestData } from './data'
import { createTickValues } from './utils'

interface Props {
  data: TestData[],
  onClick?: () => void
}

const BarChart: React.FC<Props> = ({ data, onClick }) => {

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
      <ChartContainer>
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
      </ChartContainer>

      <p>
        <button onClick={onClick}>Update</button>
      </p>
    </div>
  )
}

export default BarChart