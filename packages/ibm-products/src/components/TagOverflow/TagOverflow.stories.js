/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import * as CarbonIcons from '@carbon/icons-react';

import { pkg } from '../../settings';
import { UserAvatar } from '../UserAvatar';
import { prepareStory } from '../../global/js/utils/story-helper';
import { DisplayBox } from '../../global/js/utils/DisplayBox';
import { TagOverflow } from '.';
import mdx from './TagOverflow.mdx';

import styles from './_storybook-styles.scss';

const blockClass = `${pkg.prefix}--tag-set`;
const blockClassModal = `${blockClass}-modal`;

const tagLabel = (index) => `Tag ${index + 1}`;

const tags = Array.from({ length: 20 }, (v, k) => ({
  label: tagLabel(k),
  id: `id-${k}`,
}));

const fiveTags = tags.slice(0, 5);

let longTags = tags.slice(0, 5);
longTags.splice(1, 1, { id: 'id-1', label: 'Business performance' });

// UserProfileImage background colors
const colors = ['light-cyan', 'dark-cyan'];

// Lists of  first names and last names
const firstNames = [
  'Aarav',
  'Aditi',
  'Akshay',
  'Amit',
  'Ananya',
  'Arjun',
  'Avani',
  'Bhavya',
  'Chetan',
  'Devi',
  'Divya',
  'Gaurav',
  'Isha',
  'Kiran',
  'Manoj',
  'Neha',
  'Preeti',
  'Rajesh',
  'Riya',
  'Shreya',
  'Varun',
  'Saurabh',
  'Ajay',
  'Sandip',
  'Sadan',
  'Jyoti',
  'Sapna',
  'Prem',
];

const lastNames = [
  'Agarwal',
  'Bansal',
  'Chopra',
  'Gupta',
  'Jain',
  'Kapoor',
  'Mehta',
  'Patel',
  'Rao',
  'Sharma',
  'Singh',
  'Trivedi',
  'Verma',
  'Yadav',
];

// method to generate random names
const generateName = () => {
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
};

// users for UserAvatar stories
const ManyUserAvatarArr = Array.from({ length: 20 }, (v, k) => {
  const name = generateName();
  return {
    id: `id-${k}`,
    label: name,
    backgroundColor: colors[k % colors.length],
    name,
    tooltipText: name,
  };
});

const UserAvatarArr = ManyUserAvatarArr.slice(0, 10);

// Custom component
const IconComponent = forwardRef(({ iconName, iconSize, className }, ref) => {
  const Base = CarbonIcons[iconName];
  return (
    <div className={`custom-icon ${className}`} ref={ref}>
      <Base size={iconSize}></Base>
    </div>
  );
});

// Carbon Icon component names for custom component story
const icons = [
  'Add',
  'Power',
  'Play',
  'SettingsAdjust',
  'SidePanelClose',
  'Stop',
  'VideoPlayer',
  'VolumeUpFilled',
  'ChartBubble',
  'ChartLine',
  'ChartPie',
  'ChartWinLoss',
  'DatabaseMessaging',
  'Playlist',
  'OrderDetails',
];

const IconComponentArr = icons.map((icon, index) => {
  return { id: `id-${index}`, label: icon, iconName: icon, iconSize: 16 };
});

export default {
  title: 'IBM Products/Components/Tag overflow/TagOverflow',
  component: TagOverflow,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => (
      <>
        <style>
          {`.${blockClassModal} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`}
          ;
        </style>
        <DisplayBox>{story()}</DisplayBox>
      </>
    ),
  ],
};

const Template = (argsIn) => {
  const { containerWidth, ...args } = {
    ...argsIn,
  };
  return (
    <div style={{ width: containerWidth }}>
      <TagOverflow {...args} />
    </div>
  );
};

/**
 * Declaration of stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const FiveTags = prepareStory(Template, {
  args: {
    containerWidth: 250,
    items: fiveTags,
  },
});

export const TagsWithTruncation = prepareStory(Template, {
  args: {
    containerWidth: 300,
    items: longTags,
  },
});

export const ManyTags = prepareStory(Template, {
  args: {
    containerWidth: 500,
    items: tags,
  },
});

export const UserAvatars = prepareStory(Template, {
  args: {
    containerWidth: 250,
    items: UserAvatarArr,
    itemTemplate: UserAvatar,
  },
});

export const ManyUserAvatars = prepareStory(Template, {
  args: {
    containerWidth: 500,
    items: ManyUserAvatarArr,
    itemTemplate: UserAvatar,
  },
});

export const CustomComponent = prepareStory(Template, {
  args: {
    containerWidth: 500,
    items: IconComponentArr,
    itemTemplate: IconComponent,
  },
});
