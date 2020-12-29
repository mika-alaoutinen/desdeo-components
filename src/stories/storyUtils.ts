import { useState } from 'react'

import { testdata } from './testdata'
import { Datum } from '../types/dataTypes'
import { EventHandler } from '../types/eventTypes'

export interface TestEventHandler {
  data: Datum[],
  eventHandler: EventHandler
}

export const printDatum = ({ x, y, isSelected }: Datum): void => {
  console.log('x', x, 'y', y, 'isSelected', isSelected)
}

export const useReactHandler = (): TestEventHandler => {
  const [ data, setData ] = useState(testdata)

  return {
    data,
    eventHandler: {
      type: 'USE_STATE',
      callback: setData
    }
  }
}

export const useReduxHandler = (): TestEventHandler => ({
  data: testdata,
  eventHandler: {
    type: 'REDUX',
    callback: printDatum
  }
})