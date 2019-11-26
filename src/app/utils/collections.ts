import { sortBy } from './arrays';

/**
 * Given a list of elements, and a payload, it will look and
 * add/replace elements based on given elements by the backend
 */
export const updateCollection = <T>(collection: T[] = [] as T[], payload: T[] = [] as T[]) => {
  if (!payload.length) {
    return collection;
  }

  if (!collection.length && payload.length) {
    return payload;
  }

  const updatedCollection = [...collection];
  payload.forEach(element => {
    // @ts-ignore
    const compareIds = <T>(value: T) => value.id === element.id;
    // @ts-ignore
    const compareTags = <T>(value: T) => value.options.tag === element.options.tag;

    const prevElementIndex =
      // @ts-ignore
      typeof element.id !== 'undefined'
        ? updatedCollection.findIndex(compareIds)
        : updatedCollection.findIndex(compareTags);

    if (prevElementIndex >= 0) {
      updatedCollection[prevElementIndex] = {
        ...updatedCollection[prevElementIndex],
        ...element,
      };
    } else {
      updatedCollection.push(element);
    }
  });

  return updatedCollection;
};

export const sortCollection = <T>(collection: T[] = [], key: string, order = 'desc') => {
  // @ts-ignore
  if (!key || !collection.length || typeof !collection[0][key] === 'undefined') {
    return collection;
  }

  return [...collection].sort(sortBy(key, order));
};

/**
 * Update filters on state
 *
 * TS TODO: Type state , filters' payload and return type
 */
export const updateStateFilters = <T>(collection: string, state: any, payload: any): T => {
  if (collection !== payload.collection) {
    return state;
  }

  const filters = {
    ...state.filters,
    [payload.filter.name]: payload.filter.value,
  };

  return { ...state, filters };
};

const wasCreatedBeforeThan = (date: Date, reference: Date) => date.getTime() < reference.getTime();
const wasCreatedLaterThan = (date: Date, reference: Date) => date.getTime() > reference.getTime();
const matchText = (string: string, pattern: string) => new RegExp(pattern.toLowerCase()).test(string.toLowerCase());

/**
 * TS TODO: Type filters
 */
export const filterCollection = <T>(collection: T[] = [], filters: any = {}) => {
  if (!collection.length || !Object.keys(filters).length) {
    return collection;
  }

  const filteredCollection = collection.filter(element => {
    let matchAllFilters = true;

    Object.keys(filters).forEach(key => {
      const filter = {
        name: key,
        value: filters[key],
      };

      if (filter.value !== '' && filter.value !== undefined && filter.value !== null) {
        // Created before than
        if (filter.name === 'beforeThan') {
          // @ts-ignore
          if (!wasCreatedBeforeThan(new Date(element.created), new Date(filter.value))) {
            matchAllFilters = false;
          }

          // Created later than
        } else if (filter.name === 'laterThan') {
          // @ts-ignore
          if (!wasCreatedLaterThan(new Date(element.created), new Date(filter.value))) {
            matchAllFilters = false;
          }

          // Any other filter
          // @ts-ignore
        } else if (!matchText(element[filter.name], filter.value)) {
          matchAllFilters = false;
        }
      }
    });

    return matchAllFilters;
  });

  return filteredCollection;
};
