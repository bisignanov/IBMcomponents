/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { carbon } from '../../settings';

import {
  Column,
  Grid,
  Header,
  HeaderName,
  Row,
  Tab,
  Tabs,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from 'carbon-components-react';
import {
  CheckmarkFilled16,
  Lightning16,
  Bee24,
  Printer16,
  Security24,
  Settings16,
  VolumeMute16,
} from '@carbon/icons-react';
import cx from 'classnames';

import { ActionBarItem } from '../ActionBar';
import { PageHeader, deprecatedProps } from './PageHeader';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';

import { demoTableHeaders, demoTableData } from './PageHeaderDemo.data';

import styles from './_storybook-styles.scss';

import mdx from './PageHeader.mdx';

const storyClass = 'page-header-stories';

// Values for arg types

const makeActionBarItem = (item) => ({
  key: `a-key-${item}`,
  renderIcon: Lightning16,
  iconDescription: `Action ${item}`,
});
const actionBarItems = {
  'No action bar': null,
  'A single item': [1].map(makeActionBarItem),
  'Four items': [1, 2, 3, 4].map(makeActionBarItem),
  'Many items': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(makeActionBarItem),
  'Custom items': [
    { key: '1', renderIcon: Printer16, iconDescription: `Print` },
    { key: '2', renderIcon: Settings16, iconDescription: `Settings` },
    { key: '3', renderIcon: VolumeMute16, iconDescription: `Mute` },
  ],
};

const makeBreadcrumb = (item, title) => ({
  href: '#',
  key: `Breadcrumb ${item}`,
  label: typeof title === 'string' ? title : `Breadcrumb ${item}`,
});
const now = new Date();
const m = now.getMonth();
if (m === 0) {
  now.setFullYear(now.getFullYear() - 1);
  now.setMonth(11);
} else {
  now.setMonth(m - 1);
}
const ms = now.toLocaleString('default', { month: 'long' });
const ys = now.toLocaleString('default', { year: 'numeric' });
const breadcrumbs = {
  'No breadcrumb': null,
  'A single breadcrumb': [makeBreadcrumb(1, 'Home page')],
  'Two-level breadcrumb': [
    makeBreadcrumb(1, 'Home page'),
    makeBreadcrumb(2, 'Secondary page'),
  ],
  'Many breadcrumbs': [
    makeBreadcrumb(1, 'Home page'),
    makeBreadcrumb(2, 'Secondary page'),
    ...[3, 4, 5, 6, 7, 8].map(makeBreadcrumb),
  ],
  'Demo breadcrumbs': [
    makeBreadcrumb(1, 'Home page', '../../../homepage'),
    makeBreadcrumb(2, 'Reports', '../../Reports'),
    makeBreadcrumb(3, `${ms} ${ys}`, `../${ms}{ys}`),
  ],
};

const children = {
  'Nothing in the available area': null,
  'A status indicator': (
    <>
      <CheckmarkFilled16 className={`${storyClass}__status-icon`} /> Running
    </>
  ),
  // cspell: disable
  'Summary details': (
    <div style={{ display: 'flex' }}>
      <p
        style={{
          // stylelint-disable-next-line carbon/layout-token-use
          marginRight: '50px',
          maxWidth: '400px',
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <p>
        Property: Value
        <br />
        Property: Value
        <br />
        Property: Value
      </p>
    </div>
  ),
  // cspell: enable
  'Custom content': (
    <>
      <p>Severity 1: 0</p>
      <p>Severity 1: 814</p>
      <p>Severity 3: 3,108</p>
    </>
  ),
};

const navigation = {
  'No navigation': null,
  'Four tabs': (
    <Tabs>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
      <Tab label="Tab 4" />
    </Tabs>
  ),
  'Many tabs': (
    <Tabs>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
      <Tab label="Tab 4" />
      <Tab label="Tab 5" />
      <Tab label="Tab 6" />
      <Tab label="Tab 7" />
      <Tab label="Tab 8" />
    </Tabs>
  ),
  'Custom tabs': (
    <Tabs>
      <Tab label="Summary" />
      <Tab label="Region 1" />
      <Tab label="Region 2" />
      <Tab label="Region 3" />
    </Tabs>
  ),
};

const pageActions = {
  'No page actions': null,
  'A single primary page action': [
    {
      key: 'primary',
      kind: 'primary',
      label: 'Primary button',
      onClick: () => {},
    },
  ],
  'Primary and secondary page actions': [
    {
      key: 'secondary',
      kind: 'secondary',
      label: 'Secondary button',
      onClick: () => {},
    },
    {
      key: 'primary',
      kind: 'primary',
      label: 'Primary button',
      onClick: () => {},
    },
  ],
  'Primary and two secondary page actions': [
    {
      key: '1',
      kind: 'danger',
      label: 'Danger button',
      onClick: () => {},
    },
    {
      key: '2',
      kind: 'secondary',
      label: 'Secondary button',
      onClick: () => {},
    },
    {
      key: '3',
      kind: 'primary',
      label: 'Primary button',
      onClick: () => {},
    },
  ],
  'Custom page actions': [
    {
      key: 'acknowledge',
      kind: 'secondary',
      label: 'Acknowledge',
      onClick: () => {},
    },
    {
      key: 'escalate',
      kind: 'primary',
      label: 'Escalate',
      onClick: () => {},
    },
  ],
};

const tags = {
  'No tags': null,
  'Four tags': [
    { type: 'blue', label: 'A tag' },
    { type: 'green', label: 'A tag' },
    { type: 'warm-gray', label: 'A tag' },
    { type: 'purple', label: 'A tag' },
  ],
  'Many tags': [
    { type: 'blue', label: 'Blue' },
    { type: 'green', label: 'Green' },
    { type: 'warm-gray', label: 'Warm gray' },
    { type: 'purple', label: 'Purple' },
    { type: 'red', label: 'Red' },
    { type: 'teal', label: 'Teal' },
    { type: 'red', label: 'Longer ThanAPieceOfString' },
    { type: 'high-contrast', label: 'High contrast' },
    { type: 'magenta', label: 'Magenta' },
    { type: 'blue', label: 'Blue 2' },
    { type: 'green', label: 'Green 2' },
    { type: 'warm-gray', label: 'Warm gray 2' },
    { type: 'purple', label: 'Purple 2' },
    { type: 'red', label: 'Red 2' },
    { type: 'teal', label: 'Teal 2' },
    { type: 'red', label: 'Longer ThanAPieceOfString 2' },
    { type: 'high-contrast', label: 'High contrast 2' },
    { type: 'magenta', label: 'Magenta 2' },
  ],
  'Custom tags': [
    { type: 'cyan', label: 'Not urgent' },
    { type: 'red', label: 'Security' },
  ],
};

const title = {
  'No title': null,
  'Plain text title': 'Page title',
  'Title with icon': { text: 'Page title', loading: false, icon: Bee24 },
  'Long title with icon': {
    text: 'A very long page title which will almost certainly have to be truncated at some point',
    loading: false,
    icon: Bee24,
  },
  'Loading title': { text: 'Patience is a virtue', loading: true },
  'Custom title': {
    text: 'Authentication activity',
    loading: false,
    icon: Security24,
  },
};

export default {
  title: getStoryTitle(PageHeader.displayName),
  component: PageHeader,
  subcomponents: { ActionBarItem },
  parameters: { styles, layout: 'fullscreen', docs: { page: mdx } },
  decorators: [
    (story) => <div className={`${storyClass}__viewport`}>{story()}</div>,
  ],
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    actionBarItems: {
      control: {
        type: 'select',
        labels: Object.keys(actionBarItems),
      },
      options: Object.values(actionBarItems).map((_k, i) => i),
      mapping: Object.values(actionBarItems),
    },
    breadcrumbs: {
      control: {
        type: 'select',
        labels: Object.keys(breadcrumbs),
      },
      options: Object.values(breadcrumbs).map((_k, i) => i),
      mapping: Object.values(breadcrumbs),
    },
    children: {
      control: {
        type: 'select',
        labels: Object.keys(children),
      },
      options: Object.values(children).map((_k, i) => i),
      mapping: Object.values(children),
    },
    navigation: {
      control: {
        type: 'select',
        labels: Object.keys(navigation),
      },
      options: Object.values(navigation).map((_k, i) => i),
      mapping: Object.values(navigation),
    },
    pageActions: {
      control: {
        type: 'select',
        labels: Object.keys(pageActions),
      },
      options: Object.values(pageActions).map((_k, i) => i),
      mapping: Object.values(pageActions),
    },
    tags: {
      control: {
        type: 'select',
        labels: Object.keys(tags),
      },
      options: Object.values(tags).map((_k, i) => i),
      mapping: Object.values(tags),
    },
    title: {
      control: {
        type: 'select',
        labels: Object.keys(title),
      },
      options: Object.values(title).map((_k, i) => i),
      mapping: Object.values(title),
    },
  },
};

// Test values for props.

const actionBarOverflowAriaLabel = 'Show further action bar items';

const allTagsModalSearchLabel = 'Search all tags';
const allTagsModalSearchPlaceholderText = 'Enter search string';
const allTagsModalTitle = 'All tags';
const showAllTagsLabel = 'View all tags';

const breadcrumbOverflowAriaLabel =
  'Open and close additional breadcrumb item list.';

const collapseHeaderIconDescription = 'Collapse the page header';
const expandHeaderIconDescription = 'Expand the page header';

const pageActionsOverflowLabel = 'Page actions...';

const subtitle = 'Optional subtitle if necessary';
const longSubtitle =
  'Optional subtitle if necessary, which is very long in this case, but will need to be handled somehow. It just keeps going on and on and on and on and on.';
const demoSubtitle = 'This report details the monthly authentication failures';

const dummyPageContent = (
  <Grid className={`${storyClass}__dummy-content`} narrow={true}>
    <Row>
      <Column
        sm={1}
        md={2}
        lg={4}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #1</div>
      </Column>
      <Column
        sm={1}
        md={2}
        lg={4}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #2</div>
      </Column>
      <Column
        sm={2}
        md={4}
        lg={8}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #3</div>
      </Column>
    </Row>
  </Grid>
);

const demoDummyPageContent = (
  <Grid className={`${storyClass}__dummy-content`} narrow={true}>
    <Row>
      <Column
        sm={4}
        md={8}
        lg={16}
        className={`${storyClass}__dummy-content-block`}>
        <Table>
          <TableHead>
            <TableRow>
              {demoTableHeaders.map((header) => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {demoTableData.map((row) => (
              <TableRow key={row.Index}>
                {Object.keys(row).map((key) => {
                  return <TableCell key={key}>{row[key]}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>{' '}
      </Column>
    </Row>
  </Grid>
);

// Template.
// eslint-disable-next-line react/prop-types
const Template = ({ children, ...props }) => (
  <>
    <style>{`.${carbon.prefix}--modal { opacity: 0; }`};</style>
    <PageHeader {...props}>{children}</PageHeader>
    {dummyPageContent}
  </>
);

// Stories
export const withTitle = prepareStory(Template, {
  storyName: 'Simple page header with page title',
  args: {
    title: 2,
    hasBackgroundAlways: false,
  },
});

export const withBreadcrumbs = prepareStory(Template, {
  storyName: 'Simple page header with breadcrumb',
  args: {
    ...withTitle.args,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
  },
});

export const withButtons = prepareStory(Template, {
  storyName: 'Simple page header with status and actions',
  args: {
    ...withBreadcrumbs.args,
    pageActions: 2,
    pageActionsOverflowLabel,
    children: 1,
  },
});

export const withTabs = prepareStory(Template, {
  storyName: 'Page header with navigation tabs',
  args: {
    title: 2,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
    pageActions: 2,
    pageActionsOverflowLabel,
    navigation: 1,
  },
});

export const withTags = prepareStory(Template, {
  storyName: 'Page header with tags',
  args: {
    title: 2,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
    pageActions: 2,
    pageActionsOverflowLabel,
    tags: 1,
  },
});

export const withTabsAndTags = prepareStory(Template, {
  storyName: 'Page header with tags and navigation tabs',
  args: {
    title: 2,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
    pageActions: 2,
    pageActionsOverflowLabel,
    navigation: 1,
    tags: 1,
  },
});

export const withSubtitle = prepareStory(Template, {
  storyName: 'Page header with title and subtitle',
  args: {
    title: 2,
    subtitle,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
    navigation: 1,
  },
});

export const withSummaryDetails = prepareStory(Template, {
  storyName: 'Page header with summary details',
  args: {
    title: 2,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
    navigation: 1,
    children: 2,
  },
});

export const withActionsToolbar = prepareStory(Template, {
  storyName: 'Page header with actions toolbar',
  args: {
    title: 2,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
    navigation: 1,
    actionBarItems: 2,
    actionBarOverflowAriaLabel,
  },
});

export const withBreadcrumbActionsToolbarOnly = prepareStory(Template, {
  storyName: 'Reduced page header with breadcrumb bar only',
  args: {
    title: 1,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
    actionBarItems: 2,
    actionBarOverflowAriaLabel,
    collapseTitle: true,
  },
});

export const fullyLoaded = prepareStory(Template, {
  storyName: 'Page header with all items, pre-collapsed',
  args: {
    title: 2,
    subtitle,
    breadcrumbs: 2,
    breadcrumbOverflowAriaLabel,
    pageActions: 2,
    pageActionsOverflowLabel,
    children: 2,
    navigation: 1,
    tags: 1,
    actionBarItems: 2,
    actionBarOverflowAriaLabel,
    collapseHeader: true,
  },
});

export const fullyLoadedAndSome = prepareStory(Template, {
  storyName: 'Page header with long values and many items',
  args: {
    title: 3,
    subtitle: longSubtitle,
    breadcrumbs: 3,
    breadcrumbOverflowAriaLabel,
    pageActions: 3,
    pageActionsOverflowLabel,
    children: 2,
    navigation: 2,
    tags: 2,
    allTagsModalSearchLabel,
    allTagsModalSearchPlaceholderText,
    allTagsModalTitle,
    showAllTagsLabel,
    actionBarItems: 3,
    actionBarOverflowAriaLabel,
    hasCollapseHeaderToggle: true,
    collapseHeaderIconDescription,
    expandHeaderIconDescription,
  },
});

// Template for demo.
// eslint-disable-next-line react/prop-types
const TemplateDemo = ({ children, storyOptionWholePageScroll, ...props }) => {
  return (
    <>
      <style>{`.${carbon.prefix}--modal { opacity: 0; }`};</style>
      <div
        className={cx(`${storyClass}__app`, {
          [`${storyClass}__app--whole-page-scroll`]:
            !storyOptionWholePageScroll,
        })}
        key={storyOptionWholePageScroll ? 'keyYes' : 'keyNo'}>
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="IBM">
            Cloud Cognitive application
          </HeaderName>
        </Header>
        <div
          className={`${storyClass}__content-container`}
          style={{
            // stylelint-disable-next-line carbon/layout-token-use
            marginTop: '48px',
          }}>
          <PageHeader {...props}>{children}</PageHeader>
          {demoDummyPageContent}
        </div>
      </div>
    </>
  );
};

export const demo = prepareStory(TemplateDemo, {
  storyName: 'Page header in context',
  args: {
    storyOptionWholePageScroll: false,
    title: 5,
    subtitle: demoSubtitle,
    breadcrumbs: 4,
    breadcrumbOverflowAriaLabel,
    pageActions: 4,
    pageActionsOverflowLabel,
    children: 3,
    navigation: 3,
    tags: 3,
    actionBarItems: 4,
    actionBarOverflowAriaLabel,
    disableBreadcrumbScroll: true,
  },
});
