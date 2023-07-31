/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { createRef } from 'react';

import { Toolbar, ToolbarGroup, ToolbarButton } from './index';
import uuidv4 from '../../global/js/utils/uuidv4';

import { blockClass, componentName } from './Toolbar';
import { blockClass as toolbarButtonClass } from './ToolbarButton';
import { pkg, carbon } from '../../settings';

const { getByTestId, getByText } = screen;
const { keyboard, tab } = userEvent;

function _instance(prop) {
  return `${uuidv4()}--${prop}`;
}

function toBeAccessible(label, node, displayName) {
  it.skip(label, async () => {
    const { container } = await render(node);

    await expect(container).toBeAccessible(`${displayName} — ${label}`);
    await expect(container).toHaveNoAxeViolations();
  });
}

const children = _instance('children');
const dataTestId = _instance('dataTestId');

const props = { children };

function it(Component) {
  toBeAccessible(
    'has no accessibility violations',
    <Component {...props} />,
    Component.displayName
  );

  it('renders children', async () => {
    const { container } = await render(<Component {...props} />);

    console.log(container.outerHTML);

    getByText(children);
  });

  it('adds a class to the containing node', async () => {
    const className = _instance('class-name');
    await render(
      <Component {...props} className={className} data-testid={dataTestId} />
    );

    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    await render(<Component {...props} data-testid={dataTestId} />);

    getByTestId(dataTestId);
  });

  it('forwards a reference to the appropriate DOM node', async () => {
    const ref = createRef();
    await render(<Component {...props} ref={ref} data-testid={dataTestId} />);

    expect(getByTestId(dataTestId)).toEqual(ref.current);
  });
}
const toolbarButtonComponentName = ToolbarButton.displayName;
describe(toolbarButtonComponentName, () => {
  beforeAll(() => {
    pkg.setAllComponents(true);
  });

  it(ToolbarButton);

  toBeAccessible(
    'has no accessibility violations for the caret variant',
    <ToolbarButton {...props} caret />,
    ToolbarButton.displayName
  );

  it('renders the caret variant', async () => {
    const { rerender } = await render(
      <ToolbarButton data-testid={dataTestId} />
    );

    const className = `${toolbarButtonClass}--caret`;
    expect(getByTestId(dataTestId)).not.toHaveClass(className);

    await rerender(<ToolbarButton data-testid={dataTestId} caret />);
    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  it("renders the 'right' tooltip position for the vertical variant by default", async () => {
    const { rerender } = await render(
      <ToolbarButton data-testid={dataTestId} />
    );

    const className = `${carbon.prefix}--popover--right`;
    expect(getByTestId(dataTestId).parentElement.parentElement).not.toHaveClass(
      className,
      {
        exact: false,
      }
    );

    await rerender(
      <Toolbar vertical>
        <ToolbarButton data-testid={dataTestId} />
      </Toolbar>
    );
    expect(getByTestId(dataTestId).parentElement.parentElement).toHaveClass(
      className,
      {
        exact: false,
      }
    );
  });
});

describe(ToolbarGroup.displayName, () => {
  beforeAll(() => {
    pkg.setAllComponents(true);
  });
  it(ToolbarGroup);
});

describe(componentName, () => {
  beforeAll(() => {
    pkg.setAllComponents(true);
  });

  it(Toolbar);

  it('renders the vertical variant', async () => {
    const { rerender } = await render(
      <Toolbar {...props} data-testid={dataTestId} vertical={true} />
    );

    const className = `${blockClass}--vertical`;
    expect(getByTestId(dataTestId)).toHaveClass(className);

    await rerender(<Toolbar {...props} data-testid={dataTestId} vertical />);
    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  const instance = _instance(componentName);

  function _array(length) {
    return new Array(length).fill();
  }

  function getText(id) {
    return `${instance}--${id}`;
  }

  function key(text) {
    return act(() => keyboard(`{${text}}`));
  }

  async function setupFocus(length = 3, props) {
    await render(
      <Toolbar {...props}>
        {_array(length).map((_value, index) => {
          const children = getText(index);

          return <ToolbarButton key={children}>{children}</ToolbarButton>;
        })}
      </Toolbar>
    );

    expect(document.body).toHaveFocus();

    await act(() => tab());

    expect(getByText(getText(0))).toHaveFocus();
  }

  it('moves the focus out when tabbed', async () => {
    await setupFocus();

    await act(() => tab());

    expect(document.body).toHaveFocus();
  });

  it('sets focus on the item that previously contained focus', async () => {
    await setupFocus();

    await key('ArrowRight');

    expect(getByText(getText(1))).toHaveFocus();
  });

  async function setupKeyFocus(props) {
    const length = 5;

    await setupFocus(length, props);

    return _array(length - 1);
  }

  async function expectMove(text, id) {
    await act(async () => await key(text));

    expect(getByText(getText(id))).toHaveFocus();
  }

  async function expectNextKeyFocus(text, props) {
    const items = await setupKeyFocus(props);
    items.forEach(async (_value, index) => await expectMove(text, index + 1));
  }

  it('moves focus to the next item', async () => {
    expectNextKeyFocus('ArrowRight');
  });

  async function expectPreviousKeyFocus({ next, previous }, props) {
    const items = await setupKeyFocus(props);
    const { length } = items;

    await act(() => {
      items.forEach(async () => await key(next));
    });

    items.forEach((_value, index) =>
      expectMove(previous, length - (index + 1))
    );
  }

  it('moves focus to the previous item', async () => {
    expectPreviousKeyFocus({ next: 'ArrowRight', previous: 'ArrowLeft' });
  });

  toBeAccessible(
    'has no accessibility violations for the vertical variant',
    <Toolbar {...props} vertical />,
    componentName
  );

  it('moves focus to the next item for the vertical variant', async () => {
    expectNextKeyFocus('ArrowDown', { vertical: true });
  });

  it('moves focus to the previous item for the vertical variant', async () => {
    expectPreviousKeyFocus(
      { next: 'ArrowDown', previous: 'ArrowUp' },
      { vertical: true }
    );
  });
});
