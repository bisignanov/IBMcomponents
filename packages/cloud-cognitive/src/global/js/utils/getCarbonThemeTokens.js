/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { tokens, formatTokenName } from '@carbon/themes';

// map themes to recognizable tokens
const themeTokens = tokens.colors.map((token) => `$${formatTokenName(token)}`);

export { themeTokens };
