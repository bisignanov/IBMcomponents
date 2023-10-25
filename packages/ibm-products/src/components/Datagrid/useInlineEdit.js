/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import { pkg } from '../../settings';
import cx from 'classnames';
import { InlineEditCell } from './Datagrid/addons/InlineEdit/InlineEditCell';

const blockClass = `${pkg.prefix}--datagrid`;

const useInlineEdit = (hooks, usingEditableCell) => {
  useEffect(() => {
    if (!usingEditableCell) {
      pkg.checkReportFeatureEnabled('Datagrid.useInlineEdit');
    }
    if (usingEditableCell) {
      pkg.checkReportFeatureEnabled('Datagrid.useEditableCell');
    }
  }, [usingEditableCell]);

  const addInlineEdit = (props, { cell, instance }) => {
    const columnInlineEditConfig = cell.column.inlineEdit;
    const inlineEditType = cell.column?.inlineEdit?.type;

    const renderInlineEditComponent = (type) => (
      <InlineEditCell
        config={columnInlineEditConfig}
        tabIndex={-1}
        value={cell.value}
        cell={cell}
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
        className: cx(`${blockClass}__cell`, {
          [`${blockClass}__cell-inline-edit`]:
            !!usingEditableCell ||
            pkg.isFeatureEnabled('Datagrid.useInlineEdit')
              ? true
              : '',
        }),
        role: 'gridcell',
        children: (!!usingEditableCell ||
          pkg.isFeatureEnabled('Datagrid.useInlineEdit')) && (
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
                disabled
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
  hooks.useInstance.push((instance) => {
    Object.assign(instance, {
      withInlineEdit:
        !!usingEditableCell || pkg.isFeatureEnabled('Datagrid.useInlineEdit')
          ? true
          : false,
    });
  });
};

export default useInlineEdit;
