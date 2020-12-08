import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory'

import { Props } from './types'

const BarChart: React.FC<{ props: Props }> = ({ props }) => {
  const { data } = props

  const createTickValues = (): number[] => {
    const numbersFromZero = [...Array(data.length).keys()]
    return numbersFromZero.map(n => n + 1)
  }
  
  return (
    <div>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickFormat={[ 'Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4' ]}
          tickValues={createTickValues()}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={x => `$${x / 1000}k`}
        />
        <VictoryBar
          data={data}
          x='quarter'
          y='earnings'
        />
      </VictoryChart>
    </div>
  )
}

export default BarChart