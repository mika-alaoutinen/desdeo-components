import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import MaterialTable from '../components/table/MaterialTable'
import { testdata } from '../data'
import { printDatum } from './storyUtils'
import { DataProps } from '../types/dataTypes'

const Template: Story<DataProps> = args => {
  const [ data, setData ] = useState(testdata)
  return (
    <MaterialTable
      { ...args }
      data={data}
      setData={setData}
    />
  )
}

export const MaterialTableWithUseState = Template.bind({})

export const MaterialTableWithRedux = Template.bind({})
MaterialTableWithRedux.args = {
  reduxAction: printDatum
}

export default {
  title: 'DESDEO/MaterialTable',
  component: MaterialTable
} as Meta