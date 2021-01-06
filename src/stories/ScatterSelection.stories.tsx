import React from 'react'
import { Meta } from '@storybook/react'

import ScatterSelection from '../components/scatter/ScatterSelection'
import { useOnSelectReactHandler, useOnSelectReduxHandler } from './storyUtils'

export const ScatterSeletionWithUseState = (): JSX.Element => {
  const { data, onSelect, onSelectionCleared } = useOnSelectReactHandler()

  return (
    <ScatterSelection
      data={data}
      onSelect={onSelect}
      onSelectionCleared={onSelectionCleared}
    />
  )
}

export const ScatterSelectionWithRedux = (): JSX.Element => {
  const { data, onSelect, onSelectionCleared } = useOnSelectReduxHandler()

  return (
    <ScatterSelection
      data={data}
      onSelect={onSelect}
      onSelectionCleared={onSelectionCleared}
    />
  )

}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelection
} as Meta