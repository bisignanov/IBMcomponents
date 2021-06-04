//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, forwardRef } from 'react';
import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FileUploaderDropContainer,
  FileUploaderItem,
  TextInput,
  Button,
} from 'carbon-components-react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg } from '../../settings';
const componentName = 'ImportModal';

export let ImportModal = forwardRef(
  (
    {
      body,
      className,
      defaultErrorBody,
      defaultErrorHeader,
      fetchErrorBody,
      fetchErrorHeader,
      fileDropHeader,
      fileDropLabel,
      fileUploadLabel,
      inputButtonText,
      inputId,
      inputLabel,
      inputPlaceholder,
      invalidFileTypeErrorBody,
      invalidFileTypeErrorHeader,
      invalidIconDescription,
      maxFileSize,
      maxFileSizeErrorBody,
      maxFileSizeErrorHeader,
      onClose,
      onRequestSubmit,
      open,
      primaryButtonText,
      secondaryButtonText,
      title,
      validFileTypes,
      ...rest
    },
    ref
  ) => {
    const [files, setFiles] = useState([]);
    const [importUrl, setImportUrl] = useState('');

    const isInvalidFileType = (file) => {
      const acceptedTypes = new Set(validFileTypes);
      const name = file.name;
      const mimeType = file.type;
      const extension = name.split('.').pop();
      if (acceptedTypes.has(mimeType) || acceptedTypes.has(extension))
        return false;
      return true;
    };

    const updateFiles = (newFiles) => {
      const updatedFiles = newFiles.map((file) => {
        const newFile = {
          uuid: file.uuid || uuidv4(),
          status: 'edit',
          iconDescription: invalidIconDescription,
          name: file.name,
          filesize: file.size,
          invalidFileType: file.invalidFileType,
          fileData: file,
          fetchError: file.fetchError,
        };
        if (newFile.fetchError) {
          newFile.errorBody = fetchErrorBody || defaultErrorBody;
          newFile.errorSubject = fetchErrorHeader || defaultErrorHeader;
          newFile.invalid = true;
        } else if (newFile.invalidFileType) {
          newFile.errorBody = invalidFileTypeErrorBody || defaultErrorBody;
          newFile.errorSubject =
            invalidFileTypeErrorHeader || defaultErrorHeader;
          newFile.invalid = true;
        } else if (maxFileSize && newFile.filesize > maxFileSize) {
          newFile.errorBody = maxFileSizeErrorBody || defaultErrorBody;
          newFile.errorSubject = maxFileSizeErrorHeader || defaultErrorHeader;
          newFile.invalid = true;
        }
        return newFile;
      });
      const finalFiles = [...updatedFiles];
      setFiles(finalFiles);
    };

    const fetchFile = async (evt) => {
      evt.preventDefault();
      const fileName = importUrl
        .substring(importUrl.lastIndexOf('/') + 1)
        .split('?')[0];
      const pendingFile = {
        name: fileName,
        status: 'uploading',
        uuid: uuidv4(),
      };
      setFiles([pendingFile]);
      try {
        const response = await fetch(importUrl);
        if (!response.ok || response.status !== 200)
          throw new Error(response.status);
        const blob = await response.blob();
        const fetchedFile = new File([blob], fileName, { type: blob.type });
        fetchedFile.invalidFileType = isInvalidFileType(fetchedFile);
        fetchedFile.uuid = pendingFile.uuid;
        updateFiles([fetchedFile]);
      } catch (err) {
        const failedFile = {
          ...pendingFile,
          fetchError: true,
        };
        updateFiles([failedFile]);
      }
    };

    const onAddFile = (evt, { addedFiles }) => {
      evt.stopPropagation();
      updateFiles(addedFiles);
    };

    const onRemoveFile = (uuid) => {
      const updatedFiles = files.filter((f) => f.uuid !== uuid);
      setFiles(updatedFiles);
    };

    const onSubmitHandler = () => {
      onRequestSubmit(files);
    };

    const inputHandler = (evt) => {
      setImportUrl(evt.target.value);
    };

    const numberOfFiles = files.length;
    const numberOfValidFiles = files.filter((f) => !f.invalid).length;
    const hasFiles = numberOfFiles > 0;
    const primaryButtonDisabled = !hasFiles || !(numberOfValidFiles > 0);
    const importButtonDisabled = !importUrl || hasFiles;
    const fileStatusString = `${numberOfValidFiles} / ${numberOfFiles} ${fileUploadLabel}`;
    const blockClass = `${pkg.prefix}--import-modal`;

    return (
      <ComposedModal
        {...rest}
        {...{ open, ref, onClose }}
        aria-label={title}
        className={cx(blockClass, className)}
        size="sm"
        preventCloseOnClickOutside>
        <ModalHeader className={`${blockClass}__header`} title={title} />
        <ModalBody className={`${blockClass}__body-container`}>
          <p className={`${blockClass}__body`}>{body}</p>
          <div className={`${blockClass}__file-drop-header`}>
            <p>{fileDropHeader}</p>
          </div>
          <FileUploaderDropContainer
            accept={validFileTypes}
            labelText={fileDropLabel}
            onAddFiles={onAddFile}
            disabled={hasFiles}
          />
          <div className={`${blockClass}__label`}>
            <p>{inputLabel}</p>
          </div>
          <div className={`${blockClass}__input-group`}>
            <TextInput
              labelText=""
              id={inputId}
              onChange={inputHandler}
              placeholder={inputPlaceholder}
              value={importUrl}
              disabled={hasFiles}
              aria-label={inputLabel}
            />
            <Button
              onClick={fetchFile}
              className={`${blockClass}__import-button`}
              size="sm"
              disabled={importButtonDisabled}>
              {inputButtonText}
            </Button>
          </div>
          <div className="bx--file-container" style={{ width: '100%' }}>
            {hasFiles && (
              <p className={`${blockClass}__helper-text`}>{fileStatusString}</p>
            )}
            {files.map((file) => (
              <FileUploaderItem
                key={file.uuid}
                onDelete={() => onRemoveFile(file.uuid)}
                name={file.name}
                status={file.status}
                size="default"
                uuid={file.uuid}
                iconDescription={file.iconDescription}
                invalid={file.invalid}
                errorBody={file.errorBody}
                errorSubject={file.errorSubject}
                filesize={file.filesize}
              />
            ))}
          </div>
        </ModalBody>
        <ModalFooter className={`${blockClass}__footer`}>
          <Button type="button" kind="secondary" onClick={onClose}>
            {secondaryButtonText}
          </Button>
          <Button
            type="submit"
            kind="primary"
            onClick={onSubmitHandler}
            disabled={primaryButtonDisabled}>
            {primaryButtonText}
          </Button>
        </ModalFooter>
      </ComposedModal>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
ImportModal = pkg.checkComponentEnabled(ImportModal, componentName);

ImportModal.propTypes = {
  /**
   * Content that is displayed inside the modal
   */
  body: PropTypes.string,
  /**
   * Optional class name
   */
  className: PropTypes.string,
  /**
   * The default message shown for an import error
   */
  defaultErrorBody: PropTypes.string.isRequired,
  /**
   * The default header that is displayed to show an error message
   */
  defaultErrorHeader: PropTypes.string.isRequired,
  /**
   * Optional error body to display specifically for a fetch error
   */
  fetchErrorBody: PropTypes.string,
  /**
   * Optional error header to display specifically for a fetch error
   */
  fetchErrorHeader: PropTypes.string,
  /**
   * Header for the drag and drop box
   */
  fileDropHeader: PropTypes.string,
  /**
   * Label for the drag and drop box
   */
  fileDropLabel: PropTypes.string,
  /**
   * Label that appears when a file is uploaded to show number of files (1 / 1)
   */
  fileUploadLabel: PropTypes.string,
  /**
   * Button text for import by url button
   */
  inputButtonText: PropTypes.string.isRequired,
  /**
   * ID for text input
   */
  inputId: PropTypes.string,
  /**
   * Header to display above import by url
   */
  inputLabel: PropTypes.string,
  /**
   * Placeholder for text input
   */
  inputPlaceholder: PropTypes.string,
  /**
   * Optional error message to display specifically for a invalid file type error
   */
  invalidFileTypeErrorBody: PropTypes.string,
  /**
   * Optional error header to display specifically for a invalid file type error
   */
  invalidFileTypeErrorHeader: PropTypes.string,
  /**
   * Description for delete file icon
   */
  invalidIconDescription: PropTypes.string,
  /**
   * File size limit in bytes
   */
  maxFileSize: PropTypes.number,
  /**
   * Optional error message to display specifically for a max file size error
   */
  maxFileSizeErrorBody: PropTypes.string,
  /**
   * Optional error header to display specifically for a max file size error
   */
  maxFileSizeErrorHeader: PropTypes.string,
  /**
   * Specify a handler for closing modal
   */
  onClose: PropTypes.func,
  /**
   * Specify a handler for "submitting" modal. Access the imported file via `file => {}`
   */
  onRequestSubmit: PropTypes.func,
  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool,
  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string.isRequired,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string.isRequired,
  /**
   * The text displayed at the top of the modal
   */
  title: PropTypes.string.isRequired,
  /**
   * Specifies the file types that are valid for importing
   */
  validFileTypes: PropTypes.array,
};

ImportModal.defaultProps = {
  validFileTypes: [],
};

ImportModal.displayName = componentName;
