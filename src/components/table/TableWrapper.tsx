import React from 'react'

import Table from './Table'
import { createCoordinates } from '../../data/transformations'
import { OnClickHandler } from '../../types/chartTypes'
import { DataSet } from '../../types/dataTypes'

interface Props {
  data: DataSet,
  onClick: OnClickHandler
}

const TableWrapper: React.FC<Props> = ({ data, onClick }) => (
  <Table
    data={createCoordinates(data)}
    onClick={onClick}
  />
)

export default TableWrapper