import React from 'react'
import { Meta } from '@storybook/react'

import ScatterSelection from '../components/scatter/ScatterSelection'
import { TestEventHandler, useReactHandler, useReduxHandler } from './storyUtils'

export const ScatterSeletionWithUseState = (): JSX.Element => {
  const { data, onClick }: TestEventHandler = useReactHandler()
  
  return (
    <ScatterSelection
      data={data}
      onClick={onClick}
    />
  )
}

export const ScatterSelectionWithRedux = (): JSX.Element => {
  const { data, onClick }: TestEventHandler = useReduxHandler()

  return (
    <ScatterSelection
      data={data}
      onClick={onClick}
    />
  )

}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelection
} as Meta