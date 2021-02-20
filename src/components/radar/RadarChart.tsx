import React from 'react'
import { VictoryArea, VictoryChart, VictoryGroup, VictoryLabel, VictoryPolarAxis } from 'victory'
import { MATERIAL_THEME } from '../../styles/victoryStyles'
import { Attribute, AttributeSet, MaxValue } from '../../types/dataTypes'

interface Props {
  data: AttributeSet[]
  maxValues: MaxValue[]
  showSpokeLines: boolean
}

const RadarChart: React.FC<Props> = ({ data, maxValues, showSpokeLines }) => {
  const drawAreas = (): JSX.Element[] => data.map(({ attributes }, i) => drawArea(attributes, i))

  const drawArea = (attributes: Attribute[], key: number): JSX.Element => (
    <VictoryArea key={key} data={attributes} />
  )

  const drawPolarAxes = (): JSX.Element[] =>
    maxValues.map(({ label }, i) => drawPolarAxix(label, i))

  const drawPolarAxix = (label: string, n: number): JSX.Element => (
    <VictoryPolarAxis
      key={n}
      dependentAxis
      style={{
        axisLabel: { padding: 10 },
        axis: { stroke: 'none' },
        grid: { stroke: 'grey', strokeWidth: 0.25, opacity: 0.5 },
      }}
      tickLabelComponent={<VictoryLabel labelPlacement='vertical' />}
      labelPlacement='perpendicular'
      axisValue={n + 1}
      label={label}
      tickFormat={tick => Math.ceil(tick * maxValues[n].value)}
      tickValues={[0.25, 0.5, 0.75]}
    />
  )

  const drawSpokeLines = (): JSX.Element => (
    <VictoryPolarAxis
      labelPlacement='parallel'
      tickFormat={() => ''}
      style={{
        axis: { stroke: 'none' },
        grid: { stroke: 'grey', opacity: 0.5 },
      }}
    />
  )

  return (
    <VictoryChart polar theme={MATERIAL_THEME} domain={{ y: [0, 1] }}>
      <VictoryGroup style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}>
        {drawAreas()}
      </VictoryGroup>

      {drawPolarAxes()}
      {showSpokeLines && drawSpokeLines()}
    </VictoryChart>
  )
}

export default RadarChart
