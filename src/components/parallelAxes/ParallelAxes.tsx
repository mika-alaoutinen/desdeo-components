import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryChart } from 'victory'

import AttributeLabels from './AttributeLabels'
import { addNewFilters, calculateAxisOffset, getActiveDatasets } from './utils'
import { getMaxAttributeValues } from './dataParser'
import { normalizeData } from './dataTransformations'
import { layout } from './layout'
import { drawAxis, drawBrushLine, drawLine } from './rendering'
import { Filter, ParallelAxesData } from 'types/dataTypes'

interface Props {
  attributes: string[],
  data: ParallelAxesData[]
}

export type Domain = [number, number]

const ParallelAxes: React.FC<Props> = ({ attributes, data }) => {
  const [ activeDatasets, setActiveDataSets ] = useState<string[]>([])
  const [ filters, setFilters ] = useState<Filter[]>([])

  // Init constants
  const datasets = normalizeData(data)
  const maxAttributeValues = getMaxAttributeValues(data)

  // All datasets are active on component load
  useEffect(() => {
    setActiveDataSets(datasets.map(dataset => dataset.name))
  }, [])

  // Event handler for vertical brush filters
  const onDomainChange = (domainTuple: Domain, name?: string): void => {
    if (!name || !domainTuple) {
      return
    }
    // The domain numbers emitted by VictoryBrushLine are in the wrong order of [max, min].
    // Flip the numbers around so that they make sense as a range.
    const domain: [number, number] = [domainTuple[1], domainTuple[0]]
    setFilters(addNewFilters(filters, domain, name))
    setActiveDataSets(getActiveDatasets(datasets, filters))
  }

  const drawAxesOld = (): JSX.Element[] =>
    attributes.map((attribute, i) =>
      <VictoryAxis
        key={attribute}
        axisComponent={drawBrushLine(attribute, onDomainChange)}
        dependentAxis
        offsetX={calculateAxisOffset(i, attributes.length)}
        style={{
          tickLabels: {
            fontSize: 15,
            padding: 15,
            pointerEvents: 'none'
          },
        }}
        tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
        tickFormat={(tick) => Math.round(tick * maxAttributeValues[i])}
      />
    )

  const drawAxes = (): JSX.Element[] =>
    attributes.map((attribute, i) => {
      const offsetX = calculateAxisOffset(i, attributes.length)
      const tickValue = maxAttributeValues[i]
      return drawAxis(attribute, offsetX, tickValue, onDomainChange)
    })

  const drawLines = (): JSX.Element[] =>
    datasets.map(dataset => {
      const opacity = activeDatasets.includes(dataset.name) ? 1 : 0.2
      return drawLine(dataset, opacity)
    })

  return (
    <VictoryChart
      domain={{ y: [0, 1.1] }}
      height={layout.height}
      width={layout.width}
      padding={layout.padding}
    >
      <AttributeLabels paddingTop={layout.padding.top - 40} />
      {/* Lines MUST be drawn before axes, or the brush functionality breaks! */}
      {drawLines()}
      {drawAxes()}
    </VictoryChart>
  )
}

export default ParallelAxes