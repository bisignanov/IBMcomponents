/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {
  CustomizeColumnsTearsheetWrapper,
  ToggleButtonWrapper,
} from './Datagrid/addons/CustomizeColumns';

const useCustomizeColumns = (hooks) => {
  const [isTearsheetOpen, setIsTearsheetOpen] = React.useState(false);
  hooks.useInstance.push((instance) => {
    const { customizeColumnsProps } = instance;
    const { labels } = customizeColumnsProps || {};
    Object.assign(instance, {
      customizeColumnsProps: {
        ...customizeColumnsProps,
        isTearsheetOpen,
        setIsTearsheetOpen,
      },
      CustomizeColumnsButton: (props) => (
        <ToggleButtonWrapper
          iconTooltipLabel={labels?.iconTooltipLabel}
          isTearsheetOpen={isTearsheetOpen}
          setIsTearsheetOpen={setIsTearsheetOpen}
          {...props}
        />
      ),
      CustomizeColumnsTearsheet: CustomizeColumnsTearsheetWrapper,
    });
  });
};

export default useCustomizeColumns;
