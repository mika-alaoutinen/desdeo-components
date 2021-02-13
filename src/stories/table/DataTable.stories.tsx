import React from 'react'
import { Meta } from '@storybook/react'

import DataTable, { DataTableClickHandler } from '../../components/table/dataTable/DataTable'
import { testdata } from '../../tests/testdata'

const clickHandler: DataTableClickHandler = (n: number) => console.log('number', n)

export const DataTableComponent = (): JSX.Element =>
  <DataTable data={testdata} onClick={clickHandler} />

export default {
  title: 'DESDEO/DataTable',
  component: DataTable
} as Meta