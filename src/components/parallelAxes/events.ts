import { NormalizedData } from '../../types/dataTypes'
import { Filter } from './ParallelAxes'

export interface DomainChange {
  activeDatasets: string[],
  filter: Filter,
  isFiltered: boolean
}

export type DomainTuple = [ number, number ]
export type OnDomainChange = (domain: DomainTuple) => void

// Need to refactor this
export const onDomainChange = (
  domain: DomainTuple, filter: Filter, datasets: string[]
): DomainChange => {
  const filters = addNewFilters(domain, filter)
  const isFiltered = Array.from(Object.values(filters)).length > 0
  const activeDatasets = isFiltered ? getActiveDatasets(filters) : datasets

  return {
    activeDatasets,
    filter: filters,
    isFiltered
  }
}

// Utility functions
const addNewFilters = (domain: DomainTuple, filter: Filter): Filter => {
  const extent = domain && Math.abs(domain[1] - domain[0])
  const minVal = 1 / Number.MAX_SAFE_INTEGER
  // filter[name] = extent <= minVal ? undefined : domain
  return {
    ...filter,
    range: extent <= minVal ? undefined : domain
  }
}

// TODO
const getActiveDatasets = (filter: Filter): string[] => {
  console.log(filter)
  return []
}