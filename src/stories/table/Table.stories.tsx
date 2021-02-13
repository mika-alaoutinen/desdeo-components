import React from 'react'
import { Meta } from '@storybook/react'

import CoordinateTable from '../../components/table/coordinateTable/CoordinateTable'
import DataTable, { DataTableClickHandler } from '../../components/table/dataTable/DataTable'
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

const clickHandler: DataTableClickHandler = (n: number) => console.log('number', n)

export const DataTableComponent = (): JSX.Element =>
  <DataTable data={testdata} onClick={clickHandler} />

export default {
  title: 'DESDEO/Table',
  component: CoordinateTable
} as Meta