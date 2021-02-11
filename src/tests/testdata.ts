import {
  Coordinate, CoordinateSet, DataSet, ParallelAxesData
} from '../types/dataTypes'
import { createAlternativeSets, createCriteriaSets } from '../data/transformations'

const testdata: DataSet = [
  {
    label: 'WQ Fishery',
    data: [ 6.042483, 5.758127, 6.287081, 6.134672, 5.610188, 5.231501, 6.34, 6.291364, 5.407513, 6.019503 ]
  },
  {
    label: 'WQ City',
    data: [ 3.17527, 3.410843, 3.207926, 2.98383, 2.910456, 3.248641, 2.962557, 3.346416, 3.130143, 3.350959 ]
  },
  {
    label: 'ROI',
    data: [ 6.090291, 6.887735, 2.992514, 5.507545, 7.082375, 7.352708, 0.321111, 2.847139, 7.254194, 6.195485 ]
  },
  {
    label: 'City Tax',
    data: [ 2.444406, 8.989781, 2.758216, 0.581456, 0.216794, 3.951754, 0.377181, 5.67065, 2.057297, 6.173211 ]
  },
  {
    label: 'Plant Resources',
    data: [ 0.248895, 0.346752, 0.326688, 0.259547, 0.126336, 0.295807, 0.35, 0.328574, 0.228541, 0.327455 ]
  }
]

// Larger datasets created with data transformation functions
const groupedByAlternatives: CoordinateSet[] = createAlternativeSets(testdata)
const groupedByCriteria: CoordinateSet[] = createCriteriaSets(testdata)

const parallelAxesData: ParallelAxesData[] = [
  {
    label: 'Alternative 1',
    attributes: [
      { x: 'wq fishery', y: 5.758127 },
      { x: 'wq city', y: 3.17527 },
      { x: 'roi', y: 6.090291 },
      { x: 'city tax', y: 2.444406 },
    ]
  },
  {
    label: 'Alternative 2',
    attributes: [
      { x: 'wq fishery', y: 6.042483 },
      { x: 'wq city', y: 3.410843 },
      { x: 'roi', y: 6.887735 },
      { x: 'city tax', y: 8.989781 },
    ]
  },
]

const coordinateData: Coordinate[] = [
  { id: 'a', x: 10, y: 20, label: 'A', isSelected: true },
  { id: 'b', x: 20, y: 40, label: 'B', isSelected: false },
  { id: 'c', x: 30, y: 70, label: 'C' },
  { id: 'd', x: 40, y: 30, label: 'D', isSelected: true },
  { id: 'e', x: 50, y: 50, label: 'E' },
]

export {
  coordinateData, groupedByAlternatives, groupedByCriteria, parallelAxesData, testdata
}