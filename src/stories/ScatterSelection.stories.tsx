import React from 'react'
import { Meta } from '@storybook/react'

import ScatterSelection from '../components/scatter/ScatterSelection'
import { testdata } from '../data'
import { printDatum, TestEventHandler, useEventHandler } from './storyUtils'
import { EventHandler } from '../types/eventTypes'

export const ScatterSeletionWithUseState = (): JSX.Element => {
  const { data, eventHandler }: TestEventHandler = useEventHandler()
  
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
    callback: printDatum
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