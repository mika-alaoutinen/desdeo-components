import React from 'react'

import { getAttributeNames, getMaxValues, normalizeData } from '../../data/attributeParser'
import { createAttributeSets } from '../../data/inputTransformations'
import { DataSet } from '../../types/dataTypes'
import ParallelAxes from './ParallelAxes'
import { OnChangeHandler, OnLineClickHandler, OnClickHandler, ToggleCursorHandler } from './types'

// If an event handler is not given, pass a dummy function that does nothing to component
const dummyFunction = () => void 0
const dummyFunction2 = (toggle: React.Dispatch<React.SetStateAction<boolean>>) => toggle(true)

export interface Props {
  data: DataSet[]
  onChange?: OnChangeHandler
  onLineClick?: OnLineClickHandler
  onClicking?: OnClickHandler
  toggleCursor?: ToggleCursorHandler
}

const ParallelAxesWrapper: React.FC<Props> = ({
  data,
  onChange,
  onLineClick,
  onClicking,
  toggleCursor,
}) => {
  const datasets = createAttributeSets(data)
  const normalized = normalizeData(datasets)

  return (
    <ParallelAxes
      attributes={getAttributeNames(normalized)}
      data={datasets}
      maxTickValues={getMaxValues(datasets)}
      normalizedData={normalized}
      onChange={onChange ? onChange : dummyFunction}
      onLineClick={onLineClick ? onLineClick : dummyFunction}
      onClicking={onClicking ? onClicking : dummyFunction}
      toggleCursor={toggleCursor ? toggleCursor : dummyFunction2}
    />
  )
}

export default ParallelAxesWrapper
