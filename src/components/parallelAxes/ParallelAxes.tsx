import React, { useEffect, useState } from 'react'
import { VictoryChart } from 'victory'

import { AttributeSet, Filter } from '../../types/dataTypes'
import { DomainTuple } from '../../types/victoryTypes'
import AttributeLabels from './AttributeLabels'
import { layout } from './layout'
import { drawAxis, drawBrushLine, drawLine } from './rendering'
import { OnChangeHandler, OnLineClickHandler } from './types'
import { addNewFilters, calculateAxisOffset, getActiveDatasets } from './utils'

interface Props {
  attributes: string[]
  data: AttributeSet[]
  maxTickValues: number[]
  normalizedData: AttributeSet[]
  onChange: OnChangeHandler
  onLineClick: OnLineClickHandler
}

const ParallelAxes: React.FC<Props> = ({
  attributes,
  data,
  maxTickValues,
  normalizedData,
  onChange,
  onLineClick,
}) => {
  const [activeDatasets, setActiveDataSets] = useState<AttributeSet[]>([])
  const [filters, setFilters] = useState<Filter[]>([])

  useEffect(() => {
    setActiveDataSets(normalizedData)
  }, [normalizedData])

  // Event handler for vertical brush filters
  const onDomainChange = (domain: DomainTuple, name: string): void => {
    setFilters(addNewFilters(filters, domain, name))
    const activeSets = getActiveDatasets(normalizedData, filters)
    doCallback(activeSets)
    setActiveDataSets(activeSets)
  }

  // Limit the number of callbacks by triggering them only when active datasets have changed
  const doCallback = (activeSets: AttributeSet[]): void => {
    if (activeSets.length !== activeDatasets.length) {
      const activeLabels = activeSets.map(attributeSet => attributeSet.label)
      const unnormalizedActiveSets = data.filter(({ label }) => activeLabels.includes(label))
      onChange(unnormalizedActiveSets)
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
    normalizedData.map(dataset => {
      const opacity = activeDatasets.includes(dataset) ? 1 : 0.2
      return drawLine(dataset, opacity, onLineClick)
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
