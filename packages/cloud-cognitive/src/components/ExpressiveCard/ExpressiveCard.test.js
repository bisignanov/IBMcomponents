/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';

import { ExpressiveCard } from '.';
import '../../enable-all'; // must come before component is imported (directly or indirectly)

const { name } = ExpressiveCard;
const defaultProps = {};

describe(name, () => {
  test('should render', async () => {
    render(<ExpressiveCard {...defaultProps} />);
  });
});
