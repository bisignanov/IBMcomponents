/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { createContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { BATCH, INSTANT } from './constants';

export const FilterContext = createContext();

export const FilterProvider = ({
  children,
  headers,
  setFilter,
  filterProps,
}) => {
  // When using batch actions we have to store the filters to then apply them later
  const filtersObjectArray = useRef([]);

  const applyFilters = ({ column, value }) => {
    const type = headers.find((header) => header.id === column).filter;

    // If no end date is selected return because we need the end date to do computations
    if (type === 'date' && !value[1]) {
      return;
    }

    if (filterProps?.updateMethod === BATCH) {
      // check if the filter already exists in the array
      const filter = filtersObjectArray.current?.find(
        (item) => item.id === column
      );

      // if filter exists in array then update the filter's new value
      if (filter) {
        filter.value = value;
      } else {
        filtersObjectArray.current = [
          ...filtersObjectArray.current,
          { id: column, value },
        ];
      }
    } else if (filterProps?.updateMethod === INSTANT) {
      setFilter(column, value);
    }
  };

  const value = {
    applyFilters,
    filtersObjectArray,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  filterProps: PropTypes.object.isRequired,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
};
