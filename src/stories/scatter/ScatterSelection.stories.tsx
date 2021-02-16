import React from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterSelection from '../../components/scatter/ScatterSelection'
import ScatterSelectionWrapper, { Props } from '../../components/scatter/ScatterSelectionWrapper'
import { useOnSelectHandler } from '../storyUtils'
import { datasetTuple } from '../../data/testdata'

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

const Template: Story<Props> = args =>
  <ScatterSelectionWrapper {...args} />

export const ScatterSelectionWithWrapper = Template.bind({})
ScatterSelectionWithWrapper.args = {
  data: datasetTuple,
  onSelect: coordinates => console.log('selected', coordinates),
  onSelectionCleared: () => console.log('selections cleared')
}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelectionWrapper,
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