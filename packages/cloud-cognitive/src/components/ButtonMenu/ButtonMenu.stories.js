/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ButtonMenu, ButtonMenuItem } from '.';
import { Accordion, AccordionItem } from 'carbon-components-react';
import mdx from './ButtonMenu.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(ButtonMenu.displayName),
  component: ButtonMenu,
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

const renderItems = (setIsOpen) => {
  return (
    <>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 1`)
          setIsOpen(false);
        }}
      >Option 1</ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 2`)
          setIsOpen(false);
        }}
      >Option 2</ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 3`)
          setIsOpen(false);
        }}
      >Option 3</ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 4`)
          setIsOpen(false);
        }}
      >Option 4</ButtonMenuItem>
    </>
  )
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ButtonMenu
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onMenuButtonClick={() => {
        setIsOpen(prev => !prev);
      }}
      label="Primary button"
      {...args}
    >
      {renderItems(setIsOpen)}
    </ButtonMenu>
  );
};

const NestedTemplate = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return <ButtonMenu
    open={isOpen}
    onClose={() => setIsOpen(false)}
    onMenuButtonClick={() => {
      setIsOpen(prev => !prev);
    }}
    label="Button menu"
    {...args}
  >
    {renderItems(setIsOpen)}
    <Accordion>
      <AccordionItem title="Insights">
        <ButtonMenuItem onClick={() => setIsOpen(false)} kind="ghost">Business criticality</ButtonMenuItem>
        <ButtonMenuItem onClick={() => setIsOpen(false)} kind="ghost">Log anomaly</ButtonMenuItem>
      </AccordionItem>
    </Accordion>
    {renderItems()}
  </ButtonMenu>
}

export const buttonMenu = prepareStory(Template, {
  storyName: 'Button menu',
  args: {},
});

export const nestedButtonMenu = prepareStory(NestedTemplate, {
  storyName: 'Nested button menu',
  args: {},
});
