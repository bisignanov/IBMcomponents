/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Add } from '@carbon/react/icons';
// import mdx from './NoDataEmptyState.mdx';
import {
  getStoryTitle,
  prepareStory,
} from '../../../global/js/utils/story-helper';

import { NoDataEmptyState } from '.';
import { StoryDocsPage } from '../../../global/js/utils/StoryDocsPage';

// import styles from '../_index.scss';

export default {
  title: getStoryTitle(NoDataEmptyState.displayName),
  component: NoDataEmptyState,
  tags: ['autodocs'],
  parameters: {
    // styles,
    docs: {
      page: () => (
        <StoryDocsPage
          altGuidelinesHref={[
            {
              href: 'https://pages.github.ibm.com/cdai-design/pal/patterns/empty-state/usage',
              label: 'Error pattern usage guidelines',
            },
            {
              href: 'https://www.carbondesignsystem.com/patterns/empty-states-pattern/',
              label: 'Carbon empty pattern usage guidelines',
            },
          ]}
        />
      ),
    },
  },
};

const defaultStoryProps = {
  title: 'Empty state title',
  subtitle: 'Description text explaining why this section is empty.',
};

const Template = (args) => {
  return <NoDataEmptyState {...args} />;
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultStoryProps,
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
    illustrationDescription: 'Test alt text',
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
    },
  },
});

export const withActionIconButton = prepareStory(Template, {
  args: {
    illustrationDescription: 'Test alt text',
    ...defaultStoryProps,
    action: {
      text: 'Create new',
      onClick: action('Clicked empty state action button'),
      renderIcon: (props) => <Add size={20} {...props} />,
      iconDescription: 'Add icon',
    },
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
      renderIcon: (props) => <Add size={20} {...props} />,
      iconDescription: 'Add icon',
    },
    link: {
      text: 'View documentation',
      href: 'https://www.carbondesignsystem.com',
    },
    illustrationDescription: 'Test alt text',
  },
});
