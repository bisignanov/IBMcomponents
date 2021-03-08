/**
 * Copyright IBM Corp. FULL_YEAR, FULL_YEAR
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { node, string } from 'prop-types';
import React from 'react';
import { Canary } from '../_Canary';

/**
 * TODO: @import(s) of carbon components
 */

/**
 * TODO: Add use of Carbon prefix if needed
 */
import { pkg /*, carbon */ } from '../../settings';

const blockClass = `${pkg.prefix}--STYLE_NAME`;
const componentName = 'DISPLAY_NAME';

// NOTE: SCSS is not imported directly here: it is rolled up separately.

/**
 * TODO: Description.
 */
export const DISPLAY_NAME = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({ children, className, ...rest }) => {
      return (
        <div className={cx(blockClass, className)} {...rest}>
          {children}
        </div>
      );
    };

DISPLAY_NAME.displayName = componentName; // displayName is used in preference to function.name by React

// TODO: Prop type checking - https://www.npmjs.com/package/prop-types#usage
DISPLAY_NAME.propTypes = {
  /** Provide the contents of the `DISPLAY_NAME` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

DISPLAY_NAME.defaultProps = {
  className: null,
};
