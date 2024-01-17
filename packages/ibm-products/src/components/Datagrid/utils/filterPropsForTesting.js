/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { handleFilterTagLabelText } from './handleFilterTagLabelText';

export const filterProps = {
  variation: 'panel',
  panelIconDescription: 'Open filters',
  sections: [
    {
      categoryTitle: 'Category title',
      hasAccordion: true,
      filters: [
        {
          filterLabel: 'Joined',
          filter: {
            type: 'date',
            column: 'joined',
            props: {
              DatePicker: {
                datePickerType: 'range',
              },
              DatePickerInput: {
                start: {
                  id: 'date-picker-input-id-start',
                  placeholder: 'mm/dd/yyyy',
                  labelText: 'Joined start date',
                },
                end: {
                  id: 'date-picker-input-id-end',
                  placeholder: 'mm/dd/yyyy',
                  labelText: 'Joined end date',
                },
              },
            },
          },
        },
        {
          filterLabel: 'Status',
          filter: {
            type: 'dropdown',
            column: 'status',
            props: {
              Dropdown: {
                id: 'marital-status-dropdown',
                ['aria-label']: 'Marital status dropdown',
                items: ['relationship', 'complicated', 'single'],
                label: 'Marital status',
                titleText: 'Marital status',
              },
            },
          },
        },
      ],
    },
    {
      categoryTitle: 'Category title',
      filters: [
        {
          filterLabel: 'Role',
          filter: {
            type: 'radio',
            column: 'role',
            props: {
              FormGroup: {
                legendText: 'Role',
              },
              RadioButtonGroup: {
                orientation: 'vertical',
                legend: 'Role legend',
                name: 'role-radio-button-group',
              },
              RadioButton: [
                {
                  id: 'developer',
                  labelText: 'Developer',
                  value: 'developer',
                },
                {
                  id: 'designer',
                  labelText: 'Designer',
                  value: 'designer',
                },
                {
                  id: 'researcher',
                  labelText: 'Researcher',
                  value: 'researcher',
                },
              ],
            },
          },
        },
        {
          filterLabel: 'Visits',
          filter: {
            type: 'number',
            column: 'visits',
            props: {
              NumberInput: {
                min: 0,
                id: 'visits-number-input',
                invalidText: 'A valid value is required',
                label: 'Visits',
                placeholder: 'Type a number amount of visits',
              },
            },
          },
        },
        {
          filterLabel: 'Password strength',
          filter: {
            type: 'checkbox',
            column: 'passwordStrength',
            props: {
              FormGroup: {
                legendText: 'Password strength',
              },
              Checkbox: [
                {
                  id: 'normal',
                  labelText: 'Normal',
                  value: 'normal',
                },
                {
                  id: 'minor-warning',
                  labelText: 'Minor warning',
                  value: 'minor-warning',
                },
                {
                  id: 'critical',
                  labelText: 'Critical',
                  value: 'critical',
                },
              ],
            },
          },
        },
      ],
    },
  ],
  renderLabel: (key, value) => handleFilterTagLabelText(key, value),
  renderDateLabel: (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    return `${startDateObj.toLocaleDateString()} - ${endDateObj.toLocaleDateString()}`;
  },
};
