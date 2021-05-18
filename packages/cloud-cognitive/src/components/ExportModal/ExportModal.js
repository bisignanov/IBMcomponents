import React, { useState, useRef, forwardRef } from 'react';
import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  TextInput,
  RadioButton,
  RadioButtonGroup,
  FormGroup,
  Loading,
} from 'carbon-components-react';
import cx from 'classnames';
import { ErrorFilled16, CheckmarkFilled16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

const componentName = 'ExportModal';

export let ExportModal = forwardRef(
  (
    {
      body,
      className,
      error,
      errorMessage,
      filename,
      inputLabel,
      invalidInputText,
      loading,
      loadingMessage,
      onRequestClose,
      onRequestSubmit,
      open,
      preformattedExtensions,
      preformattedExtensionsLabel,
      primaryButtonText,
      secondaryButtonText,
      successMessage,
      successful,
      title,
      validExtensions,
      ...rest
    },
    ref
  ) => {
    const [name, setName] = useState(filename);
    const [dirtyInput, setDirtyInput] = useState(false);
    // by default (if it exists) use the first extension in the extension array
    const [extension, setExtension] = useState(
      preformattedExtensions?.[0]?.extension
    );

    const onNameChangeHandler = (evt) => {
      setName(evt.target.value);
    };

    const onExtensionChangeHandler = (value) => {
      setExtension(value);
    };

    const onBlurHandler = () => {
      setDirtyInput(true);
    };

    const onSubmitHandler = () => {
      const returnName = extension
        ? `${filename}.${extension.toLocaleLowerCase()}`
        : name;
      onRequestSubmit(returnName);
    };

    const hasInvalidExtension = () => {
      if (!dirtyInput || !validExtensions || !validExtensions.length)
        return false;
      if (!name.includes('.')) return true;
      const ext = name.split('.').pop();
      if (!validExtensions.includes(ext)) return true;
      return false;
    };

    const blockClass = `${pkg.prefix}--export-modal`;
    const internalId = useRef(uuidv4());
    const primaryButtonDisabled = loading || !name || hasInvalidExtension();
    const submitted = loading || error || successful;

    return (
      <ComposedModal
        {...rest}
        open={open}
        ref={ref}
        className={cx(blockClass, className)}
        aria-label={title}>
        <ModalHeader title={title} />
        <ModalBody>
          {!submitted && (
            <>
              <p className={`${blockClass}__body`}>{body}</p>
              {preformattedExtensions.length ? (
                <FormGroup legendText={preformattedExtensionsLabel}>
                  <RadioButtonGroup
                    orientation="vertical"
                    onChange={onExtensionChangeHandler}
                    valueSelected={extension}
                    name="extensions">
                    {preformattedExtensions.map((o) => (
                      <RadioButton
                        key={o.extension}
                        id={o.extension}
                        value={o.extension}
                        labelText={`${o.extension} (${o.description})`}
                      />
                    ))}
                  </RadioButtonGroup>
                </FormGroup>
              ) : (
                <TextInput
                  id={`text-input--${internalId}`}
                  value={name}
                  onChange={onNameChangeHandler}
                  labelText={inputLabel}
                  invalid={hasInvalidExtension()}
                  invalidText={invalidInputText}
                  onBlur={onBlurHandler}
                />
              )}
            </>
          )}
          <div className={`${blockClass}__messaging`}>
            {loading && (
              <>
                <Loading small withOverlay={false} />
                <p>{loadingMessage}</p>
              </>
            )}
            {successful && (
              <>
                <CheckmarkFilled16
                  className={`${blockClass}__checkmark-icon`}
                />
                <p>{successMessage}</p>
              </>
            )}
            {error && (
              <>
                <ErrorFilled16 className={`${blockClass}__error-icon`} />
                <p>{errorMessage}</p>
              </>
            )}
          </div>
        </ModalBody>
        {!submitted && (
          <ModalFooter
            primaryButtonText={primaryButtonText}
            secondaryButtonText={secondaryButtonText}
            primaryButtonDisabled={primaryButtonDisabled}
            onRequestClose={onRequestClose}
            onRequestSubmit={onSubmitHandler}
          />
        )}
      </ComposedModal>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
ExportModal = pkg.checkComponentEnabled(ExportModal, componentName);

ExportModal.propTypes = {
  /**
   * Body content for the modal
   */
  body: PropTypes.string,
  /**
   * Optional class name
   */
  className: PropTypes.string,
  /**
   * specify if an error occured
   */
  error: PropTypes.bool,
  /**
   * messaging to display in the event of an error
   */
  errorMessage: PropTypes.string,
  /**
   * name of the file being exported
   */
  filename: PropTypes.string,
  /**
   * label for the text input
   */
  inputLabel: PropTypes.string,
  /**
   * text for an invalid input
   */
  invalidInputText: PropTypes.string,
  /**
   * specify if the modal is in a loading state
   */
  loading: PropTypes.bool,
  /**
   * messaing to display during the loading state
   */
  loadingMessage: PropTypes.string,
  /**
   * Specify a handler for closing modal
   */
  onRequestClose: PropTypes.func,
  /**
   * Specify a handler for "submitting" modal. Access the imported file via `file => {}`
   */
  onRequestSubmit: PropTypes.func,
  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool,
  /**
   * Array of extensions to display as radio buttons
   */
  preformattedExtensions: PropTypes.arrayOf(
    PropTypes.shape({
      extension: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  preformattedExtensionsLabel: PropTypes.string,
  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * messaging to display if the export was successful
   */
  successMessage: PropTypes.string,
  /**
   * specify if the export was successful
   */
  successful: PropTypes.bool,
  /**
   * The text displayed at the top of the modal
   */
  title: PropTypes.string,
  /**
   * array of valid extensions the file can have
   */
  validExtensions: PropTypes.array,
};

ExportModal.defaultProps = {
  error: false,
  loading: false,
  open: false,
  preformattedExtensions: [],
  successful: false,
  validExtensions: [],
};

ExportModal.displayName = componentName;
