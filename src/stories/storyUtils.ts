import { useState } from 'react'

import { testdata } from '../data'
import { Datum } from '../types/dataTypes'
import { EventHandler } from '../types/eventTypes'

export interface TestEventHandler {
  data: Datum[],
  eventHandler: EventHandler
}

export const printDatum = ({ x, y, isSelected }: Datum): void => {
  console.log('x', x, 'y', y, 'isSelected', isSelected)
}

export const useEventHandler = (): TestEventHandler => {
  const [ data, setData ] = useState(testdata)

  const eventHandler: EventHandler = {
    type: 'USE_STATE',
    callback: setData
  }

  return {
    data,
    eventHandler
  }
}