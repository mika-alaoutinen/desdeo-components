import React from 'react'
import { VictoryAxis, VictoryBrushLine, VictoryLine } from 'victory'

import { ParallelAxesData } from '../../../types/dataTypes'
import { DomainTuple } from '../../../types/victoryTypes'

type OnDomainChange = (domainTuple: DomainTuple, name?: string) => void

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
    // The domain numbers receoved from the component are in the wrong order of [max, min].
    // Flip the numbers around so that they make sense as a range.
    onBrushDomainChange={(domain, props) => {
      // Stops the application from crashing if the brush is clicked instead of clicked and dragged
      if (!domain) {
        return
      }
      const domainTuple: DomainTuple = [domain[1] as number, domain[0] as number]
      return onDomainChange(domainTuple, props?.name)
    }}
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