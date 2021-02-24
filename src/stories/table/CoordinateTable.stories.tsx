import React from 'react'
import { Meta, Story } from '@storybook/react'

import CoordinateTable from '../../components/table/coordinateTable/CoordinateTable'
import { useCoordinateClickHandler } from '../hooks/coordinateChartHooks'
import { coordinates } from '../../data/testdata'
import { CoordinateChart } from '../../types/chartTypes'

export const CoordinateTableWithHooks = (): JSX.Element => {
  const { data, onClick } = useCoordinateClickHandler()

  return <CoordinateTable data={data} onClick={onClick} />
}

const Template: Story<CoordinateChart> = args => <CoordinateTable {...args} />

export const CoordinateChartTemplate = Template.bind({})
CoordinateChartTemplate.args = {
  data: coordinates,
  onClick: coordinate => console.log('coordinate', coordinate),
}

export default {
  title: 'DESDEO/CoordinateTable',
  component: CoordinateTable,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta
