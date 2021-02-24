import React from 'react'
import { Meta } from '@storybook/react'

import CoordinateTable from '../../components/table/coordinateTable/CoordinateTable'
import { useCoordinateClickHandler } from '../hooks/coordinateChartHooks'

export const CoordinateTableWithHooks = (): JSX.Element => {
  const { data, onClick } = useCoordinateClickHandler()

  return <CoordinateTable data={data} onClick={onClick} />
}

export default {
  title: 'DESDEO/CoordinateTable',
  component: CoordinateTable,
} as Meta
