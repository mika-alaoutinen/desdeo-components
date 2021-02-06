import {
  Coordinate, CoordinateSet, DataSet, ParallelAxesData
} from 'types/dataTypes'

export const testdata: DataSet = [
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

// 3 bar groups with 5 bars each
export const groupedByAlternatives: CoordinateSet[] = [
  {
    data: [
      { id: 'wq-fishery-1', x: 1, y: 6.042483 },
      { id: 'wq-fishery-2', x: 2, y: 5.758127 },
      { id: 'wq-fishery-3', x: 3, y: 6.287081 },
    ]
  },
  {
    data: [
      { id: 'wq-city-1', x: 1, y: 3.17527 },
      { id: 'wq-city-2', x: 2, y: 3.410843 },
      { id: 'wq-city-3', x: 3, y: 3.207926 },
    ]
  },
  {
    data: [
      { id: 'roi-1', x: 1, y: 6.090291 },
      { id: 'roi-2', x: 2, y: 6.887735 },
      { id: 'roi-3', x: 3, y: 2.992514 },
    ]
  },
  {
    data: [
      { id: 'city-tax-1', x: 1, y: 2.444406 },
      { id: 'city-tax-2', x: 2, y: 8.989781 },
      { id: 'city-tax-3', x: 3, y: 2.758216 },
    ]
  },
  {
    data: [
      { id: 'plant-resources-1', x: 1, y: 0.248895 },
      { id: 'plant-resources-2', x: 2, y: 0.346752 },
      { id: 'plant-resources-3', x: 3, y: 0.326688 },
    ]
  },
]

// 5 bar groups with 2 two bars each
export const groupedByCriteria: CoordinateSet[] = [
  {
    data: [
      { id: 'wq-fishery-1', x: 1, y: 6.042483 },
      { id: 'wq-city-1', x: 2, y: 3.17527 },
      { id: 'roi-1', x: 3, y: 6.090291 },
      { id: 'city-tax-1', x: 4, y: 2.444406 },
      { id: 'plant-resources-1', x: 5, y: 0.248895 },
    ]
  },
  {
    data: [
      { id: 'wq-fishery-2', x: 1, y: 5.758127 },
      { id: 'wq-city-2', x: 2, y: 3.410843 },
      { id: 'roi-2', x: 3, y: 6.887735 },
      { id: 'city-tax-2', x: 4, y: 8.989781 },
      { id: 'plant-resources-2', x: 5, y: 0.346752 },
    ]
  },
]

// Should work to get rid of these datasets in favor of a universal data shape
export const parallelAxesData: ParallelAxesData[] = [
  {
    name: 'Adrien',
    attributes: [
      { name: 'strength', value: 5 },
      { name: 'intelligence', value: 30 },
      { name: 'luck', value: 17 }
    ]
  },
  {
    name: 'Brice',
    attributes: [
      { name: 'strength', value: 10 },
      { name: 'intelligence', value: 25 },
      { name: 'luck', value: 8 }
    ]
  },
  {
    name: 'Casey',
    attributes: [
      { name: 'strength', value: 15 },
      { name: 'intelligence', value: 20 },
      { name: 'luck', value: 15 }
    ]
  },
]

export const coordinateData: Coordinate[] = [
  { id: 'a', x: 10, y: 20, label: 'A', isSelected: true },
  { id: 'b', x: 20, y: 40, label: 'B', isSelected: false },
  { id: 'c', x: 30, y: 70, label: 'C' },
  { id: 'd', x: 40, y: 30, label: 'D', isSelected: true },
  { id: 'e', x: 50, y: 50, label: 'E' },
]

/*
  Note: If the datasets contain a label property, it is used as the
  label in charts by default.
  => A simple option for displaying labels might be to transform the
  data so that all data points have a label.
*/
export const coordinateSets: CoordinateSet[] = [
  {
    data: [
      { id: 'G', x: 1, y: 80, label: 'C', isSelected: true },
      { id: 'H', x: 2, y: 15, label: 'C', isSelected: true },
      { id: 'I', x: 3, y: 60, label: 'C', isSelected: true }
    ],
    label: 'dataset 3'
  },

  {
    data: [
      { id: 'd', x: 1, y: 10, label: 'B', isSelected: false },
      { id: 'e', x: 2, y: 15, label: 'B', isSelected: false },
      { id: 'f', x: 3, y: 60, label: 'B', isSelected: false }
    ],
    label: 'dataset 2'
  },

  {
    data: [
      { id: 'a', x: 1, y: 20, label: 'A', isSelected: true },
      { id: 'b', x: 2, y: 40, label: 'A', isSelected: false },
      { id: 'c', x: 3, y: 70, label: 'A' }
    ],
    label: 'dataset 1'
  }
]