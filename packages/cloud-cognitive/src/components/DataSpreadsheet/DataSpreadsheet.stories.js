/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo, useState } from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { DataSpreadsheet } from '.';
import { generateData } from './utils/generateData';
import mdx from './DataSpreadsheet.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(DataSpreadsheet.displayName),
  component: DataSpreadsheet,
  argTypes: {
    onActiveCellChange: {
      action: 'active cell change',
    },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const NumericLayout = ({ value }) => {
  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {value}
    </span>
  );
};

const columnData = [
  {
    Header: 'Row Index',
    accessor: (row, index) => index,
    Cell: ({ cell: { value } }) => <NumericLayout value={value} />,
    placement: 'right',
  },
  {
    Header: 'Pet type',
    accessor: 'petType',
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: ({ cell: { value } }) => <NumericLayout value={value} />,
    placement: 'right',
  },
  {
    Header: 'Vet visits',
    accessor: 'visits',
    Cell: ({ cell: { value } }) => <NumericLayout value={value} />,
    placement: 'right',
  },
  {
    Header: 'Health',
    accessor: 'health',
    Cell: ({ cell: { value } }) => <NumericLayout value={value} />,
    placement: 'right',
  },
];

const Template = ({ ...args }) => {
  const [data, setData] = useState(() => generateData(16));
  const columns = useMemo(() => columnData, []);

  return (
    <DataSpreadsheet
      columns={columns}
      data={data}
      onDataUpdate={setData}
      id="spreadsheet--id"
      {...args}
    />
  );
};

const LargeTemplate = ({ ...args }) => {
  const [data, setData] = useState(() => generateData(16));
  const columns = useMemo(() => columnData, []);

  return (
    <DataSpreadsheet
      columns={columns}
      data={data}
      onDataUpdate={setData}
      id="spreadsheet--id"
      {...args}
    />
  );
};

export const dataSpreadsheet = prepareStory(Template, {
  storyName: 'Basic spreadsheet',
  args: {},
});

export const largeDatasetSpreadsheet = prepareStory(LargeTemplate, {
  storyName: 'Large dataset',
  args: {
    cellSize: 'large',
  },
});
