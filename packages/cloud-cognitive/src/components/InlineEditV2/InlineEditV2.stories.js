/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { action } from '@storybook/addon-actions';
import { InlineEdit } from '../InlineEdit/InlineEdit';
import { InlineEditV2 } from '.';
import mdx from './InlineEditV2.mdx';
import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(InlineEditV2.displayName),
  component: InlineEditV2,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const actionSave = action('save');
const actionChange = action('change');
const actionCancel = action('cancel');

const defaultProps = {
  cancelLabel: 'Cancel',
  editLabel: 'Edit',
  invalid: false,
  invalidLabel: 'This field is required',
  onCancel: () => {},
  onChange: () => {},
  onSave: () => {},
  // readOnly: false,
  // readOnlyLabel: 'This value is read only',
  saveLabel: 'Save',
  v2: true,
  value: 'default',
};

const Template = (args) => {
  const [value, setValue] = useState(defaultProps.value);

  const onChange = (val) => {
    setValue(val);
    actionChange(val);
  };

  const onSave = () => {
    console.log('saved!', value);
    actionSave(value);
  };

  const onCancel = (initialVal) => {
    setValue(initialVal);
    actionCancel(initialVal);
  };

  const props = {
    ...args,
    value,
    onChange,
    onSave,
    onCancel,
  };

  return <InlineEdit {...props} className="inline-edit-v2-example" />;
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const Invalid = prepareStory(Template, {
  args: {
    ...defaultProps,
    invalid: true,
  },
});

// export const ReadOnly = prepareStory(Template, {
//   args: {
//     ...defaultProps,
//     readOnly: true,
//   },
// });
