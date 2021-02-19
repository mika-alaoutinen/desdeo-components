/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { VictoryArea, VictoryChart, VictoryGroup, VictoryLabel, VictoryPolarAxis } from 'victory'
import { MATERIAL_THEME } from '../../styles/victoryStyles'
import { characterData } from './radarData'

const RadarChart: React.FC = () => {
  const getMaxima = (data: any[]) => {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d: { [x: string]: any }) => d[key])
      return memo
    }, {})
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key])
      return memo
    }, {})
  }

  const processData = (data: any[]) => {
    const maxByGroup = getMaxima(data)
    const makeDataArray = (d: { [x: string]: number }) => {
      return Object.keys(d).map(key => {
        return { x: key, y: d[key] / maxByGroup[key] }
      })
    }
    return data.map((datum: any) => makeDataArray(datum))
  }

  const data = processData(characterData)
  const maxima = getMaxima(characterData)

  return (
    <VictoryChart polar theme={MATERIAL_THEME} domain={{ y: [0, 1] }}>
      <VictoryGroup style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}>
        {data.map((data, i) => (
          <VictoryArea key={i} data={data} />
        ))}
      </VictoryGroup>

      {Object.keys(maxima).map((key, i) => {
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
            tickFormat={t => Math.ceil(t * maxima[key])}
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
