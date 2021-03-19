//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';
import { idePrefix } from '../../globals/js/settings';

const IdeButton = React.forwardRef(
  ({ children, className, iconAnimation, ...otherProps }, ref) => {
    let buttonClasses =
      iconAnimation === 'rotate-180-anti'
        ? `${idePrefix}-btn--rotate-180-anti`
        : '';
    if (className) {
      buttonClasses += ' ' + className;
    }
    return (
      <Button ref={ref} className={buttonClasses} {...otherProps}>
        {children}
      </Button>
    );
  }
);

IdeButton.displayName = 'IdeButton';

IdeButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  iconAnimation: PropTypes.string,
};

export default IdeButton;
