import React from 'react'
import { Meta, Story } from '@storybook/react'

import DataTable, { Props } from '../../components/table/dataTable/DataTable'
import { dataset } from '../../data/testdata'
import { useOnClickHandler } from '../hooks/barChartHooks'

export const DataTableWithHooks = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()
  return <DataTable data={data} onClick={onClick} />
}

const Template: Story<Props> = args => <DataTable {...args} />

export const DataTableComponent = Template.bind({})
DataTableComponent.args = {
  data: dataset,
  onClick: value => console.log('value', value),
}

export default {
  title: 'DESDEO/DataTable',
  component: DataTableComponent,
  argTypes: {
    data: {
      control: {
        type: 'object',
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta
