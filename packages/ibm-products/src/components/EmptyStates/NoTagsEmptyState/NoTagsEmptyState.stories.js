/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add20 } from '@carbon/icons-react';
import mdx from './NoTagsEmptyState.mdx';
import {
  getStoryTitle,
  prepareStory,
} from '../../../global/js/utils/story-helper';

import { NoTagsEmptyState } from '.';

import styles from '../_index.scss';

export default {
  title: getStoryTitle(NoTagsEmptyState.displayName),
  component: NoTagsEmptyState,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultStoryProps = {
  title: 'Empty state title',
  subtitle: 'Description text explaining why this section is empty.',
};

const Template = (args) => {
  return <NoTagsEmptyState {...args} />;
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    illustrationDescription: 'Test alt text',
  },
});

export const WithDarkModeIllustration = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    illustrationTheme: 'dark',
    illustrationDescription: 'Test alt text',
  },
});

export const withAction = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
    },
    illustrationDescription: 'Test alt text',
  },
});

export const withActionIconButton = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
      renderIcon: Add20,
      iconDescription: 'Add icon',
    },
    illustrationDescription: 'Test alt text',
  },
});

export const withLink = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    link: {
      text: 'View documentation',
      href: 'https://www.carbondesignsystem.com',
    },
    illustrationDescription: 'Test alt text',
  },
});

export const withActionAndLink = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
      renderIcon: Add20,
      iconDescription: 'Add icon',
    },
    link: {
      text: 'View documentation',
      href: 'https://www.carbondesignsystem.com',
    },
    illustrationDescription: 'Test alt text',
  },
});
