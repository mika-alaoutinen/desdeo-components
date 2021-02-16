import React from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterSelection from '../../components/scatter/ScatterSelection'
import { useOnSelectHandler } from '../storyUtils'
import { coordinates } from '../../data/testdata'
import { OnSelectChart } from '../../types/chartTypes'

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

const Template: Story<OnSelectChart> = args =>
  <ScatterSelection {...args} />

export const ScatterSelectionTemplate = Template.bind({})
ScatterSelectionTemplate.args = {
  data: coordinates,
  onSelect: coordinates => console.log('selected', coordinates),
  onSelectionCleared: () => console.log('selections cleared')
}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelection,
  argTypes: {
    onSelect: {
      table: {
        disable: true
      }
    },
    onSelectionCleared: {
      table: {
        disable: true
      }
    },
  }
} as Meta