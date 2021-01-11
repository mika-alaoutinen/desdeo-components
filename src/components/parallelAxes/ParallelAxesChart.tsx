import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryChart, VictoryLabel } from 'victory'

import BrushAxis from './BrushAxis'
import Line from './Line'
import { DomainTuple, onDomainChange } from './events'
import { getAttributeNames, getMaxAttributes } from './utils'
import { NormalizedData, ParallelAxesData } from '../../types/dataTypes'


// Interfaces
export interface Filter {
  attribute: string,
  range?: [ number, number ]
}

interface Props {
  data: ParallelAxesData[]
}

// Styling and layout
const height = 500
const width = 500
const padding = { top: 100, left: 50, right: 50, bottom: 50 }

// Init state
const initDatasets: NormalizedData[] = [{
  name: '',
  data: [{ x: '', y: -1 }]
}]

const ParallelAxes: React.FC<Props> = ({ data }) => {
  const [ activeDatasets, setActiveDataSets ] = useState<string[]>([])
  const [ datasets, setDatasets ] = useState<NormalizedData[]>(initDatasets)
  const [ filter, setFilter ] = useState<Filter>({ attribute: '' })
  const [ isFiltered, setIsFiltered ] = useState<boolean>(false)

  const attributeNames = getAttributeNames(data)

  useEffect(() => {
    console.log('TODO: Add useEffect to load state')
  }, [])

  // Event handlers
  const onChange = (domain: DomainTuple): void => {
    const change = onDomainChange(domain, filter)
    setActiveDataSets(change.activeDatasets)
    setFilter(change.filter)
    setIsFiltered(change.isFiltered)
  }

  // Creating Victory components
  const drawAxes = (): JSX.Element[] =>
    attributeNames.map((name, i) =>
      <BrushAxis
        key={name}
        name={name}
        onChange={onChange}
        maxValue={getMaxAttributeValues(data)[i]}
        offsetX={getAxisOffset(i)}
      />
    )

  const drawLines = (): JSX.Element[] =>
    datasets.map(({ name, data }) =>
      <Line
        key={name}
        data={data}
        name={name}
        opacity={isFiltered || activeDatasets.includes(name) ? 1 : 0.2}
      />
    )

  // Helper functions
  const getAxisOffset = (index: number): number => {
    const step = (width - padding.left - padding.right) / (attributeNames.length - 1)
    return step * index + padding.left
  }

  const getMaxAttributeValues = (data: ParallelAxesData[]) =>
    getMaxAttributes(data).map(attribute => attribute.value)

  return (
    <VictoryChart
      domain={{ y: [0, 1.1] }}
      height={height}
      padding={padding}
      width={width}
    >

      <VictoryAxis
        style={{
          axis: { stroke: 'none' },
          tickLabels: { fontSize: 20 }
        }}
        tickLabelComponent={<VictoryLabel y={padding.top - 40} />}
      />

      {drawLines()}
      {drawAxes()}

    </VictoryChart>
  )
}

export default ParallelAxes