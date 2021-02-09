import React from 'react'
import { ParallelAxesData } from 'types/dataTypes'
import { VictoryAxis, VictoryBrushLine, VictoryLine } from 'victory'

import { Domain } from './ParallelAxes'

type OnDomainChange = (domainTuple: Domain, name?: string) => void

const drawAxis = (
  axisComponent: JSX.Element, offsetX: number, tickValue: number
): JSX.Element =>
  <VictoryAxis
    key={axisComponent.key}
    axisComponent={axisComponent}
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
    key={attribute}
    name={attribute}
    onBrushDomainChange={(domain, props) =>
      onDomainChange(domain as [number, number], props?.name)}
    width={20}
  />

const drawLine = (
  { attributes, label }: ParallelAxesData, opacity: number
): JSX.Element =>
  <VictoryLine
    key={label}
    name={label}
    data={attributes}
    groupComponent={<g/>}
    style={{ data: {
      stroke: 'tomato',
      opacity: opacity
    } }}
  />

export { drawAxis, drawBrushLine, drawLine }