import React from 'react'
import { Meta, Story } from '@storybook/react'

import { argTypes, props } from './storyConfig'
import ScatterSelection from '../../components/scatter/ScatterSelection'
import ScatterSelectionWrapper, { Props } from '../../components/scatter/ScatterSelectionWrapper'
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

const Template: Story<Props> = args =>
  <ScatterSelectionWrapper {...args} />

export const ScatterSelectionWithWrapper = Template.bind({})
ScatterSelectionWithWrapper.args = props

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelectionWrapper,
  argTypes
} as Meta