import { CoordinateSet } from '../../types/dataTypes'

const getDatasetLength = (datasets: CoordinateSet[]): number =>
  datasets.map(dataset => dataset.data).length

// Need to use regex with replace because Node.js has no implementation for replaceAll...
const createAxisLabels = (datasets: CoordinateSet[]): string[] =>
  datasets
    .map(({ label }, i) => label ? label : `Label ${i + 1}`)
    .map(label => label.replace(/ /g, '\n'))

export { getDatasetLength, createAxisLabels }