/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { Grid, Form } from 'carbon-components-react';
import { extractShapesArray } from '../../global/js/utils/props-helper';
import wrapFocus from '../../global/js/utils/wrapFocus';
import { TearsheetShell } from '../Tearsheet/TearsheetShell';
import { CreateInfluencer } from '../CreateInfluencer';
import { carbon, pkg } from '../../settings';
import { CREATE_TEARSHEET_SECTION, CREATE_TEARSHEET_STEP } from './constants';
import { usePreviousValue } from '../../global/js/use/usePreviousValue';
import { useValidCreateStepCount } from '../../global/js/use/useValidCreateStepCount';
import { useResetCreateComponent } from '../../global/js/use/useResetCreateComponent';
import { useCreateComponentStepChange } from '../../global/js/use/useCreateComponentStepChange';

const componentName = 'CreateTearsheet';
const blockClass = `${pkg.prefix}--tearsheet-create`;

// Custom PropType validator which checks and ensures that the children property has no more than 4 nodes
const isValidChildren =
  () =>
  ({ children }) => {
    children.length > 1 &&
      children.map((child) => {
        if (
          child &&
          child.props &&
          child.props.type !== CREATE_TEARSHEET_STEP
        ) {
          throw new Error(
            `Each child of ${componentName} is required to be a ${CREATE_TEARSHEET_STEP}. Please remove the HTML element, or wrap it around the ${CREATE_TEARSHEET_STEP} component.`
          );
        }
        return;
      });
  };

