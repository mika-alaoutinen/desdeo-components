import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import Table from '../components/table/Table'
import { testdata } from '../data'
import { printDatum } from './storyUtils'
import { DataProps } from '../types/dataTypes'

const Template: Story<DataProps> = args => {
  const [ data, setData ] = useState(testdata)
  return (
    <Table
      { ...args }
      data={data}
      setData={setData}
    />
  )
}

export const TableWithUseState = Template.bind({})

export const TableWithRedux = Template.bind({})
TableWithRedux.args = {
  reduxAction: printDatum
}

export default {
  title: 'DESDEO/Table',
  component: Table
} as Meta