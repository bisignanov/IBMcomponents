//
// Copyright IBM Corp. 2022, 2023
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { render, screen } from '@testing-library/react';
import React from 'react';
import { AddSelect } from './AddSelect';
import { pkg } from '../../settings';

const componentName = AddSelect.displayName;

const defaultProps = {
  closeIconDescription: 'test icon description',
  description: 'test description',
  globalFiltersLabel: 'filters',
  globalSearchLabel: 'global search label',
  items: {
    entries: [
      {
        id: 'test-entry-1',
        title: 'test entry 1 title',
        value: 'test-entry-1',
      },
    ],
  },
  itemsLabel: 'test items label',
  multi: false,
  noResultsDescription: 'no results body',
  noResultsTitle: 'no results title',
  onClose: () => {},
  onCloseButtonText: 'close button text',
  onSubmit: () => {},
  onSubmitButtonText: 'submit button text',
  open: true,
  title: 'test title',
};

const initialDefaultPortalTargetBody = pkg.isFeatureEnabled(
  'default-portal-target-body',
  true
);

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    pkg.feature['default-portal-target-body'] = false;
  });

  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
    pkg.feature['default-portal-target-body'] = initialDefaultPortalTargetBody;
  });

  it('renders single without hierarchy', async () => {
    await render(<AddSelect {...defaultProps} />);
    expect(screen.getByText('test entry 1 title')).toBeVisible();
  });

  it('renders single with hierarchy', async () => {
    const newProps = {
      ...defaultProps,
      items: {
        entries: [
          {
            id: 'test-entry-1',
            title: 'test entry 1 title',
            value: 'test-entry-1',
            children: {
              entries: [
                {
                  id: 'test-entry-1-1',
                  title: 'test entry 1-1 title',
                  value: 'test-entry-1-1',
                },
              ],
            },
          },
        ],
      },
      navIconDescription: 'view children',
    };
    await render(<AddSelect {...newProps} />);
    expect(screen.getByText('test entry 1 title')).toBeVisible();
    expect(screen.getByText('view children')).toBeInTheDocument();
  });

  it('renders with global filters', async () => {
    const newProps = {
      ...defaultProps,
      noSelectionTitle: 'no selection title',
      multi: true,
      columnInputPlaceholder: 'find',
      navIconDescription: 'view children',
      globalFilters: [
        {
          id: 'fileType',
          label: 'File type',
        },
      ],
      globalFiltersIconDescription: 'filter icon description',
      globalFiltersPlaceholderText: 'Choose an option',
      globalFiltersPrimaryButtonText: 'Apply',
      globalFiltersSecondaryButtonText: 'Reset',
      items: {
        entries: [
          {
            id: 'test-entry-1',
            title: 'test entry 1 title',
            value: 'test-entry-1',
            fileType: 'test',
            children: {
              entries: [
                {
                  id: 'test-entry-1-1',
                  title: 'test entry 1-1 title',
                  value: 'test-entry-1-1',
                  fileType: 'test',
                },
              ],
            },
          },
        ],
      },
    };
    await render(<AddSelect {...newProps} />);
    expect(
      screen.getByLabelText('filter icon description')
    ).toBeInTheDocument();
  });

  it('renders with modifiers', async () => {
    const newProps = {
      ...defaultProps,
      noSelectionTitle: 'no selection title',
      multi: true,
      items: {
        modifiers: {
          id: 'role',
          label: 'Role',
          options: ['editor'],
        },
        entries: [
          {
            id: 'test-entry-1',
            title: 'test entry 1 title',
            value: 'test-entry-1',
            role: 'editor',
          },
        ],
      },
    };
    await render(<AddSelect {...newProps} />);
    expect(screen.getByTitle('editor')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = await render(<AddSelect {...defaultProps} />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    const { container } = await render(
      <AddSelect {...defaultProps} className="test-class" />
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('adds additional properties to the containing node', async () => {
    await render(<AddSelect {...defaultProps} data-testid="test-id" />);
    screen.getByTestId('test-id');
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    await render(<AddSelect {...defaultProps} ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
