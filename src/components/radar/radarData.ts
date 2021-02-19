import { DataSet } from '../../types/dataTypes'

export const characterData = [
  {
    wq_fishery: 6.042483,
    wq_city: 3.17527,
    roi: 6.090291,
    city_tax: 2.444406,
    plant_resources: 0.248895,
  },
  {
    wq_fishery: 5.758127,
    wq_city: 3.410843,
    roi: 6.887735,
    city_tax: 8.989781,
    plant_resources: 0.346752,
  },
  {
    wq_fishery: 6.287081,
    wq_city: 3.207926,
    roi: 2.992514,
    city_tax: 2.758216,
    plant_resources: 0.326688,
  },
]

export const radarDataset: DataSet = [
  {
    label: 'WQ Fishery',
    data: [
      { id: 'wq-fishery-0', isSelected: false, value: 6.134672 },
      { id: 'wq-fishery-1', isSelected: false, value: 6.019503 },
      { id: 'wq-fishery-2', isSelected: false, value: 5.231501 },
    ],
  },
  {
    label: 'WQ City',
    data: [
      { id: 'wq-city-0', isSelected: false, value: 3.17527 },
      { id: 'wq-city-1', isSelected: false, value: 3.346416 },
      { id: 'wq-city-2', isSelected: false, value: 6.042483 },
    ],
  },
]
