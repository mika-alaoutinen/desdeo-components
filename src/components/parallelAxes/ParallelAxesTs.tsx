import React, { useEffect, useState } from 'react'
import {
  VictoryAxis, VictoryBrushLine, VictoryChart, VictoryLabel, VictoryLine
} from 'victory'

import { NormalizedData, ParallelAxesData } from '../../types/dataTypes'
import { normalizeData } from './dataTransformations'
import { Filter } from './ParallelAxes'
import { getMaxAttributes } from './utils'

const attributes = ['strength', 'intelligence', 'luck']
const height = 500
const width = 500
const padding = { top: 100, left: 50, right: 50, bottom: 50 }

interface Props {
  data: ParallelAxesData[]
}

const ParallelAxesTs: React.FC<Props> = ({ data }) => {
  const [ activeDatasets, setActiveDataSets ] = useState<string[]>([])
  const [ datasets, setDatasets ] = useState<NormalizedData[]>([])
  const [ filters, setFilters ] = useState<Filter[]>([])
  const [ maximumValues, setMaximumValues ] = useState<number[]>([])

  useEffect(() => {
    setMaximumValues(getMaxAttributeValues(data))
    setDatasets(normalizeData(data))
  }, [])

  const addNewFilters = (domain: [number, number], name: string): Filter[] => {
    const extent = domain && Math.abs(domain[1] - domain[0])
    const minVal = 1 / Number.MAX_SAFE_INTEGER
    const maxDomainValue = 10

    // If there is no existing filter for an attribute, create one
    if (!filters.some(filter => filter.attribute === name)) {
      return filters.concat({
        attribute: name,
        range: extent <= minVal ? [minVal, maxDomainValue] : domain
      })
    }

    return filters.map(filter => filter.attribute === name
      ? {
        ...filter,
        range: extent <= minVal ? [minVal, maxDomainValue] : domain
      }
      : filter
    )
  }

  const getActiveDatasets = (filters: Filter[]): string[] => {
    const isDatasetActive = (dataset: NormalizedData): boolean => {
      return filters.every(filter => {
        const point = dataset.data.find(({ x }) => x === filter.attribute)
        if (!point) {
          return false
        }

        const range = filter.range
        const y = point.y
        return Math.max(...range) >= y && Math.min(...range) <= y
      })
    }

    return datasets
      .map(dataset => isDatasetActive(dataset) ? dataset.name : '')
      .filter(Boolean)
  }

  const getAxisOffset = (index: number): number => {
    const step = (width - padding.left - padding.right) / (attributes.length - 1)
    return step * index + padding.left
  }

  const getMaxAttributeValues = (data: ParallelAxesData[]) =>
    getMaxAttributes(data).map(attribute => attribute.value)

  const isActive = (dataset: NormalizedData): boolean => {
    return activeDatasets.includes(dataset.name)
  }

  const onDomainChange = (domain: [number, number], name?: string): void => {
    if (!name) {
      console.log('no name given')
      return
    }
    const filters = addNewFilters(domain, name)
    setFilters(filters)
    setActiveDataSets(getActiveDatasets(filters))
  }

  return (
    <VictoryChart
      domain={{ y: [0, 1.1] }}
      height={height}
      width={width}
      padding={padding}
    >
      <VictoryAxis
        style={{
          tickLabels: { fontSize: 20 }, axis: { stroke: 'none' }
        }}
        tickLabelComponent={<VictoryLabel y={padding.top - 40}/>}
      />
      {datasets.map((dataset) => (
        <VictoryLine
          key={dataset.name} name={dataset.name} data={dataset.data}
          groupComponent={<g/>}
          style={{ data: {
            stroke: 'tomato',
            opacity: isActive(dataset) ? 1 : 0.2
          } }}
        />
      ))}
      {attributes.map((attribute, index) => (
        <VictoryAxis dependentAxis
          key={index}
          axisComponent={
            <VictoryBrushLine name={attribute}
              width={20}
              onBrushDomainChange={(domain, props) =>
                onDomainChange(domain as [number, number], props?.name)}
            />
          }
          offsetX={getAxisOffset(index)}
          style={{
            tickLabels: { fontSize: 15, padding: 15, pointerEvents: 'none' },
          }}
          tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={(tick) => Math.round(tick * maximumValues[index])}
        />
      ))}
    </VictoryChart>
  )
}

export default ParallelAxesTs