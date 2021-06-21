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
import { pkg } from '../../settings';
import {
  allPropTypes,
  deprecateProp,
  prepareProps,
} from '../../global/js/utils/props-helper';

// Carbon and package components we use.
import { Button } from 'carbon-components-react';
import { ActionSet } from '../ActionSet';

import {
  tearsheetHasCloseIcon,
  TearsheetShell,
  tearsheetShellWideProps as blocked,
} from './TearsheetShell';

const componentName = 'TearsheetNarrow';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * A narrow tearsheet is a slimmer variant of the tearsheet, providing a dialog
 * that keeps users in-context and focused by bringing actionable content front
 * and center while revealing more of the UI behind it.
 *
 * A narrow earsheet comprises 3 zones: a heading area including a title, the
 * main content area, and a set of action buttons.
 */
export let TearsheetNarrow = React.forwardRef((props, ref) => (
  <TearsheetShell {...prepareProps(props, blocked, { ref, size: 'narrow' })} />
));

// Return a placeholder if not released and not enabled by feature flag
TearsheetNarrow = pkg.checkComponentEnabled(TearsheetNarrow, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
TearsheetNarrow.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

// Note that the descriptions here should be kept in sync with those for the
// corresponding props for Tearsheet and TearsheetShell components.
TearsheetNarrow.propTypes = {
  /**
   * The navigation actions to be shown as buttons in the action area at the
   * bottom of the tearsheet. Each action is specified as an object with
   * optional fields: 'label' to supply the button label, 'kind' to select the
   * button kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to
   * display a loading indicator, and 'onClick' to receive notifications when
   * the button is clicked. Additional fields in the object will be passed to
   * the Button component, and these can include 'disabled', 'ref', 'className',
   * and any other Button props. Any other fields in the object will be passed
   * through to the button element as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: allPropTypes([
    ActionSet.validateActions(() => 'lg'),
    PropTypes.arrayOf(
      PropTypes.shape({
        ...Button.propTypes,
        kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
        label: PropTypes.string,
        loading: PropTypes.bool,
        // we duplicate this Button prop to improve the DocGen here
        onClick: Button.propTypes.onClick,
      })
    ),
  ]),

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The accessibility title for the close icon (if shown).
   *
   * **Note:** This prop is only required if a close icon is shown, i.e. if
   * there are a no navigation actions and/or hasCloseIcon is true.
   */
  closeIconDescription: PropTypes.string.isRequired.if(
    ({ actions, hasCloseIcon }) => tearsheetHasCloseIcon(actions, hasCloseIcon)
  ),

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * Enable a close icon ('x') in the header area of the tearsheet. By default,
   * a tearsheet does not display a close icon, but one should be enabled if
   * the tearsheet is read-only or has no navigation actions (sometimes called
   * a "passive tearsheet").
   */
  hasCloseIcon: PropTypes.bool,

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: PropTypes.node,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * Prevent the tearsheet from automatically closing (triggering onClose, if
   * provided, which can be cancelled by returning 'false') if the user clicks
   * outside it.
   */
  preventCloseOnClickOutside: deprecateProp(
    PropTypes.bool,
    'The tearsheet will close automatically if the user clicks outside it if and only if the tearsheet is passive (no navigation actions)'
  ),

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: PropTypes.node,

  /**
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position (the default) is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower']),
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
TearsheetNarrow.defaultProps = {
  verticalPosition: 'normal',
};
