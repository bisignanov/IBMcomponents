/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import { pkg } from '../../../settings';

// Click outside useEffect for spreadsheet
export const useSpreadsheetOutsideClick = ({
  spreadsheetRef,
  blockClass = `${pkg.prefix}--data-spreadsheet`,
  setActiveCellCoordinates,
  setSelectionAreas,
  removeActiveCell,
  removeCellSelections,
  setContainerHasFocus,
  activeKeys,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !spreadsheetRef.current ||
        spreadsheetRef.current.contains(event.target) ||
        event.target.classList.contains(`${blockClass}__active-cell--highlight`)
      ) {
        return;
      }
      setActiveCellCoordinates(null);
      setSelectionAreas([]);
      removeActiveCell();
      removeCellSelections();
      setContainerHasFocus(false);
      activeKeys.current = [];
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [
    spreadsheetRef,
    removeActiveCell,
    removeCellSelections,
    activeKeys,
    blockClass,
    setActiveCellCoordinates,
    setContainerHasFocus,
    setSelectionAreas,
  ]);
};
