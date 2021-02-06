import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryBrushLine, VictoryChart, VictoryLine } from 'victory'

import AttributeLabels from './AttributeLabels'
import { getAttributeNames, getMaxAttributeValues } from './dataParser'
import { layout } from './layout'
import { addNewFilters, calculateAxisOffset, getActiveDatasets } from './utils'
import { normalizeData } from './dataTransformations'
import { Filter, ParallelAxesData } from 'types/dataTypes'

interface Props {
  data: ParallelAxesData[]
}

type Domain = [number, number] | null

const ParallelAxes: React.FC<Props> = ({ data }) => {
  const [ activeDatasets, setActiveDataSets ] = useState<string[]>([])
  const [ filters, setFilters ] = useState<Filter[]>([])

  // Init constants
  const datasets = normalizeData(data)
  const attributeNames = getAttributeNames(data)
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

  // Draw chart elements. For whatever reason putting the rendering code
  // into a separate React component destroyes the layout of all charts.
  const drawAxes = (): JSX.Element[] =>
    attributeNames.map((attribute, i) =>
      <VictoryAxis dependentAxis
        key={i}
        axisComponent={drawBrushLines(attribute)}
        offsetX={calculateAxisOffset(i, attributeNames.length)}
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

  const drawBrushLines = (attribute: string): JSX.Element =>
    <VictoryBrushLine
      name={attribute}
      onBrushDomainChange={(domain, props) =>
        onDomainChange(domain as [number, number], props?.name)}
      width={20}
    />

const drawLines = (): JSX.Element[] =>
  datasets.map(dataset =>
    <VictoryLine
      key={dataset.name}
      name={dataset.name}
      data={dataset.data}
      groupComponent={<g/>}
      style={{ data: {
        stroke: 'tomato',
        opacity: activeDatasets.includes(dataset.name) ? 1 : 0.2
      } }}
    />
  )

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