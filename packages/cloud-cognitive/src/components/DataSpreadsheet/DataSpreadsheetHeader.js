/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { checkActiveHeaderCell } from './checkActiveHeaderCell';
import uuidv4 from '../../global/js/utils/uuidv4';
import { removeCellSelections } from './utils/removeCellSelections';

const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetHeader = forwardRef(
  (
    {
      activeCellCoordinates,
      defaultColumn,
      headerGroups,
      selectionAreas,
      setActiveCellCoordinates,
      setCurrentMatcher,
      setSelectionAreas,
      rows,
    },
    ref
  ) => {
    const handleColumnHeaderClick = (index) => {
      return () => {
        const point1 = {
          row: 0,
          column: index,
        };
        const point2 = {
          row: rows.length - 1,
          column: index,
        };
        const tempMatcher = uuidv4();
        setActiveCellCoordinates({
          row: 0,
          column: index,
        });
        setCurrentMatcher(tempMatcher);
        removeCellSelections({ spreadsheetRef: ref });
        setSelectionAreas([
          {
            point1,
            point2,
            areaCreated: false,
            matcher: tempMatcher,
          },
        ]);
      };
    };

    return (
      <div className={cx(`${blockClass}__header--container`)}>
        {headerGroups.map((headerGroup, index) => (
          <div
            key={`header_${index}`}
            {...headerGroup.getHeaderGroupProps()}
            className={`${blockClass}__tr`}
          >
            {/* SELECT ALL BUTTON */}
            <button
              data-row-index="header"
              data-column-index="header"
              type="button"
              tabIndex={-1}
              className={cx(
                `${blockClass}__th`,
                `${blockClass}--interactive-cell-element`,
                {
                  [`${blockClass}__th--active-header`]:
                    activeCellCoordinates?.column === 'header' &&
                    activeCellCoordinates?.row === 'header',
                }
              )}
              style={{
                width: defaultColumn?.rowHeaderWidth,
                height: defaultColumn?.rowHeight,
              }}
            >
              &nbsp;
            </button>
            {/* COLUMN HEADER BUTTONS */}
            {headerGroup.headers.map((column, index) => (
              <button
                key={`column_${index}`}
                data-row-index="header"
                data-column-index={index}
                tabIndex={-1}
                onClick={handleColumnHeaderClick(index)}
                style={{
                  height: defaultColumn?.rowHeight,
                }}
                {...column.getHeaderProps()}
                className={cx(
                  `${blockClass}__th`,
                  `${blockClass}--interactive-cell-element`,
                  {
                    [`${blockClass}__th--active-header`]:
                      activeCellCoordinates?.column === index ||
                      checkActiveHeaderCell(index, selectionAreas, 'column'),
                  }
                )}
                type="button"
              >
                {column.render('Header')}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  }
);

DataSpreadsheetHeader.propTypes = {
  /**
   * Object containing the active cell coordinates
   */
  activeCellCoordinates: PropTypes.shape({
    row: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    column: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),

  /**
   * Default spreadsheet sizing values
   */
  defaultColumn: PropTypes.shape({
    rowHeight: PropTypes.number,
    rowHeaderWidth: PropTypes.number,
    width: PropTypes.number,
  }),

  /**
   * Headers provided from useTable hook
   */
  headerGroups: PropTypes.arrayOf(PropTypes.object),

  /**
   * All of the spreadsheet row data
   */
  rows: PropTypes.arrayOf(PropTypes.object),

  /**
   * All of the cell selection area items
   */
  selectionAreas: PropTypes.arrayOf(PropTypes.object),

  /**
   * Setter fn for activeCellCoordinates value
   */
  setActiveCellCoordinates: PropTypes.func,

  /**
   * Setter fn for currentMatcher value
   */
  setCurrentMatcher: PropTypes.func,

  /**
   * Setter fn for selectionAreas value
   */
  setSelectionAreas: PropTypes.func,
};
