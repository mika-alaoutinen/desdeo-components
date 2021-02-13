import React from 'react'

import DataTableBody from './DataTableBody'
import DataTableHead from './DataTableHead'
import { transpose } from '../../data/transformations'
import { tableStyle } from '../table/tableStyles'
import { DataSet } from '../../types/dataTypes'

export type DataTableClickHandler = (n: number) => void

interface Props {
  data: DataSet,
  onClick: DataTableClickHandler
}

const DataTable: React.FC<Props> = ({ data, onClick }) => {
  return (
    <table style={tableStyle}>
      <DataTableHead labels={data.map(column => column.label)} />
      <DataTableBody
        data={transpose(data)}
        onClick={onClick}
      />
    </table>
  )
}

export default DataTable