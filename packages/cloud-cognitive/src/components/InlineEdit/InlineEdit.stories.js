/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { InlineEdit } from '.';
import mdx from './InlineEdit.mdx';

import styles from './_storybook-styles.scss';

const storyClass = 'inline-edit-stories';

const validationOptions = {
  'Default, no validation change': {},
  'On change or save warn if empty': { onChangeWarnIfEmpty: true },
  'On change or save invalid if empty': { onChangeInvalidIfEmpty: true },
  'On change or save includes ABC warn': { onChangeWanWithABC: true },
  'On change or save includes ABC invalid': { onChangeInvalidWithABC: true },
  'On save warn if empty': { onSaveWarnIfEmpty: true },
  'On save invalid if empty': { onSaveInvalidIfEmpty: true },
  'On save includes ABC warn': { onSaveWanWithABC: true },
  'On save includes ABC invalid': { onSaveInvalidWithABC: true },
};

export default {
  title: getStoryTitle(InlineEdit.displayName),
  component: InlineEdit,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
      description:
        'Controls containing element width. Used for demonstration purposes, not property of the component.',
    },
    inlineEditFullWidth: {
      control: { type: 'boolean' },
      description:
        'Sets component width `100%`. Used for demonstration purposes, not property of the component.',
    },
    validation: {
      control: {
        type: 'select',
        labels: Object.keys(validationOptions),
      },
      options: Object.values(validationOptions).map((_k, i) => i),
      mapping: Object.values(validationOptions),
      defaultValue: 0,
    },
  },
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
  decorators: [
    (story) => (
      <div className={`${storyClass}__viewport ccs-sb__display-box`}>
        {story()}
      </div>
    ),
  ],
};

const actionSave = action('save');
const actionRejectSave = action('rejected save');
const actionChange = action('change');
const actionRejectChange = action('rejected change');
const actionCancel = action('cancel');

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = ({
  containerWidth,
  inlineEditFullWidth,
  invalid,
  invalidText,
  editDescription,
  cancelDescription,
  saveDescription,
  validation,
  warn,
  warnText,
  value: initialValue,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);
  const [liveInvalid, setLiveInvalid] = useState(invalid);
  const [liveWarn, setLiveWarn] = useState(warn);
  const [liveInvalidText, setLiveInvalidText] = useState(invalidText);
  const [liveWarnText, setLiveWarnText] = useState(warnText);

  useEffect(() => {
    setLiveInvalid(invalid);
  }, [invalid]);

  useEffect(() => {
    setLiveWarn(warn);
  }, [warn]);

  const handleValidation = (val, change, save) => {
    let newInvalid = false;
    let newWarn = false;
    let updateValidation = false;
    let invalidText = '';
    let warnText = '';

    const zeroLength = val.length === 0;
    const hasABC = /ABC/.test(val);

    if (
      (change && validation.onChangeInvalidIfEmpty) ||
      (save && validation.onSaveInvalidIfEmpty)
    ) {
      newInvalid = zeroLength;
      invalidText = newInvalid ? 'This field cannot be empty' : '';
      updateValidation = true;
    } else if (
      (change && validation.onChangeWarnIfEmpty) ||
      (save && validation.onSaveWarnIfEmpty)
    ) {
      newWarn = zeroLength;
      warnText = newWarn ? 'Empty fields are not good practice' : '';
      updateValidation = true;
    } else if (
      (change && validation.onChangeInvalidWithABC) ||
      (save && validation.onSaveInvalidWithABC)
    ) {
      newInvalid = hasABC;
      invalidText = newInvalid ? 'Cannot contain ABC in the entry' : '';
      updateValidation = true;
    } else if (
      (change && validation.onChangeWanWithABC) ||
      (save && validation.onSaveWanWithABC)
    ) {
      newWarn = hasABC;
      warnText = newWarn ? 'ABC should not be used in the entry' : '';
      updateValidation = true;
    }

    if (updateValidation) {
      setLiveInvalid(newInvalid);
      setLiveInvalidText(invalidText);
      setLiveWarn(newWarn);
      setLiveWarnText(warnText);
    }
    return updateValidation && (newWarn || newInvalid);
  };

  const onSave = (val) => {
    const reject = handleValidation(val, false, true);

    if (reject) {
      actionRejectSave(val);
    } else {
      setValue(val);
      actionSave(val);
    }
  };
  const onChange = (val) => {
    const reject = handleValidation(val, true, false);

    if (reject) {
      actionRejectChange(val);
    } else {
      actionChange(val);
    }
  };
  const onCancel = actionCancel;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div
      style={{ width: containerWidth }}
      className={inlineEditFullWidth ? 'component-full-width' : ''}
    >
      <InlineEdit
        {...rest}
        {...{
          editDescription,
          invalid: liveInvalid,
          invalidText: liveInvalidText,
          onSave,
          onChange,
          onCancel,
          cancelDescription,
          saveDescription,
          warn: liveWarn,
          warnText: liveWarnText,
          value,
        }}
      />
    </div>
  );
};

export const inlineEdit = prepareStory(Template, {
  args: {
    containerWidth: 300,
    inlineEditFullWidth: true,
    editDescription: 'Edit',
    id: 'edit button',
    labelText: 'Inline edit',
    cancelDescription: 'Cancel',
    saveDescription: 'Save',
    value: 'hello, world',
  },
});
