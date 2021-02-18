import React from 'react'

import CoordinateTableBody from './CoordinateTableBody'
import TableHead from '../TableHead'
import { tableStyle } from '../tableStyles'
import { CoordinateChart } from '../../../types/chartTypes'

const CoordinateTable: React.FC<CoordinateChart> = ({ data, onClick }) => (
  <table style={tableStyle}>
    <TableHead labels={['Label', 'X', 'Y', 'Selected']} />
    <CoordinateTableBody data={data} onClick={onClick} />
  </table>
)

export default CoordinateTable
