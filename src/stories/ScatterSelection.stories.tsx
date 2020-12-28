import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import ScatterSelection from '../components/scatter/ScatterSelection'
import { testdata } from '../data'
import { printData } from './storyUtils'
import { EventHandler } from '../types/dataTypes'

export const ScatterSeletionWithUseState = (): JSX.Element => {
  const [ data, setData ] = useState(testdata)
  const eventHandler: EventHandler = {
    type: 'USE_STATE',
    callback: setData
  }
  
  return (
    <ScatterSelection
      data={data}
      eventHandler={eventHandler}
    />
  )
}

export const ScatterSelectionWithRedux = (): JSX.Element => {
  const eventHandler: EventHandler = {
    type: 'REDUX',
    callback: printData
  }

  return (
    <ScatterSelection
      data={testdata}
      eventHandler={eventHandler}
    />
  )

}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelection
} as Meta