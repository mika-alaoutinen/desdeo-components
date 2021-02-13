import React from 'react'

import DataTableBody from './DataTableBody'
import DataTableHeadings from './DataTableHeadings'
import { tableStyle } from '../table/tableStyles'
import { DataSet } from '../../types/dataTypes'

export type DataTableClickHandler = (n: number) => void

interface Props {
  data: DataSet,
  onClick: DataTableClickHandler
}

const DataTable: React.FC<Props> = ({ data, onClick }) => {
  const getHeadings = (): string[] =>
    data.map(column => column.label)

  return (
    <table style={tableStyle}>
      <DataTableHeadings labels={getHeadings()} />
      <DataTableBody
        data={data}
        onClick={onClick}
      />
    </table>
  )
}

export default DataTable