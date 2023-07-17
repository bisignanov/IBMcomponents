/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { clamp } from 'lodash';
// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg, carbon } from '../../settings';
import { ArrowRight16, Close16 } from '@carbon/icons-react';
import {
  Button,
  Column,
  Grid,
  ProgressIndicator,
  ProgressStep,
  Row,
} from 'carbon-components-react';

import { Carousel } from '../Carousel';
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--interstitial-screen`;
const bcModalClass = `${carbon.prefix}--modal`;
const componentName = 'InterstitialScreen';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
const defaults = {
  closeIconDescription: 'Close',
  isFullScreen: false,
  isOpen: false,
  onClose: () => {},
  skipButtonLabel: '',
};

/**
 * TODO: A description of the component.
 */
export let InterstitialScreen = React.forwardRef(
  (
    {
      children,
      className,
      closeIconDescription = defaults.closeIconDescription,
      domainName,
      isFullScreen = defaults.isFullScreen,
      isOpen = defaults.isOpen,
      media,
      nextButtonLabel,
      onClose = defaults.onClose,
      previousButtonLabel,
      productName,
      startButtonLabel,
      skipButtonLabel = defaults.skipButtonLabel,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const scrollRef = useRef();
    const startButtonRef = useRef();
    const nextButtonRef = useRef();
    const [isVisibleClass, setIsVisibleClass] = useState(null);
    const [progStep, setProgStep] = useState(0);
    const childArray = Children.toArray(children);
    const isMultiStep = childArray.length > 1;
    const variantClass = isFullScreen ? `full-screen` : `modal ${bcModalClass}`;
    const containerClass = isFullScreen
      ? cx(`${blockClass}--container`)
      : cx(`${bcModalClass}-container`, `${blockClass}--container`);
    const progStepFloor = 0;
    const progStepCeil = childArray.length - 1;

    const handleClose = useCallback(() => {
      setProgStep(0);
      onClose();
    }, [onClose]);

    const handleClickPrev = () => {
      const targetStep = clamp(progStep - 1, progStepFloor, progStepCeil);
      scrollRef.current.scrollToView(targetStep);
      setProgStep(targetStep);
    };

    const handleClickNext = () => {
      const targetStep = clamp(progStep + 1, progStepFloor, progStepCeil);
      scrollRef.current.scrollToView(targetStep);
      setProgStep(targetStep);
    };

    useEffect(() => {
      startButtonRef.current?.focus();
    }, [isOpen, progStep]);

    useEffect(() => {
      //for modal only, "is-visible" triggers animation
      setIsVisibleClass(!isFullScreen && isOpen ? 'is-visible' : null);
      nextButtonRef?.current?.focus();
    }, [isFullScreen, isOpen]);

    // hitting escape key also closes this component
    useEffect(() => {
      const close = (e) => {
        const { key } = e;
        if (key === 'Escape') {
          handleClose();
        }
      };
      window.addEventListener('keydown', close);
      return () => window.removeEventListener('keydown', close);
    }, [handleClose]);

    if (!isOpen) {
      return null;
    }

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          variantClass,
          isVisibleClass
        )}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        <div className={containerClass}>
          {isFullScreen ? (
            <div className={`${blockClass}--header`}>
              {domainName} | <b>{productName}</b>
            </div>
          ) : (
            <div className={`${blockClass}--header`}>
              <Button
                className={`${blockClass}--close-icon`}
                hasIconOnly
                iconDescription={closeIconDescription}
                kind="ghost"
                renderIcon={Close16}
                size="sm"
                onClick={handleClose}
              />
            </div>
          )}
          <div className={cx(`${blockClass}--body`)}>
            <Grid>
              <Row>
                <Column xlg={10} lg={10} md={16} sm={16}>
                  <div className={cx(`${blockClass}--content`)}>
                    {isMultiStep ? (
                      <>
                        <div className={`${blockClass}--progress`}>
                          <ProgressIndicator
                            vertical={false}
                            currentIndex={progStep}
                            spaceEqually={true}
                          >
                            {childArray.map((child, idx) => {
                              return (
                                <ProgressStep
                                  key={idx}
                                  label={child.props.stepTitle}
                                />
                              );
                            })}
                          </ProgressIndicator>
                        </div>
                        <div className={`${blockClass}__carousel`}>
                          <Carousel disableArrowScroll ref={scrollRef}>
                            {children}
                          </Carousel>
                        </div>
                      </>
                    ) : (
                      <div>{childArray[0]}</div>
                    )}
                  </div>
                </Column>
                <Column
                  xlg={6}
                  lg={6}
                  md={0}
                  sm={0}
                  className={`${blockClass}--auto-height-container`}
                >
                  <div className={`${blockClass}--media`}>
                    {media.render ? (
                      media.render()
                    ) : (
                      <SteppedAnimatedMedia
                        className={`${blockClass}--stepped-animated-media`}
                        filePaths={media.filePaths}
                        playStep={progStep}
                      />
                    )}
                  </div>
                </Column>
              </Row>
            </Grid>
          </div>

          <div className={`${blockClass}--footer`}>
            <div>
              {isMultiStep && skipButtonLabel !== '' && (
                <Button
                  className={`${blockClass}--skip-btn`}
                  kind="ghost"
                  size="lg"
                  title={skipButtonLabel}
                  onClick={handleClose}
                >
                  {skipButtonLabel}
                </Button>
              )}
            </div>
            <div className={`${blockClass}--footer-controls`}>
              {isMultiStep && progStep > 0 && (
                <Button
                  className={`${blockClass}--prev-btn`}
                  kind="secondary"
                  size="lg"
                  title={previousButtonLabel}
                  onClick={handleClickPrev}
                >
                  {previousButtonLabel}
                </Button>
              )}

              {isMultiStep && progStep < progStepCeil && (
                <Button
                  className={`${blockClass}--next-btn`}
                  renderIcon={ArrowRight16}
                  ref={nextButtonRef}
                  size="lg"
                  title={nextButtonLabel}
                  onClick={handleClickNext}
                >
                  {nextButtonLabel}
                </Button>
              )}
              {isMultiStep && progStep === progStepCeil && (
                <Button
                  className={`${blockClass}--start-btn`}
                  ref={startButtonRef}
                  renderIcon={ArrowRight16}
                  size="lg"
                  title={startButtonLabel}
                  onClick={handleClose}
                >
                  {startButtonLabel}
                </Button>
              )}
              {!isMultiStep && (
                <Button
                  className={`${blockClass}--start-btn`}
                  ref={startButtonRef}
                  size="lg"
                  title={startButtonLabel}
                  onClick={handleClose}
                >
                  {startButtonLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
InterstitialScreen = pkg.checkComponentEnabled(
  InterstitialScreen,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
InterstitialScreen.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
InterstitialScreen.propTypes = {
  /**
   * Provide the contents of the InterstitialScreen.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription: PropTypes.string,
  /**
   * The domain this app belongs to, e.g. "IBM Cloud Pak".
   */
  domainName: PropTypes.string.isRequired,
  /**
   * Specifies whether the component is shown as a full-screen
   * experience, else it is shown as a modal by default.
   */
  isFullScreen: PropTypes.bool,
  /**
   * Specifies whether the component is currently open.
   */
  isOpen: PropTypes.bool,
  /**
   * The object describing an image in one of two shapes.
   *
   * If a single media element is required, use `{render}`.
   *
   * If a stepped animation is required, use `{filePaths}`.
   *
   * @see {@link MEDIA_PROP_TYPE}.
   */
  media: PropTypes.oneOfType([
    PropTypes.shape({
      render: PropTypes.func,
    }),
    PropTypes.shape({
      filePaths: PropTypes.arrayOf(PropTypes.string),
    }),
  ]).isRequired,
  /**
   * The label for the Next button.
   */
  nextButtonLabel: PropTypes.string.isRequired,
  /**
   * Function to call when the close button is clicked.
   */
  onClose: PropTypes.func,
  /**
   * The label for the Previous button.
   */
  previousButtonLabel: PropTypes.string.isRequired,
  /**
   * The name of this app, e.g. "QRadar".
   */
  productName: PropTypes.string.isRequired,
  /**
   * The label for the skip button.
   */
  skipButtonLabel: PropTypes.string,
  /**
   * The label for the start button.
   */
  startButtonLabel: PropTypes.string.isRequired,
};