export let CreateTearsheet = forwardRef(
  (
    {
      backButtonText,
      cancelButtonText,
      children,
      className,
      description,
      includeViewAllToggle,
      label,
      nextButtonText,
      onClose,
      onRequestSubmit,
      open,
      sideNavAriaLabel,
      submitButtonText,
      title,
      verticalPosition,
      viewAllToggleLabelText,
      viewAllToggleOffLabelText,
      viewAllToggleOnLabelText,
      ...rest
    },
    ref
  ) => {
    const [createTearsheetActions, setCreateTearsheetActions] = useState([]);
    const [shouldViewAll, setShouldViewAll] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const previousState = usePreviousValue({ currentStep, open });
    const contentRef = useRef();

    // returns an array of tearsheet steps
    const getTearsheetSteps = useCallback(() => {
      const steps = [];
      const childrenArray = Array.isArray(children) ? children : [children];
      const extractedChildren =
        childrenArray && childrenArray[0]?.type === React.Fragment
          ? childrenArray[0].props.children
          : childrenArray;
      extractedChildren.forEach((child) => {
        if (isTearsheetStep(child)) {
          steps.push(child);
        }
      });
      return steps;
    }, [children]);

    useCreateComponentStepChange(
      previousState,
      currentStep,
      getTearsheetSteps,
      blockClass
    );
    useValidCreateStepCount(getTearsheetSteps, componentName);
    useResetCreateComponent(previousState, open, setCurrentStep);

    // Log a warning to the console in the event there are no CreateTearsheetSection components
    // inside of the CreateTearsheetSteps when the viewAll toggle is provided and turned on.
    useEffect(() => {
      if (includeViewAllToggle && shouldViewAll) {
        let childrenArray =
          typeof children !== 'undefined'
            ? children.length
              ? [...children]
              : [children]
            : [];
        const tearsheetStepComponents = childrenArray.filter((child) =>
          isTearsheetStep(child)
        );
        let tearsheetSectionComponents = [];
        tearsheetStepComponents.forEach((child, index) => {
          // We have received children for a TearsheetStep
          if (typeof child.props.children !== 'undefined') {
            // Only a string was provided as children of CreateTearsheetStep, this is not permitted when using view all toggle
            if (typeof child.props.children === 'string') {
              console.warn(
                `${componentName}: You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop.`
              );
            } else {
              // The TearsheetStep has an array of children, lets check each one to see if it is a TearsheetSection
              if (child.props.children.length) {
                child.props.children.forEach((stepChild) => {
                  if (isTearsheetSection(stepChild)) {
                    tearsheetSectionComponents.push(stepChild);
                  }
                });
              } else {
                // The TearsheetStep only has a single React element as a child, lets check to see if it is a TearsheetSection
                if (isTearsheetSection(child.props.children)) {
                  tearsheetSectionComponents.push(child.props.children);
                }
              }
            }
          }
          // If there are fewer CreateTearsheetSection components than CreateTearsheetStep components
          // it means that each CreateTearsheetStep does not have at least one CreateTearsheetSection
          // this is not permitted when using view all toggle
          if (
            tearsheetSectionComponents.length <
              tearsheetStepComponents.length &&
            index === tearsheetStepComponents.length - 1 // wait until we've finished checking each TearsheetStep before giving a warning
          ) {
            console.warn(
              `${componentName}: You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop.`
            );
          }
          // We have received a single child element, lets check to see that it is
          // a CreateTearsheetSection component, if it is not we should add a console
          // warning, as each CreateTearsheetStep required at least one CreateTearsheetSection,
          // when using the view all toggle
          if (
            shouldViewAll &&
            typeof child.props.children !== 'undefined' &&
            !child.props.children.length
          ) {
            if (!isTearsheetSection(child.props.children)) {
              console.warn(
                `${componentName}: You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop.`
              );
            }
          }
        });
      }
    }, [includeViewAllToggle, shouldViewAll, children]);

    // useEffect to handle multi step logic
    useEffect(() => {
      const onUnmount = () => {
        setCurrentStep(0);
        setIsSubmitting(false);
        setShouldViewAll(false);
        onClose();
      };
      const handleOnRequestSubmit = async () => {
        // check if onRequestSubmit returns a promise
        try {
          await onRequestSubmit();
          onUnmount();
        } catch (error) {
          setIsSubmitting(false);
          console.warn(`${componentName} submit error: ${error}`);
        }
      };
      const isSubmitDisabled = () => {
        let step = 0;
        let submitDisabled = false;
        let viewAllSubmitDisabled = false;
        const tearsheetSteps = getTearsheetSteps();
        tearsheetSteps.forEach((child) => {
          step++;
          if (currentStep === step) {
            submitDisabled = child.props.disableSubmit;
          }
          if (shouldViewAll && child.props.disableSubmit) {
            viewAllSubmitDisabled = true;
          }
        });
        if (!shouldViewAll) {
          return submitDisabled;
        }
        return viewAllSubmitDisabled;
      };
      const handleNext = async () => {
        setIsSubmitting(true);
        const createSteps = getTearsheetSteps();
        if (createSteps[currentStep - 1].props.onNext) {
          try {
            await createSteps[currentStep - 1].props.onNext();
            continueToNextStep();
          } catch (error) {
            setIsSubmitting(false);
            console.warn(`${componentName} onNext error: ${error}`);
          }
        } else {
          continueToNextStep();
        }
      };
      const handleSubmit = async () => {
        setIsSubmitting(true);
        const createSteps = getTearsheetSteps();
        // last step should have onNext as well
        if (createSteps[currentStep - 1].props.onNext) {
          try {
            await createSteps[currentStep - 1].props.onNext();
            await handleOnRequestSubmit();
          } catch (error) {
            setIsSubmitting(false);
            console.warn(`${componentName} onNext error: ${error}`);
          }
        } else {
          await handleOnRequestSubmit();
        }
      };
      if (getTearsheetSteps()?.length) {
        const createSteps = getTearsheetSteps();
        const total = createSteps.length;
        const buttons = [];
        if (total > 1 && !shouldViewAll) {
          buttons.push({
            key: 'create-tearsheet-action-button-back',
            label: backButtonText,
            onClick: () => setCurrentStep((prev) => prev - 1),
            kind: 'secondary',
            disabled: currentStep === 1,
          });
        }
        buttons.push({
          key: 'create-tearsheet-action-button-cancel',
          label: cancelButtonText,
          onClick: onUnmount,
          kind: 'ghost',
        });
        buttons.push({
          key: 'create-tearsheet-action-button-submit',
          label: shouldViewAll
            ? submitButtonText
            : currentStep < total
            ? nextButtonText
            : submitButtonText,
          onClick: shouldViewAll
            ? handleSubmit
            : currentStep < total
            ? handleNext
            : handleSubmit,
          disabled: isSubmitDisabled(),
          kind: 'primary',
          loading: isSubmitting,
          className: `${blockClass}__create-button`,
        });
        setCreateTearsheetActions(buttons);
      }
    }, [
      getTearsheetSteps,
      children,
      backButtonText,
      cancelButtonText,
      currentStep,
      onClose,
      nextButtonText,
      submitButtonText,
      onRequestSubmit,
      isSubmitting,
      shouldViewAll,
    ]);

    const continueToNextStep = () => {
      setIsSubmitting(false);
      setCurrentStep((prev) => prev + 1);
    };

    // check if child is a tearsheet step component
    const isTearsheetStep = (child) => {
      if (child && child.props && child.props.type === CREATE_TEARSHEET_STEP) {
        return true;
      }
      return false;
    };

    // check if child is a tearsheet section component
    const isTearsheetSection = (child) => {
      if (
        child &&
        child.props &&
        child.props.type === CREATE_TEARSHEET_SECTION
      ) {
        return true;
      }
      return false;
    };

    const getTearsheetComponents = (childrenElements) => {
      let childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const tearsheetStepComponents =
        childrenArray && childrenArray[0]?.type === React.Fragment
          ? childrenArray[0].props.children.filter((item) =>
              isTearsheetStep(item)
            )
          : childrenArray.filter((item) => isTearsheetStep(item));
      let tearsheetSectionComponents = [];
      tearsheetStepComponents.forEach((child) => {
        // we have received an array of children, lets check to see that each child is
        // a CreateTearsheetSection component before adding it to tearsheetSectionComponents
        if (
          shouldViewAll &&
          child?.props?.children?.length &&
          typeof child.props.children !== 'string'
        ) {
          child.props.children.forEach((stepChild) => {
            if (isTearsheetSection(stepChild)) {
              tearsheetSectionComponents.push(stepChild);
            }
          });
        }
        // we have received a single child element, lets check to see that it is
        // a CreateTearsheetSection component before adding it to tearsheetSectionComponents
        if (
          shouldViewAll &&
          typeof child.props.children !== 'undefined' &&
          !child.props.children.length
        ) {
          if (isTearsheetSection(child.props.children)) {
            tearsheetSectionComponents.push(child.props.children);
          }
        }
      });
      return {
        sections: tearsheetSectionComponents,
        steps: tearsheetStepComponents,
      };
    };

    // renders all children (CreateTearsheetSteps)
    const renderChildren = (childrenElements) => {
      let step = 0;
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const formattedChildren = extractShapesArray(childrenElements);
      const stepComponents =
        childrenArray && childrenArray[0]?.type === React.Fragment
          ? childrenArray[0].props.children.filter((item) =>
              isTearsheetStep(item)
            )
          : childrenArray.filter((item) => isTearsheetStep(item));
      const indexOfLastTearsheetStep = formattedChildren
        .map((el) => el?.type)
        .lastIndexOf(CREATE_TEARSHEET_STEP);
      return (
        <>
          {' '}
          {stepComponents.map((child, stepIndex) => {
            step++;
            return React.cloneElement(
              child,
              {
                className: cx(child.props.className, {
                  [`${blockClass}__step--hidden-step`]:
                    !shouldViewAll && currentStep !== step,
                  [`${blockClass}__step--visible-step`]: currentStep === step,
                }),
                key: `key_${stepIndex}`,
                isViewingAllStepsTogether: shouldViewAll,
              },
              renderStepChildren(
                child.props.children,
                indexOfLastTearsheetStep === step - 1
              )
            );
          })}
        </>
      );
    };

    const renderStepChildren = (
      tearsheetStepComponent,
      isLastTearsheetStep
    ) => {
      const tearsheetStepComponents = Array.isArray(tearsheetStepComponent)
        ? tearsheetStepComponent
        : [tearsheetStepComponent];
      return (
        <>
          {tearsheetStepComponents.map((child, index) => {
            if (!isTearsheetSection(child)) {
              return child;
            }
            // Needed to be able to not render the divider
            // line on the last section of the last step
            const isLastSectionOfLastStep =
              isLastTearsheetStep &&
              tearsheetStepComponents.length - 1 === index;
            return React.cloneElement(
              child,
              {
                className: cx(child.props.className, {
                  [`${blockClass}__step--hidden-section`]:
                    child.props.viewAllOnly && !shouldViewAll,
                  [`${blockClass}__step--visible-section`]:
                    !child.props.viewAllOnly ||
                    (child.props.viewAllOnly && shouldViewAll),
                }),
                key: `key_${index}`,
                isViewingAllStepsTogether: shouldViewAll,
              },
              <>
                {child}
                {shouldViewAll && !isLastSectionOfLastStep && (
                  <span className={`${blockClass}__section--divider`} />
                )}
              </>
            );
          })}
        </>
      );
    };

    // adds focus trap functionality
    /* istanbul ignore next */
    const handleBlur = ({
      target: oldActiveNode,
      relatedTarget: currentActiveNode,
    }) => {
      const visibleStepInnerContent = document.querySelector(
        `.${pkg.prefix}--tearsheet__body`
      );
      let visibleStepStartMarker;
      let visibleStepEndMarker;
      if (open && visibleStepInnerContent) {
        wrapFocus({
          bodyNode: visibleStepInnerContent,
          visibleStepStartMarker,
          visibleStepEndMarker,
          currentActiveNode,
          oldActiveNode,
        });
      }
    };

    /* istanbul ignore next */
    const handleResize = () => {
      const createTearsheetOuterElement = document.querySelector(
        `.${blockClass} .${carbon.prefix}--modal-container`
      );
      const influencerElement = document.querySelector(
        `.${blockClass} .${pkg.prefix}--tearsheet__influencer`
      );
      const totalTearsheetWidth =
        createTearsheetOuterElement.offsetWidth - influencerElement.offsetWidth;
      createTearsheetOuterElement.style.setProperty(
        `--${blockClass}--total-width`,
        `${totalTearsheetWidth}px`
      );
    };

    // track scrolling/intersection of create sections so that we know
    // which section is active (updates the SideNavItems `isActive` prop)
    useEffect(() => {
      if (shouldViewAll) {
        const tearsheetMainContent = document.querySelector(
          `.${pkg.prefix}--tearsheet__content`
        );
        let options = {
          root: tearsheetMainContent,
          rootMargin: '0px',
          threshold: 0,
        };
        // Convert NodeList to array so we can find the index
        // of the section that should be marked as `active`.
        const viewAllSections = Array.from(
          document.querySelectorAll(
            `.${pkg.prefix}--tearsheet-create__section.${pkg.prefix}--tearsheet-create__step--visible-section`
          )
        );
        /* istanbul ignore next */
        const observer = new IntersectionObserver((entries) => {
          // isIntersecting is true when element and viewport/options.root are overlapping
          // isIntersecting is false when element and viewport/options.root don't overlap
          if (entries[0].isIntersecting) {
            // DOM element that is intersecting
            const visibleTarget = entries[0].target;
            // Get visible element index
            const visibleTargetIndex = viewAllSections.findIndex(
              (item) => item.id === visibleTarget.id
            );
            setActiveSectionIndex(visibleTargetIndex);
          }
        }, options);
        viewAllSections.forEach((section) => {
          observer.observe(section);
        });
      }
    }, [shouldViewAll]);

    useResizeDetector({
      handleWidth: true,
      onResize: handleResize,
      targetRef: contentRef,
    });

    return (
      <TearsheetShell
        {...rest}
        actions={createTearsheetActions}
        className={cx(blockClass, className)}
        description={description}
        hasCloseIcon={false}
        influencer={
          <CreateInfluencer
            activeSectionIndex={activeSectionIndex}
            componentBlockClass={blockClass}
            createComponentName={componentName}
            currentStep={currentStep}
            createComponents={getTearsheetComponents(children)}
            includeViewAllToggle={includeViewAllToggle}
            handleToggleState={(toggleState) => setShouldViewAll(toggleState)}
            handleActiveSectionIndex={(index) => setActiveSectionIndex(index)}
            sideNavAriaLabel={sideNavAriaLabel}
            toggleState={shouldViewAll}
            viewAllToggleLabelText={viewAllToggleLabelText}
            viewAllToggleOffLabelText={viewAllToggleOffLabelText}
            viewAllToggleOnLabelText={viewAllToggleOnLabelText}
          />
        }
        influencerPosition="left"
        influencerWidth="narrow"
        label={label}
        onClose={onClose}
        open={open}
        size="wide"
        title={title}
        verticalPosition={verticalPosition}
        ref={ref}>
        <div
          className={`${blockClass}__content`}
          onBlur={handleBlur}
          ref={contentRef}>
          {open ? (
            <Grid>
              <Form>{renderChildren(children)}</Form>
            </Grid>
          ) : null}
        </div>
      </TearsheetShell>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CreateTearsheet = pkg.checkComponentEnabled(CreateTearsheet, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CreateTearsheet.displayName = componentName;

// Note that the descriptions here should be kept in sync with those for the
// corresponding props for TearsheetNarrow and TearsheetShell components.
CreateTearsheet.propTypes = {
  /**
   * The back button text
   */
  backButtonText: PropTypes.string.isRequired,

  /**
   * The cancel button text
   */
  cancelButtonText: PropTypes.string.isRequired,

  /**
   * The main content of the tearsheet
   */
  children: isValidChildren(),

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * Used to optionally include view all toggle
   */
  includeViewAllToggle: PropTypes.bool,

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: PropTypes.node,

  /**
   * The next button text
   */
  nextButtonText: PropTypes.string.isRequired,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specify a handler for submitting the multi step tearsheet (final step).
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateTearsheet will handle the submitting state of the create button.
   */
  onRequestSubmit: PropTypes.func.isRequired,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle
  ),

  /**
   * The submit button text
   */
  submitButtonText: PropTypes.string.isRequired,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: PropTypes.node,

  /**
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position (the default) is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower']),

  /**
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),

  /**
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),

  /**
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateTearsheet.defaultProps = {
  verticalPosition: 'normal',
  includeViewAllToggle: false,
};
