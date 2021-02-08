import React from 'react'
import { NormalizedData } from 'types/dataTypes'
import { VictoryBrushLine, VictoryLine } from 'victory'

import { Domain } from './ParallelAxes'

type OnDomainChange = (domainTuple: Domain, name?: string) => void

const drawBrushLines = (
  attribute: string, onDomainChange: OnDomainChange
): JSX.Element =>
  <VictoryBrushLine
    name={attribute}
    onBrushDomainChange={(domain, props) =>
      onDomainChange(domain as [number, number], props?.name)}
    width={20}
  />

const drawLines = (
  datasets: NormalizedData[], activeSets: string[]
): JSX.Element[] =>
  datasets.map(dataset =>
    <VictoryLine
      key={dataset.name}
      name={dataset.name}
      data={dataset.data}
      groupComponent={<g/>}
      style={{ data: {
        stroke: 'tomato',
        opacity: activeSets.includes(dataset.name) ? 1 : 0.2
      } }}
    />
  )

export {
  drawBrushLines, drawLines
}