import React from 'react'
import { VictoryArea, VictoryChart, VictoryGroup, VictoryLabel, VictoryPolarAxis } from 'victory'
import { MATERIAL_THEME } from '../../styles/victoryStyles'
import { AttributeSet, MaxValue } from '../../types/dataTypes'

interface Props {
  data: AttributeSet[]
  maxValues: MaxValue[]
}

const RadarChart: React.FC<Props> = ({ data, maxValues }) => {
  return (
    <VictoryChart polar theme={MATERIAL_THEME} domain={{ y: [0, 1] }}>
      <VictoryGroup style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}>
        {data.map((data, i) => (
          <VictoryArea key={i} data={data.attributes} />
        ))}
      </VictoryGroup>

      {maxValues.map((key, i) => {
        return (
          <VictoryPolarAxis
            key={i}
            dependentAxis
            style={{
              axisLabel: { padding: 10 },
              axis: { stroke: 'none' },
              grid: { stroke: 'grey', strokeWidth: 0.25, opacity: 0.5 },
            }}
            tickLabelComponent={<VictoryLabel labelPlacement='vertical' />}
            labelPlacement='perpendicular'
            axisValue={i + 1}
            label={key.label}
            tickFormat={tick => Math.ceil(tick * maxValues[i].value)}
            tickValues={[0.25, 0.5, 0.75]}
          />
        )
      })}

      <VictoryPolarAxis
        labelPlacement='parallel'
        tickFormat={() => ''}
        style={{
          axis: { stroke: 'none' },
          grid: { stroke: 'grey', opacity: 0.5 },
        }}
      />
    </VictoryChart>
  )
}

export default RadarChart
