/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { stripUnwantedProps } from '../../global/js/utils/props-helper';

// Carbon and package components we use.
import { ModalHeader, ModalBody } from 'carbon-components-react';

import { TearsheetShell } from './TearsheetShell';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--tearsheet`;
const componentName = 'TearsheetNarrow';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * A tearsheet is a mostly full-screen type of dialog that keeps users in-context
 * and focused by bringing actionable content front and center while revealing
 * parts of the UI behind it. There are two sizes of tearsheets: narrow and wide.
 *
 * A tearsheet is comprised of up to 5 zones, allowing for flexibility depending on
 * the content.
 */
export let TearsheetNarrow = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      buttons,
      children,
      // className is passed directly to TearsheetShell in 'rest'
      closeIconDescription,
      description,
      hasCloseIcon,
      // height is passed directly to TearsheetShell in 'rest'
      label,
      // onClose, open, preventCloseOnClickOutside are passed directly to TearsheetShell in 'rest'
      title,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => (
    <TearsheetShell
      {
        // Pass through any other property values.
        ...stripUnwantedProps(rest, ['size'])
      }
      ref={ref}
      size="narrow">
      {(label || title || description || hasCloseIcon) && (
        <ModalHeader
          className={`${blockClass}__header`}
          closeClassName={cx({
            [`${blockClass}__header--no-close-icon`]: !hasCloseIcon,
          })}
          iconDescription={closeIconDescription}
          label={label}
          title={title}>
          {description && (
            <div className={`${blockClass}__header-description`}>
              {description}
            </div>
          )}
        </ModalHeader>
      )}
      <ModalBody className={`${blockClass}__body`}>
        <div className={`${blockClass}__right`}>
          {children && <div className={`${blockClass}__main`}>{children}</div>}
          {buttons && <div className={`${blockClass}__buttons`}>{buttons}</div>}
        </div>
      </ModalBody>
    </TearsheetShell>
  )
);

// Return a placeholder if not released and not enabled by feature flag
TearsheetNarrow = pkg.checkComponentEnabled(TearsheetNarrow, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
TearsheetNarrow.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
TearsheetNarrow.propTypes = {
  /**
   * Specifies the content for the buttons section of the Tearsheet.
   * Optional.
   */
  buttons: PropTypes.node,

  /**
   * Specifies the content of the Tearsheet body.
   * Optional.
   */
  children: PropTypes.node,

  /**
   * Specifies class(es) to be applied to the top-level Tearsheet node.
   * Optional.
   */
  className: PropTypes.string,

  /**
   * The description for the close icon.
   * Optional.
   */
  closeIconDescription: PropTypes.string,

  /**
   * Specifies the description of the Tearsheet.
   * Optional.
   */
  description: PropTypes.node,

  /**
   * Specifies if the Tearsheet has a close icon.
   * Optional.
   */
  hasCloseIcon: PropTypes.bool,

  /**
   * Specifies the height of the tearsheet `'normal' | 'lower'`. Lower is
   * 40px lower to allow more underlying content to be visible. Optional.
   */
  height: PropTypes.oneOf(['normal', 'lower']),

  /**
   * Specifies the label of the Tearsheet.
   * Optional.
   */
  label: PropTypes.node,

  /**
   * Specifies an optional handler that is called when closing the modal.
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the Tearsheet is currently open or
   * not.
   */
  open: PropTypes.bool,

  /**
   * Prevents the Tearsheet from closing automatically if the user clicks outside of it.
   * Optional.
   */
  preventCloseOnClickOutside: PropTypes.bool,

  /**
   * Specifies the title of the Tearsheet.
   * Optional.
   */
  title: PropTypes.node,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
TearsheetNarrow.defaultProps = {
  closeIconDescription: 'Close',
  hasCloseIcon: true,
  height: 'normal',
};
