/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { pkg } from '../../settings';
import cx from 'classnames';
import { InlineEditCell } from './Datagrid/addons/InlineEdit/InlineEditCell';
import { Hooks, TableInstance } from 'react-table';
import { DataGridState } from './types';

const blockClass = `${pkg.prefix}--datagrid`;

const useInlineEdit = (hooks: Hooks) => {
  const addInlineEdit = (props, { cell, instance }) => {
    const columnInlineEditConfig = cell.column.inlineEdit;
    const inlineEditType = cell.column?.inlineEdit?.type;
    const isDisabled = cell.column?.isDisabled;

    const renderInlineEditComponent = (type) => (
      <InlineEditCell
        config={columnInlineEditConfig}
        tabIndex={-1}
        value={cell.value}
        cell={cell}
        disabledCell={isDisabled}
        instance={instance}
        type={type}
      />
    );

    if (cell.column.id === 'spacer') {
      return [
        props,
        {
          className: cx(`${blockClass}__cell`, `${blockClass}__cell--spacer`),
        },
      ];
    }

    return [
      props,
      {
        className: cx(`${blockClass}__cell`, `${blockClass}__cell-inline-edit`),
        role: 'gridcell',
        children: (
          <>
            {inlineEditType === 'text' &&
              renderInlineEditComponent(inlineEditType)}
            {inlineEditType === 'number' &&
              renderInlineEditComponent(inlineEditType)}
            {inlineEditType === 'selection' &&
              renderInlineEditComponent(inlineEditType)}
            {inlineEditType === 'date' &&
              renderInlineEditComponent(inlineEditType)}
            {/* Render default inline edit cell button, if it's column doesn't have an inline edit configuration */}
            {!inlineEditType && (
              <InlineEditCell
                config={columnInlineEditConfig}
                tabIndex={-1}
                value={cell.value}
                cell={cell}
                instance={instance}
                disabledCell={isDisabled}
                nonEditCell
                type="text"
              />
            )}
          </>
        ),
      },
    ];
  };
  hooks.getCellProps.push(addInlineEdit);
  hooks.useInstance.push((instance: TableInstance) => {
    Object.assign(instance as DataGridState, {
      withInlineEdit: true,
    });
  });
};

export default useInlineEdit;
