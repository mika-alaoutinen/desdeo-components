import { useState } from 'react'

import { testdata } from './testdata'
import { Datum } from '../types/dataTypes'
import { OnClickHandler } from '../types/eventTypes'

export interface TestEventHandler {
  data: Datum[],
  onClick: OnClickHandler
}

export const printDatum = ({ x, y, isSelected }: Datum): void => {
  console.log('x', x, 'y', y, 'isSelected', isSelected)
}

export const useReactHandler = (): TestEventHandler => {
  const [ data, setData ] = useState(testdata)

  return {
    data,
    onClick: {
      type: 'USE_STATE',
      function: setData
    }
  }
}

export const useReduxHandler = (): TestEventHandler => ({
  data: testdata,
  onClick: {
    type: 'REDUX',
    function: printDatum
  }
})