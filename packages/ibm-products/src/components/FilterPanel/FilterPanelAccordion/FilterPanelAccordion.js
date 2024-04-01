/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { Accordion } from '@carbon/react';

import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';
import { FilterPanelGroup } from '..';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--filter-panel-accordion`;
const componentName = 'FilterPanelAccordion';

const defaults = {
  accordionProps: {},
};

/**
 * A container with a label and optional count.
 */
export let FilterPanelAccordion = React.forwardRef(
  (
    {
      accordionProps = defaults.accordionProps,
      children,
      className,
      count,
      labelText,
      title,
      ...rest
    },
    ref
  ) => {
    const { align, ...otherAccordionProps } = accordionProps;
    return (
      <FilterPanelGroup
        {...rest}
        className={cx(blockClass, className)}
        count={count}
        labelText={labelText}
        ref={ref}
        title={title}
        {...getDevtoolsProps(componentName)}
      >
        <Accordion
          {...otherAccordionProps}
          align={align || 'start'}
          className={`${blockClass}__list`}
        >
          {children}
        </Accordion>
      </FilterPanelGroup>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
FilterPanelAccordion = pkg.checkComponentEnabled(
  FilterPanelAccordion,
  componentName
);

FilterPanelAccordion.displayName = componentName;

FilterPanelAccordion.propTypes = {
  /**
   * Props specific to the internal `Accordion`.
   */
  accordionProps: PropTypes.shape({}),

  /**
   * Provide the contents of the FilterPanelAccordion.
   */
  children: PropTypes.node.isRequired,

  /**
   * Optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Number to be displayed with the label.
   */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The label for the component.
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Optional title attribute for the label.
   */
  title: PropTypes.string,
};
