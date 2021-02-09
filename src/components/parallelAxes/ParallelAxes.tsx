import React, { useEffect, useState } from 'react'
import { VictoryChart } from 'victory'

import AttributeLabels from './AttributeLabels'
import { layout } from './layout'
import { drawAxis, drawBrushLine, drawLine } from './rendering'
import { Filter, ParallelAxesData } from 'types/dataTypes'
import { addNewFilters, calculateAxisOffset, getActiveDatasets } from './utils'

interface Props {
  attributes: string[],
  data: ParallelAxesData[],
  maxTickValues: number[]
}

export type Domain = [number, number]

const ParallelAxes: React.FC<Props> = ({ attributes, data, maxTickValues }) => {
  const [ activeDatasets, setActiveDataSets ] = useState<string[]>([])
  const [ filters, setFilters ] = useState<Filter[]>([])

  // All datasets are active on component load
  useEffect(() => {
    setActiveDataSets(data.map(dataset => dataset.label))
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
    setActiveDataSets(getActiveDatasets(data, filters))
  }

  const drawAxes = (): JSX.Element[] =>
    attributes.map((attribute, i) => {
      const brushLine = drawBrushLine(attribute, onDomainChange)
      const offsetX = calculateAxisOffset(i, attributes.length)
      const tickValue = maxTickValues[i]
      return drawAxis(brushLine, offsetX, tickValue)
    })

  const drawLines = (): JSX.Element[] =>
    data.map(dataset => {
      const opacity = activeDatasets.includes(dataset.label) ? 1 : 0.2
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