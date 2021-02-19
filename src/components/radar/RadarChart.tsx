import React from 'react'
import {
  VictoryArea,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory'
import { MATERIAL_THEME } from '../../styles/victoryStyles'
import { characterData } from './radarData'

const RadarChart: React.FC = () => {
  const getMaxima = data => {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map(d => d[key])
      return memo
    }, {})
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key])
      return memo
    }, {})
  }

  const processData = data => {
    const maxByGroup = this.getMaxima(data)
    const makeDataArray = d => {
      return Object.keys(d).map(key => {
        return { x: key, y: d[key] / maxByGroup[key] }
      })
    }
    return data.map(datum => makeDataArray(datum))
  }

  return (
    <VictoryChart polar theme={MATERIAL_THEME} domain={{ y: [0, 1] }}>
      <VictoryGroup style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}>
        {this.state.data.map((data, i) => {
          return <VictoryArea key={i} data={data} />
        })}
      </VictoryGroup>
      {Object.keys(this.state.maxima).map((key, i) => {
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
            label={key}
            tickFormat={t => Math.ceil(t * this.state.maxima[key])}
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
