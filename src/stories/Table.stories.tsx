import React from 'react'
import { Story, Meta } from '@storybook/react'

import Table from '../components/table/Table'
import { testdata } from '../data'
import { DataProps } from '../types/dataTypes'

const Template: Story<DataProps> = args => <Table { ...args } />

export const SimpleTable = Template.bind({})
SimpleTable.args = {
  data: testdata,
}

export default {
  title: 'DESDEO/Table',
  component: Table
} as Meta