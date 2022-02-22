/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import cx from 'classnames';

import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetBody = ({
  defaultColumn,
  getTableBodyProps,
  id,
  prepareRow,
  rows,
  setActiveCellCoordinates,
  scrollBarSize,
  totalColumnsWidth,
}) => {
  // Make sure that if the cellSize prop changes, the active
  // cell also gets updated with the new size
  useEffect(() => {
    const listContainer = spreadsheetBodyRef?.current;
    const activeCellButton = listContainer.querySelector(
      `.${blockClass}__active-cell--highlight`
    );
    if (activeCellButton) {
      activeCellButton.style.height = `${defaultColumn?.rowHeight}px`;
    }
  }, [defaultColumn?.rowHeight]);

  // onClick fn for each cell in the data spreadsheet body,
  // adds the active cell highlight
  const handleBodyCellClick = useCallback(
    (cell, columnIndex) => {
      setActiveCellCoordinates({
        row: cell.row.index,
        column: columnIndex,
      });
    },
    [setActiveCellCoordinates]
  );

  // Renders each cell in the spreadsheet body
  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({ style })}
          className={cx(`${blockClass}__tr`)}
          data-row-index={index}
        >
          {/* ROW HEADER BUTTON */}
          <button
            tabIndex={-1}
            data-row-index={index}
            data-column-index="header"
            type="button"
            className={cx(
              `${blockClass}__td`,
              `${blockClass}__td-th`,
              `${blockClass}--interactive-cell-element`
            )}
            style={{
              width: defaultColumn?.rowHeaderWidth,
            }}
          >
            {index + 1}
          </button>
          {/* CELL BUTTONS */}
          {row.cells.map((cell, index) => (
            <button
              tabIndex={-1}
              data-row-index={cell.row.index}
              data-column-index={index}
              {...cell.getCellProps()}
              className={cx(
                `${blockClass}__td`,
                `${blockClass}--interactive-cell-element`
              )}
              key={`cell_${index}`}
              onClick={() => handleBodyCellClick(cell, index)}
              type="button"
            >
              {cell.render('Cell')}
            </button>
          ))}
        </div>
      );
    },
    [prepareRow, rows, defaultColumn.rowHeaderWidth, handleBodyCellClick]
  );

  const spreadsheetBodyRef = useRef();
  return (
    <div
      ref={spreadsheetBodyRef}
      className={cx(`${blockClass}__body--container`)}
      {...getTableBodyProps()}
    >
      <FixedSizeList
        className={cx(
          `${blockClass}__list--container`,
          `${blockClass}__list--container--${id}`
        )}
        height={400}
        itemCount={rows.length}
        itemSize={defaultColumn?.rowHeight}
        width={totalColumnsWidth + scrollBarSize}
      >
        {RenderRow}
      </FixedSizeList>
    </div>
  );
};

DataSpreadsheetBody.propTypes = {
  /**
   * Default spreadsheet sizing values
   */
  defaultColumn: PropTypes.shape({
    rowHeight: PropTypes.number,
    rowHeaderWidth: PropTypes.number,
    width: PropTypes.number,
  }),

  /**
   * Function to set table body prop values
   */
  getTableBodyProps: PropTypes.func,

  /**
   * The spreadsheet id
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The event handler that is called when the active cell changes
   */
  onActiveCellChange: PropTypes.func,

  /**
   * Prepare row function from react-table
   */
  prepareRow: PropTypes.func,

  /**
   * All of the spreadsheet row data
   */
  rows: PropTypes.arrayOf(PropTypes.object),

  /**
   * The scrollbar width
   */
  scrollBarSize: PropTypes.number,

  /**
   * Setter fn for activeCellCoordinates state value
   */
  setActiveCellCoordinates: PropTypes.func,

  /**
   * The total columns width
   */
  totalColumnsWidth: PropTypes.number,
};
