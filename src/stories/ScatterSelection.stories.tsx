import React from 'react'
import { Meta } from '@storybook/react'

import ScatterSelection from '../components/scatter/ScatterSelection'
import { TestEventHandler, useReactHandler, useReduxHandler } from './storyUtils'

export const ScatterSeletionWithUseState = (): JSX.Element => {
  const { data, eventHandler }: TestEventHandler = useReactHandler()
  
  return (
    <ScatterSelection
      data={data}
      eventHandler={eventHandler}
    />
  )
}

export const ScatterSelectionWithRedux = (): JSX.Element => {
  const { data, eventHandler }: TestEventHandler = useReduxHandler()

  return (
    <ScatterSelection
      data={data}
      eventHandler={eventHandler}
    />
  )

}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelection
} as Meta