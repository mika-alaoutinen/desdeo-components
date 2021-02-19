/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { RadarDataSet } from './radarData'

const getMaxima = (data: any[]) => {
  const groupedData = Object.keys(data[0]).reduce((memo, key) => {
    memo[key] = data.map(d => d[key])
    return memo
  }, {})

  return Object.keys(groupedData).reduce((memo, key) => {
    memo[key] = Math.max(...groupedData[key])
    return memo
  }, {})
}

const processData = (data: any[]): RadarDataSet => {
  const maxByGroup = getMaxima(data)
  return data.map((datum: any) => makeDataArray(datum))
}

const makeDataArray = (d: any) => {
  return Object.keys(d).map(key => {
    return { id: 'id', x: key, y: d[key] / maxByGroup[key] }
  })
}
