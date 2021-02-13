import React from 'react'

import DataTableBody from './DataTableBody'
import TableHead from '../TableHead'
import { transpose } from '../../../data/transformations'
import { tableStyle } from '../tableStyles'
import { DataSet } from '../../../types/dataTypes'

export type DataTableClickHandler = (n: number) => void

interface Props {
  data: DataSet,
  onClick: DataTableClickHandler
}

const DataTable: React.FC<Props> = ({ data, onClick }) => (
  <table style={tableStyle}>
    <TableHead labels={data.map(column => column.label)} />
    <DataTableBody data={transpose(data)} onClick={onClick} />
  </table>
)

export default DataTable