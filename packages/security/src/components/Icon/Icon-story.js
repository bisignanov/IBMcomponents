/**
 * @file Icon stories.
 * @copyright IBM Security 2019 - 2021
 */

import { Add20, Add24, Add32 } from '@carbon/icons-react';
import { miniUnits } from '@carbon/layout';

import { storiesOf } from '@storybook/react';
import React from 'react';

import { components } from '../../../.storybook';
import theme from '../../globals/theme';

import { Icon } from '../..';

import { renderIcon } from './_mocks_';
import { InlineNotification, NotificationActionButton } from '../../';
import { Grid } from 'carbon-components-react';

const iconProps = {
  style: { fill: theme.icon01, margin: miniUnits(1) },
};

storiesOf(components('Icon#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://react.carbondesignsystem.com/?path=/story/elements-icons--default"
            rel="noopener noreferrer"
            target="_blank"
          >
            View replacement
          </NotificationActionButton>
        }
        kind="info"
        subtitle="Component no longer supported. The component will remain available, but plan to migrate to the component replacement."
        title=""
        hideCloseButton
      />
      <Grid>
        <Story />
      </Grid>
    </>
  ))
  .add(
    'Default',
    () => (
      <>
        {[renderIcon, Add20, Add24, Add32].map((size, index) => {
          const key = `icon__${index}`;

          return <Icon key={key} renderIcon={size} {...iconProps} />;
        })}
      </>
    ),

    {
      info: {
        text: `
          Basic implementation of an Icon component.
        `,
      },
    }
  );
