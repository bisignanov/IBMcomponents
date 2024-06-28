import React, { useRef } from 'react';

import { DatePicker, DatePickerInput } from '@carbon/react';

import { pkg } from '../../../../settings';
import PropTypes from 'prop-types';
import { translateWithId } from '../../ConditionBuilderContext/DataConfigs';

const blockClass = `${pkg.prefix}--condition-builder`;

export const ConditionBuilderItemDate = ({ conditionState, onChange }) => {
  const DatePickerInputRef = useRef();

  const datePickerType =
    conditionState.operator == 'between' ? 'range' : 'single';

  return (
    <div className={`${blockClass}__item-date `}>
      {datePickerType == 'single' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat="d/m/Y"
          datePickerType="single"
          onClose={onChange}
          value={conditionState.value}
        >
          <DatePickerInput
            id="datePicker"
            placeholder="dd/mm/yyyy"
            labelText={conditionState.property}
          />
        </DatePicker>
      )}

      {datePickerType == 'range' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat="d/m/Y"
          datePickerType={datePickerType}
          onClose={onChange}
          value={conditionState.value}
        >
          <DatePickerInput
            id="datePickerStart"
            placeholder="dd/mm/yyyy"
            labelText={translateWithId('start')}
          />
          <DatePickerInput
            id="datePickerEnd"
            placeholder="dd/mm/yyyy"
            labelText={translateWithId('end')}
          />
        </DatePicker>
      )}
    </div>
  );
};
ConditionBuilderItemDate.propTypes = {
  /**
   * current condition object
   */
  conditionState: PropTypes.object,

  /**
   * callback to update state oin date change
   */
  onChange: PropTypes.func,
};
