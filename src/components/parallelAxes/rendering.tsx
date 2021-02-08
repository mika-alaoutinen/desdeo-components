import React from 'react'
import { NormalizedData } from 'types/dataTypes'
import { VictoryAxis, VictoryBrushLine, VictoryLine } from 'victory'

import { Domain } from './ParallelAxes'

type OnDomainChange = (domainTuple: Domain, name?: string) => void

const drawAxis = (
  attribute: string, offsetX: number, tickValue: number, onDomainChange: OnDomainChange
): JSX.Element =>
  <VictoryAxis
    key={attribute}
    axisComponent={drawBrushLine(attribute, onDomainChange)}
    dependentAxis
    offsetX={offsetX}
    style={{
      tickLabels: {
        fontSize: 15,
        padding: 15,
        pointerEvents: 'none'
      },
    }}
    tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
    tickFormat={(tick) => Math.round(tick * tickValue)}
  />

const drawBrushLine = (
  attribute: string, onDomainChange: OnDomainChange
): JSX.Element =>
  <VictoryBrushLine
    name={attribute}
    onBrushDomainChange={(domain, props) =>
      onDomainChange(domain as [number, number], props?.name)}
    width={20}
  />

const drawLine = (
  { data, name }: NormalizedData, opacity: number
): JSX.Element =>
  <VictoryLine
    key={name}
    name={name}
    data={data}
    groupComponent={<g/>}
    style={{ data: {
      stroke: 'tomato',
      opacity: opacity
    } }}
  />

export { drawAxis, drawBrushLine, drawLine }