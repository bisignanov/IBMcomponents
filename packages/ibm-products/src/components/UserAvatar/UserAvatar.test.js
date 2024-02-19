/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { expectError, required } from '../../global/js/utils/test-helper';
import { pkg, carbon } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { UserAvatar } from '.';
import { User } from '@carbon/react/icons';

const blockClass = `${pkg.prefix}--user-avatar`;
const componentName = UserAvatar.displayName;

// values to use
const dataTestId = uuidv4();

const renderComponent = ({ ...rest } = {}) =>
  render(<UserAvatar {...{ ...rest }} />);

describe(componentName, () => {
  it('should return a circle with background color', async () => {
    renderComponent({
      backgroundColor: 'light-cyan',
    });
    const element = screen.getByRole('img');
    const hasBackgroundColor = element.className.includes('light-cyan');
    expect(hasBackgroundColor).toBeTruthy();
  });

  it('should return an icon for the avatar image', async () => {
    const { container } = renderComponent({ renderIcon: User });
    const renderedSVG = container.getElementsByTagName('svg');
    expect(renderedSVG).toBeTruthy();
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent({ renderIcon: User });
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    const customClass = 'test';
    renderComponent({
      className: customClass,
    });
    const element = screen.getByRole('img');
    expect(element).toHaveClass(customClass);
  });

  it('adds additional props to the containing node', async () => {
    renderComponent({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    renderComponent({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('should return appropriately size circle based on size prop', async () => {
    renderComponent({ size: 'md' });
    const element = screen.getByRole('img');
    const hasSizeClass = element.className.includes('md');
    expect(hasSizeClass).toBeTruthy();
  });

  it('should render the initials when passed the name prop', async () => {
    renderComponent({ name: 'Display name' });
    expect(screen.getByText(/DN/));
  });

  it('should render the initials when simply passing two names to the name prop', async () => {
    renderComponent({ name: 'DN' });
    expect(screen.getByText(/DN/));
  });

  it('should render a tooltip if the tooltipText is supplied', async () => {
    renderComponent({ tooltipText: 'Display name' });
    const element = screen.getByRole('img');
    const tooltipElement = element.closest(`span.${carbon.prefix}--tooltip`);
    expect(tooltipElement).toBeTruthy();
  });

  it('should not render a tooltip if the tooltipText is not supplied', async () => {
    renderComponent({ tooltipText: '' });
    const element = screen.getByRole('img');
    const tooltipElement = element.closest(`span.${carbon.prefix}--tooltip`);
    expect(tooltipElement).not.toBeTruthy();
  });

  it('should render image for the avatar image', async () => {
    const { container } = renderComponent({
      image:
        'https://dam.ibm.com/content/dam/worldwide-content/stock-assets/getty/image/photography/3c/b5/ti6100131.jpg.library.preview_lg_2x.1706701937316.jpg',
      imageDescription: 'test alt text',
    });
    const imagePath = container.querySelector('img').getAttribute('src');
    expect(typeof imagePath).toBe('string');
  });

  it('should throw a custom prop type validation error when an image is used without an imageDescription prop', async () =>
    expectError(required('imageDescription', 'UserProfileImage'), () => {
      renderComponent({ image: 'path_to_image.jpg' });
    }));
});
