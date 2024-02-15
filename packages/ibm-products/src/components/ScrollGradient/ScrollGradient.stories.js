/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ScrollGradient } from '.';
import mdx from './ScrollGradient.mdx';

import styles from './_storybook-styles.scss';
import { scrollDirection } from './constants';

export default {
  title: getStoryTitle(ScrollGradient.displayName),
  component: ScrollGradient,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
const style = {
  width: '300px',
  height: '300px',
};
/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return (
    <ScrollGradient
      color={'#444444'}
      style={style}
      className={'myScrollGradient'}
      direction={scrollDirection.X}
      {...args}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const scrollGradient = prepareStory(Template, {
  args: {
    // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#ScrollGradient-args
    children: 'hello, world',
  },
});
