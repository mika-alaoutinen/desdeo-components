import React from 'react'
import { Meta, Story } from '@storybook/react'

import CoordinateTable from '../../components/table/coordinateTable/CoordinateTable'
import DataTable, { Props } from '../../components/table/dataTable/DataTable'
import { useOnClickHandler } from '../storyUtils'
import { testdata } from '../../tests/testdata'

export const CoordinateTableComponent = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

  return (
    <CoordinateTable
      data={data}
      onClick={onClick}
    />
  )
}

const Template: Story<Props> = args =>
  <DataTable {...args} />

export const DataTableComponent = Template.bind({})
DataTableComponent.args = {
  data: testdata,
  onClick: (n: number) => console.log('clicked', n)
}

export default {
  title: 'DESDEO/Table',
  component: CoordinateTable,
  argTypes: {
    data: {
      control: {
        type: 'object'
      }
    },
    onClick: {
      table: {
        disable: true
      }
    },
  }
} as Meta