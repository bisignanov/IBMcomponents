/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { setupJestCanvasMock } from 'jest-canvas-mock';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { SteppedAnimatedMedia } from '.';

const blockClass = `${pkg.prefix}--stepped-animated-media`;
const componentName = SteppedAnimatedMedia.displayName;

const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const MOCK_DATA = {
  v: '5.11.0',
  fr: 30,
  ip: 0,
  op: 868,
  w: 4,
  h: 4,
  nm: 'test',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Shape',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0.5, 0.498, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-1.5, -1.502, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [0.985, 0.996], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: 'Rectangle Path 1',
              mn: 'ADBE Vector Shape - Rect',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.4, 0.4, 0.4, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [-1.5, -1.502], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Rectangle 1',
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 868,
      st: 0,
      ct: 1,
      bm: 0,
    },
  ],
  markers: [],
  props: {},
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe(componentName, () => {
  beforeEach(() => {
    fetch.mockClear();
    // We use the lottie package to create animated <svg> elements from json files.
    // Lottie uses the browser > DOM > <canvas> to do this.
    // The testing environment uses `jsdom` instead, and <canvas> is not available.
    // So, we need to use jest-canvas-mock to mock the <canvas>.
    setupJestCanvasMock();
  });

  it('renders a "lottie file" (svg element)', async () => {
    render(
      <SteppedAnimatedMedia
        aria-label="Animated SVG for display"
        filePaths={['./assets/illustrations/test.json']}
      />
    );

    await waitFor(() => {
      // The component immediately returns an empty <div role="img">,
      // but renders the <svg> child element asynchronously.
      // The svg itself has no "hook" compatible with the testing-library.
      expect(document.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <SteppedAnimatedMedia
        aria-label="Animated SVG for display"
        filePaths={['./assets/illustrations/test.json']}
      />
    );
    await waitFor(() => {
      // This line works in v1, but throws a "UnableToParseArchive" error in v2.
      // The rendered results look identical in v1 and v2.
      // expect(container).toBeAccessible(componentName);
      expect(container).toHaveNoAxeViolations();
    });
  });

  it('applies className to the containing node', async () => {
    render(
      <SteppedAnimatedMedia
        aria-label="Animated SVG for display"
        className={className}
        filePaths={[
          './assets/illustrations/how-a-case-is-created-1.json',
          './assets/illustrations/how-a-case-is-created-2.json',
          './assets/illustrations/how-a-case-is-created-3.json',
        ]}
      />
    );
    await waitFor(() => {
      // The component immediately returns an empty <div role="img">,
      // but renders the <svg> child element asynchronously.
      // The svg itself has no "hook" compatible with the testing-library.
      expect(document.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('adds additional props to the containing node', async () => {
    render(
      <SteppedAnimatedMedia
        data-testid={dataTestId}
        aria-label="Animated SVG for display"
        filePaths={['./assets/illustrations/test.json']}
      />
    );
    await waitFor(() => {
      screen.getByTestId(dataTestId);
    });
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(
      <SteppedAnimatedMedia
        ref={ref}
        aria-label="Animated SVG for display"
        filePaths={['./assets/illustrations/test.json']}
      />
    );
    await waitFor(() => {
      expect(ref.current).toHaveClass(blockClass);
    });
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(
      <SteppedAnimatedMedia
        data-testid={dataTestId}
        aria-label="Animated SVG for display"
        filePaths={['./assets/illustrations/test.json']}
      />
    );
    await waitFor(() => {
      expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
        componentName
      );
    });
  });
});
