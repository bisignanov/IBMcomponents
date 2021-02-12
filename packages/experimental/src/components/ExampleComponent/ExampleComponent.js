/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, ButtonSet } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

import { pkgPrefix } from '../../global/js/settings';
import cx from 'classnames';

const blockClass = `${pkgPrefix}-example-component`;

// import './example-component.scss'; // Do not import SCSS directly it will be rolled up separately.

export const ExampleComponent = ({
  borderColor,
  boxedBorder,
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonLabel,
  primaryKind,
  secondaryButtonLabel,
  secondaryKind,
  size,
  ...props
}) => {
  const mode = boxedBorder
    ? `${blockClass}--boxed-set`
    : `${blockClass}--shadow-set`;

  const handlePrimaryClick = (e) => {
    if (onPrimaryClick) {
      onPrimaryClick(e);
    }
  };

  const handleSecondaryClick = (e) => {
    if (onSecondaryClick) {
      onSecondaryClick(e);
    }
  };

  return (
    <ButtonSet
      className={cx([blockClass, `${blockClass}--${size}`, mode])}
      style={{
        /* stylelint-disable-next-line carbon/theme-token-use */
        [`--${pkgPrefix}-border-color`]: borderColor,
      }}
      {...props}>
      <Button
        kind={secondaryKind}
        onClick={handleSecondaryClick}
        size={size}
        disabled={props.disabled}>
        {secondaryButtonLabel}
      </Button>
      <Button
        kind={primaryKind}
        onClick={handlePrimaryClick}
        size={size}
        disabled={props.disabled}>
        {primaryButtonLabel}
      </Button>
    </ButtonSet>
  );
};

ExampleComponent.propTypes = {
  /**
   * What border color to use
   */
  borderColor: PropTypes.string,
  /**
   * Is the border a box or a shadow
   */
  boxedBorder: PropTypes.bool,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * Optional primary click handler
   */
  onPrimaryClick: PropTypes.func,
  /**
   * Optional secondary click handler
   */
  onSecondaryClick: PropTypes.func,
  /**
   * Primary button label
   */
  primaryButtonLabel: PropTypes.string.isRequired,
  /**
   * What is the primary kind
   */
  primaryKind: PropTypes.oneOf(['primary', 'danger']),
  /**
   * Secondary button label
   */
  secondaryButtonLabel: PropTypes.string.isRequired,
  /**
   * What is the secondary kind
   */
  secondaryKind: PropTypes.oneOf(['secondary', 'tertiary']),
  /**
   * How large should the buttons be?
   */
  size: PropTypes.oneOf(['default', 'small', 'field']),
};

ExampleComponent.defaultProps = {
  boxedBorder: false,
  borderColor: null,
  size: 'default',
  primaryButtonLabel: 'Primary',
  secondaryButtonLabel: 'Secondary',
  primaryKind: 'primary',
  secondaryKind: 'secondary',
  onPrimaryClick: undefined,
  onSecondaryClick: undefined,
};
