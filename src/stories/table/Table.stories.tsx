import React from 'react'
import { Meta } from '@storybook/react'

import CoordinateTable from '../../components/table/coordinateTable/CoordinateTable'
import { useOnClickHandler } from '../storyUtils'

export const CoordinateTableComponent = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

  return (
    <CoordinateTable
      data={data}
      onClick={onClick}
    />
  )
}

export default {
  title: 'DESDEO/CoordinateTable',
  component: CoordinateTable
} as Meta