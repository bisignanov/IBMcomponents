/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon } from '../../../packages/ibm-products/src/settings';

test.describe('ImportModal @avt', () => {
  test.only('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ImportModal',
      id: 'ibm-products-patterns-import-and-upload-importmodal--standard',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Launch modal').click();
    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await expect(modalElement).toBeVisible();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations('ImportModal @avt-default-state');
  });
});
