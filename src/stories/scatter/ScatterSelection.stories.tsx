import React from 'react'
import { Meta } from '@storybook/react'

import ScatterSelection from '../../components/scatter/ScatterSelection'
import { useOnSelectHandler } from '../storyUtils'

export const ScatterSeletionComponent = (): JSX.Element => {
  const { data, onSelect, onSelectionCleared } = useOnSelectHandler()

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