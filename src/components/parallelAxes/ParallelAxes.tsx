import React, { useEffect, useState } from 'react'
import { VictoryChart } from 'victory'

import { AttributeSet, Filter } from '../../types/dataTypes'
import { DomainTuple } from '../../types/victoryTypes'
import AttributeLabels from './AttributeLabels'
import { layout } from './layout'
import { drawAxis, drawBrushLine, drawLine } from './rendering'
import { addNewFilters, calculateAxisOffset, getActiveDatasets } from './utils'

interface Props {
  attributes: string[]
  data: AttributeSet[]
  maxTickValues: number[]
}

const ParallelAxes: React.FC<Props> = ({ attributes, data, maxTickValues }) => {
  const [activeDatasets, setActiveDataSets] = useState<string[]>([])
  const [filters, setFilters] = useState<Filter[]>([])

  // All datasets are active on component load
  useEffect(() => {
    setActiveDataSets(data.map(dataset => dataset.label))
  }, [data])

  // Event handler for vertical brush filters.
  // Limit the number of callbacks by checking if active datasets have actually changed.
  const onDomainChange = (domain: DomainTuple, name: string): void => {
    setFilters(addNewFilters(filters, domain, name))
    const activeSets = getActiveDatasets(data, filters)
    if (activeSets.length !== activeDatasets.length) {
      setActiveDataSets(activeSets)
      // Emit callback function
    }
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
