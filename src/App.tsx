import React from 'react'

import BarChart from './components/barChart/BarChart'
import { data } from './components/barChart/data'

const App: React.FC = () => {
  
  const onClick = () => {
    console.log(data)
  }
  
  return <BarChart props={{ data, onClick }}/>
}

export default App