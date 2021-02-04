import { createIntegerArray } from './utilityFunctions'
import { Coordinate, CoordinateSet, DataSet } from '../types/dataTypes'

// Convert CSV dataset into CoordinateSet
const convertToCoordinates = (data: DataSet): CoordinateSet[] =>
  data.map(({ label, data }) => ({
    label,
    data: data.map((datum, i) => convertNumberToCoordinate(datum, i))
  }))

// Create labels
const createAlternativesLabels = (labelCount: number): string[] =>
  createIntegerArray(labelCount).map(n => `Alternative\n${n}`)

const createCriterialabels = (dataset: CoordinateSet[]): string[] =>
  dataset.map(({ label }, i) => label ? label : `Label ${i+1}`)

// Utility functions
const convertNumberToCoordinate = (n: number, index: number): Coordinate => ({
  id: n.toString(),
  x: index + 1,
  y: n
})

export {
  convertToCoordinates, createAlternativesLabels, createCriterialabels
}