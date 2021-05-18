/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import cx from 'classnames';
import { Button, InlineLoading } from 'carbon-components-react';
import {
  Save16,
  CheckmarkOutline16,
  ErrorOutline16,
  ErrorFilled16,
} from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
const componentName = 'Saving';

export let Saving = forwardRef(
  (
    {
      secondaryButtonText,
      className,
      defaultIconDescription,
      defaultText,
      failIconDescription,
      failText,
      inProgressIconDescription,
      inProgressText,
      onRequestCancel,
      onRequestSave,
      status,
      successIconDescription,
      successText,
      type,
      ...rest
    },
    ref
  ) => {
    const statusObj = {
      default: {
        text: defaultText,
        iconDescription: defaultIconDescription,
        icon: CheckmarkOutline16,
      },
      ['in-progress']: {
        text: inProgressText,
        iconDescription: inProgressIconDescription,
        icon: InlineLoading,
      },
      success: {
        text: successText,
        iconDescription: successIconDescription,
        icon: Save16,
      },
      fail: {
        text: failText,
        iconDescription: failIconDescription,
        icon: ErrorOutline16,
      },
    };
    const blockClass = `${pkg.prefix}--saving`;

    return (
      <div {...rest} ref={ref} className={cx(blockClass, className)}>
        {type === 'auto' ? (
          <div className={`${blockClass}__message`}>
            {status === 'fail' && (
              <div className={`${blockClass}__error-icon`}>
                <ErrorFilled16 />
              </div>
            )}
            <p className={`${blockClass}__text`}>{statusObj[status]?.text}</p>
          </div>
        ) : (
          <div className={`${blockClass}__buttons`}>
            <Button
              onClick={onRequestCancel}
              kind="secondary"
              disabled={status !== 'in-progress'}
              type="button">
              {secondaryButtonText}
            </Button>
            <Button
              onClick={onRequestSave}
              kind="primary"
              renderIcon={statusObj[status]?.icon}
              iconDescription={statusObj[status]?.iconDescription}
              disabled={status === 'in-progress'}
              type="button">
              {statusObj[status]?.text}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

Saving = pkg.checkComponentEnabled(Saving, componentName);

Saving.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Description for default state icon (manual).
   */
  defaultIconDescription: PropTypes.string,
  /**
   * Default text for the save button (manual). Per design guidelines you probably don't want to display this in the auto mode.
   */
  defaultText: PropTypes.string,
  /**
   * Description for fail state icon (manual).
   */
  failIconDescription: PropTypes.string,
  /**
   * Text for failure state.
   */
  failText: PropTypes.string,
  /**
   * Description for in progress state icon (manual).
   */
  inProgressIconDescription: PropTypes.string,
  /**
   * Text for in progress state.
   */
  inProgressText: PropTypes.string,
  /**
   * Function handler for cancel button (manual).
   */
  onRequestCancel: PropTypes.func,
  /**
   * Function handler for save button (manual).
   */
  onRequestSave: PropTypes.func,
  /**
   * Text for the secondary or cancel button (manual).
   */
  secondaryButtonText: PropTypes.string,
  /**
   * The status of the save. default being the untouched default state -> in-progress being a save has been initiated -> fail or success being the outcome.
   */
  status: PropTypes.oneOf(['default', 'in-progress', 'success', 'fail'])
    .isRequired,
  /**
   * Description for success state icon (manual).
   */
  successIconDescription: PropTypes.string,
  /**
   * Text for success state
   */
  successText: PropTypes.string,
  /**
   * Designates the style of the save component. Manual uses a set of buttons and auto just displays a string. See usage guidelines for additional information.
   */
  type: PropTypes.oneOf(['manual', 'auto']).isRequired,
};

Saving.displayName = componentName;
