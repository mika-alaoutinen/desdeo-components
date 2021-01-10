import { Filter } from './ParallelAxes'

interface DomainChange {
  activeDatasets: string[],
  filter: Filter,
  isFiltered: boolean
}

type Domain = [ number, number ]

export const onDomainChange = (
  domain: Domain, name: string, filter: Filter
): DomainChange => {
  if (!name) {
    return {
      activeDatasets: [],
      filter,
      isFiltered: false
    }
  }

  const newFilter = addNewFilters(domain, filter)

  return {
    activeDatasets: [],
    filter: newFilter,
    isFiltered: false
  }
}

const addNewFilters = (domain: Domain, filter: Filter): Filter => {
  const extent = domain && Math.abs(domain[1] - domain[0])
  const minVal = 1 / Number.MAX_SAFE_INTEGER
  // filter[name] = extent <= minVal ? undefined : domain
  return {
    ...filter,
    range: extent <= minVal ? undefined : domain
  }
}