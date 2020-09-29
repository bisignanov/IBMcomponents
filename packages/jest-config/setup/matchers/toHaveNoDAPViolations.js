/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

let accessibilityChecker;

export default async (node, label) => {
  // Defer the initialization of `accessibility-checker` to avoid race condition when running a testing suite in Node.js without jsdom.
  if (!accessibilityChecker) {
    accessibilityChecker = require('accessibility-checker');
  }

  const {
    assertCompliance,
    getCompliance,
    stringifyResults,
  } = accessibilityChecker;

  const { report } = await getCompliance(node, label);

  return {
    message: () => stringifyResults(report),
    pass: assertCompliance(report) === 0,
  };
};
