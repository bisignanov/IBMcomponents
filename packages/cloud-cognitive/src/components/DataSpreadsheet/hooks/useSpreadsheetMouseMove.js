/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import { px } from '@carbon/layout';
import { pkg } from '../../../settings';
import { getScrollbarWidth } from '../../../global/js/utils/getScrollbarWidth';
import { moveColumnIndicatorLine } from '../utils/moveColumnIndicatorLine';

// Used specifically for reordering columns, will move the position of the
// cloned selection area to follow the position of the cursor
export const useSpreadsheetMouseMove = ({
  ref,
  blockClass = `${pkg.prefix}--data-spreadsheet`,
  headerCellHoldActive,
  defaultColumn,
}) => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const clonedSelectionElement = ref.current.querySelector(
        `.${blockClass}__selection-area--element-cloned`
      );
      if (clonedSelectionElement) {
        ref.current.addEventListener('mousemove', handleMouseMove);
      }
      const spreadsheetCoords = ref.current.getBoundingClientRect();
      moveColumnIndicatorLine({
        clonedSelectionElement,
        ref,
        spreadsheetCoords,
      });
      const scrollbarWidth = getScrollbarWidth();
      const spreadsheetWrapperElement = ref.current;
      spreadsheetWrapperElement.getBoundingClientRect();
      const xPositionRelativeToSpreadsheet =
        event.clientX - spreadsheetCoords.left;
      const offsetXValue = clonedSelectionElement?.getAttribute(
        'data-clone-offset-x'
      );
      const totalSpreadsheetWidth = ref.current.offsetWidth;
      const clonedSelectionWidth = clonedSelectionElement.offsetWidth;
      const clonePlacement = Math.max(
        xPositionRelativeToSpreadsheet - offsetXValue,
        defaultColumn?.rowHeaderWidth
      );
      // Moves the position of the cloned selection area to follow mouse
      clonedSelectionElement.style.left = px(
        totalSpreadsheetWidth - clonedSelectionWidth - scrollbarWidth >=
          clonePlacement
          ? clonePlacement
          : totalSpreadsheetWidth - clonedSelectionWidth - scrollbarWidth
      );
    };
    if (headerCellHoldActive) {
      ref.current.addEventListener('mousemove', handleMouseMove);
    }

    const spreadsheetRef = ref.current;
    if (!headerCellHoldActive) {
      spreadsheetRef?.removeEventListener('mousemove', handleMouseMove);
    }
    return () => {
      spreadsheetRef?.removeEventListener('mousemove', handleMouseMove);
    };
  });
};
