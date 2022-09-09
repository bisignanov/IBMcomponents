/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { carbon, pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

export const handleGridKeyPress = (event, dispatch, state, instance) => {
  const { key } = event;
  const { gridActive, activeCellId, editId } = state;

  const focusedCell = document.querySelector(
    `#${instance.tableId} .${blockClass}__table-with-inline-edit [data-cell-id="${activeCellId}"]`
  );

  // If we reach this it means that tab was pressed while in
  // edit mode which should not remove the focus from the grid
  if (activeCellId === editId && key === 'Tab') {
    // Attempting to exit date picker
    if (focusedCell.getAttribute('data-inline-type') === 'date') {
      dispatch({ type: 'EXIT_EDIT_MODE', payload: activeCellId });
    }
    event.preventDefault();
    const inlineEditArea = document.querySelector(
      `#${instance.tableId} .${blockClass}__table-with-inline-edit`
    );
    inlineEditArea.focus();
    return;
  }

  if (activeCellId === editId && key === 'Escape') {
    if (focusedCell.getAttribute('data-inline-type') === 'date') {
      dispatch({ type: 'EXIT_EDIT_MODE', payload: activeCellId });
      event.preventDefault();
      const inlineEditArea = document.querySelector(
        `#${instance.tableId} .${blockClass}__table-with-inline-edit`
      );
      inlineEditArea.focus();
      return;
    }
  }

  // Checks if the dropdown menu is open
  const dropdownIsActive = () => {
    const focusedElementRole = document.activeElement.getAttribute('role');
    if (
      focusedElementRole === 'listbox' &&
      document.activeElement.classList.contains(
        `${carbon.prefix}--list-box__menu`
      )
    ) {
      // Prevents arrow keys from scrolling any other content when dropdown menu is open
      event.preventDefault();
      return true;
    }
    return false;
  };

  // Checks if the date picker is open
  const datePickerIsActive = () => {
    const focusedCalendarElement = document.querySelector(`.${carbon.prefix}--date-picker__input.flatpickr-input.active`);
    if (focusedCalendarElement || document.activeElement.classList.contains(
      `flatpickr-day`
    )) {
      event.preventDefault();
      return true;
    }
    return false;
  }

  // Stop grid key listener when in edit mode
  const isEditing =
    (document.activeElement.id === activeCellId &&
      document.activeElement.id === editId) ||
    dropdownIsActive() ||
    datePickerIsActive();
  if (isEditing || !gridActive) {
    return;
  }
  // Command keys need to be returned as there is default browser behavior with these keys
  if (key === 'Meta' || key === 'Control') {
    return;
  }
  // Prevent arrow keys, home key, and end key from scrolling the page when the data spreadsheet container has focus
  if (
    ['End', 'Home', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].indexOf(
      key
    ) > -1 &&
    !isEditing
  ) {
    event.preventDefault();
  }
  const isDisabledCell = !!focusedCell.getAttribute('data-disabled');
  const sharedUpdateParams = {
    oldId: activeCellId,
    instance,
  };
  switch (key) {
    case 'Tab': {
      if (!editId) {
        dispatch({ type: 'REMOVE_GRID_ACTIVE_FOCUS', payload: activeCellId });
      }
      break;
    }
    case 'ArrowRight': {
      dispatch({
        type: 'UPDATE_ACTIVE_CELL_ID',
        payload: {
          direction: 'right',
          ...sharedUpdateParams,
        },
      });
      break;
    }
    case 'ArrowLeft': {
      dispatch({
        type: 'UPDATE_ACTIVE_CELL_ID',
        payload: {
          direction: 'left',
          ...sharedUpdateParams,
        },
      });
      break;
    }
    case 'ArrowUp': {
      dispatch({
        type: 'UPDATE_ACTIVE_CELL_ID',
        payload: {
          direction: 'up',
          ...sharedUpdateParams,
        },
      });
      break;
    }
    case 'ArrowDown': {
      dispatch({
        type: 'UPDATE_ACTIVE_CELL_ID',
        payload: {
          direction: 'down',
          ...sharedUpdateParams,
        },
      });
      break;
    }
    case ' ':
    case 'F2':
    case 'Enter': {
      // Disabled cells are not allowed to go into edit mode
      if (isDisabledCell) {
        return;
      }
      // Only go into edit mode if there is no editId, meaning that we're not already in edit mode
      if (!editId) {
        const focusedType = focusedCell.getAttribute('data-inline-type');
        // Open dropdown immediately after entering edit mode for selection type
        if (focusedType === 'selection') {
          setTimeout(() => {
            const dropdownTrigger = focusedCell.querySelector('button');
            dropdownTrigger?.click();
          }, 1);
        }
        if (focusedType === 'date') {
          setTimeout(() => {
            const dateInputTrigger = focusedCell.querySelector('input');
            dateInputTrigger?.click();
            dateInputTrigger?.focus();
          }, 1);
        }
        dispatch({
          type: 'ENTER_EDIT_MODE',
          payload: {
            activeCellId,
            editId: activeCellId,
          },
        });
      }
    }
  }
};
