import React from 'react'

import DataTableBody from './DataTableBody'
import TableHead from '../TableHead'
import { createDataTableData } from '../../../data/inputTransformations'
import { tableStyle } from '../tableStyles'
import { DataSet } from '../../../types/dataTypes'
import { OnClickHandler } from '../../../types/eventHandlerTypes'

export interface Props {
  data: DataSet
  onClick: OnClickHandler
}

const DataTable: React.FC<Props> = ({ data, onClick }) => (
  <table style={tableStyle}>
    <TableHead labels={data.map(column => column.label)} />
    <DataTableBody data={createDataTableData(data)} onClick={onClick} />
  </table>
)

export default DataTable
