import { Coordinate, DataSet } from '../types/dataTypes'

const coordinates: Coordinate[] = [
  { id: 'a', x: 6.042483, y: 3.17527 },
  { id: 'b', x: 5.758127, y: 3.410843 },
  { id: 'c', x: 6.287081, y: 3.207926 },
  { id: 'd', x: 6.134672, y: 2.98383 },
  { id: 'e', x: 5.610188, y: 2.910456 },
  { id: 'f', x: 5.231501, y: 3.248641 },
  { id: 'g', x: 6.34, y: 2.962557 },
  { id: 'h', x: 6.291364, y: 2.962557 },
  { id: 'i', x: 5.407513, y: 3.346416 },
  { id: 'j', x: 6.019503, y: 3.350959 },
]

const dataset: DataSet[] = [
  {
    label: 'WQ Fishery',
    data: [
      { id: 'wq-fishery-1', isSelected: false, value: 6.042483 },
      { id: 'wq-fishery-2', isSelected: false, value: 5.758127 },
      { id: 'wq-fishery-3', isSelected: false, value: 6.287081 },
      { id: 'wq-fishery-4', isSelected: false, value: 6.134672 },
      { id: 'wq-fishery-5', isSelected: false, value: 5.610188 },
      { id: 'wq-fishery-6', isSelected: false, value: 5.231501 },
      { id: 'wq-fishery-7', isSelected: false, value: 6.34 },
      { id: 'wq-fishery-8', isSelected: false, value: 6.291364 },
      { id: 'wq-fishery-9', isSelected: false, value: 5.407513 },
      { id: 'wq-fishery-10', isSelected: false, value: 6.019503 },
    ],
  },

  {
    label: 'WQ City',
    data: [
      { id: 'wq-city-1', isSelected: false, value: 3.17527 },
      { id: 'wq-city-2', isSelected: false, value: 3.410843 },
      { id: 'wq-city-3', isSelected: false, value: 3.207926 },
      { id: 'wq-city-4', isSelected: false, value: 2.98383 },
      { id: 'wq-city-5', isSelected: false, value: 2.910456 },
      { id: 'wq-city-6', isSelected: false, value: 3.248641 },
      { id: 'wq-city-7', isSelected: false, value: 2.962557 },
      { id: 'wq-city-8', isSelected: false, value: 3.346416 },
      { id: 'wq-city-9', isSelected: false, value: 3.130143 },
      { id: 'wq-city-10', isSelected: false, value: 3.350959 },
    ],
  },

  {
    label: 'ROI',
    data: [
      { id: 'roi-1', isSelected: false, value: 6.090291 },
      { id: 'roi-2', isSelected: false, value: 6.887735 },
      { id: 'roi-3', isSelected: false, value: 2.992514 },
      { id: 'roi-4', isSelected: false, value: 5.507545 },
      { id: 'roi-5', isSelected: false, value: 7.082375 },
      { id: 'roi-6', isSelected: false, value: 7.352708 },
      { id: 'roi-7', isSelected: false, value: 0.321111 },
      { id: 'roi-8', isSelected: false, value: 2.847139 },
      { id: 'roi-9', isSelected: false, value: 7.254194 },
      { id: 'roi-10', isSelected: false, value: 6.195485 },
    ],
  },

  {
    label: 'City Tax',
    data: [
      { id: 'city-tax-1', isSelected: false, value: 2.444406 },
      { id: 'city-tax-2', isSelected: false, value: 8.989781 },
      { id: 'city-tax-3', isSelected: false, value: 2.758216 },
      { id: 'city-tax-4', isSelected: false, value: 0.581456 },
      { id: 'city-tax-5', isSelected: false, value: 0.216794 },
      { id: 'city-tax-6', isSelected: false, value: 3.951754 },
      { id: 'city-tax-7', isSelected: false, value: 0.377181 },
      { id: 'city-tax-8', isSelected: false, value: 5.67065 },
      { id: 'city-tax-9', isSelected: false, value: 2.057297 },
      { id: 'city-tax-10', isSelected: false, value: 6.173211 },
    ],
  },

  {
    label: 'Plant Resources',
    data: [
      { id: 'plant-resources-1', isSelected: false, value: 0.248895 },
      { id: 'plant-resources-2', isSelected: false, value: 0.346752 },
      { id: 'plant-resources-3', isSelected: false, value: 0.326688 },
      { id: 'plant-resources-4', isSelected: false, value: 0.259547 },
      { id: 'plant-resources-5', isSelected: false, value: 0.126336 },
      { id: 'plant-resources-6', isSelected: false, value: 0.295807 },
      { id: 'plant-resources-7', isSelected: false, value: 0.35 },
      { id: 'plant-resources-8', isSelected: false, value: 0.328574 },
      { id: 'plant-resources-9', isSelected: false, value: 0.228541 },
      { id: 'plant-resources-10', isSelected: false, value: 0.327455 },
    ],
  },
]

export const radarDataset: DataSet[] = [
  {
    label: 'WQ Fishery',
    data: [
      { id: 'wq-fishery-0', isSelected: false, value: 6.042483 },
      { id: 'wq-fishery-1', isSelected: false, value: 5.758127 },
      { id: 'wq-fishery-2', isSelected: false, value: 6.287081 },
    ],
  },
  {
    label: 'WQ City',
    data: [
      { id: 'wq-city-0', isSelected: false, value: 3.17527 },
      { id: 'wq-city-1', isSelected: false, value: 3.410843 },
      { id: 'wq-city-2', isSelected: false, value: 3.207926 },
    ],
  },
  {
    label: 'ROI',
    data: [
      { id: 'roi-0', isSelected: false, value: 6.090291 },
      { id: 'roi-1', isSelected: false, value: 6.887735 },
      { id: 'roi-2', isSelected: false, value: 2.992514 },
    ],
  },
  {
    label: 'City Tax',
    data: [
      { id: 'city-tax-0', isSelected: false, value: 2.444406 },
      { id: 'city-tax-1', isSelected: false, value: 8.989781 },
      { id: 'city-tax-2', isSelected: false, value: 2.758216 },
    ],
  },
  {
    label: 'Plant Resources',
    data: [
      { id: 'plant-pesources-0', isSelected: false, value: 0.248895 },
      { id: 'plant-pesources-1', isSelected: false, value: 0.346752 },
      { id: 'plant-pesources-2', isSelected: false, value: 0.326688 },
    ],
  },
]

export { coordinates, dataset }
