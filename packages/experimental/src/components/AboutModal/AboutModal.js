/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import classNames from 'classnames';
import {
  ComposedModal,
  Link,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Tabs,
  Tab,
} from 'carbon-components-react';

import { pkg } from '../../settings';

export const AboutModal = ({
  className,
  copyrightText,
  legalText,
  links,
  logo,
  productName,
  versionNumber,
  onRequestClose,
  body,
  open,
  technologiesUsed,
}) => {
  const [hasScrollableContent, setHasScrollableContent] = useState();
  const modalRef = useRef();

  const handleResize = () => {
    const modalHeight = modalRef?.current?.innerModal?.current.getBoundingClientRect()
      .height;
    const modalContentHeight = modalRef.current.innerModal.current.firstElementChild.getBoundingClientRect()
      .height;
    if (modalHeight < modalContentHeight) {
      setHasScrollableContent(true);
    }
  };

  return (
    <ReactResizeDetector onResize={handleResize}>
      {/*
        This extra div is necessary because the ReactResizeDetector component tries to attach a `targetRef` to it's child element,
        and it throws an error in the browser console when trying to attach that `targetRef` to Carbon's <ComposedModal> component.
      */}
      <div>
        <ComposedModal
          className={classNames(`${pkg.prefix}-about-modal`, {
            [`${pkg.prefix}-about-modal-scroll-enabled`]: hasScrollableContent,
            [`${pkg.prefix}-about-modal-with-tabs`]:
              technologiesUsed && technologiesUsed.length > 0,
            [className]: className,
          })}
          open={open}
          ref={modalRef}>
          <div className={`${pkg.prefix}-modal-content`}>
            <img
              alt="Product logo"
              src={logo}
              className={`${pkg.prefix}-about-modal-product-logo`}
            />
            <ModalHeader
              title={productName}
              titleClassName={`${pkg.prefix}-about-modal-title`}
              closeModal={onRequestClose}
            />
            <ModalBody className={`${pkg.prefix}-about-modal-content`}>
              {body}
              <div className={`${pkg.prefix}-about-modal-links-container`}>
                {links &&
                  links.length > 0 &&
                  links.map((link, i) => (
                    <React.Fragment key={link.url}>
                      <Link href={link.url}>{link.text}</Link>
                      {i !== links.length - 1 && (
                        <span
                          className={`${pkg.prefix}-about-modal-link-divider`}>
                          |
                        </span>
                      )}
                    </React.Fragment>
                  ))}
              </div>
              {legalText ? (
                <p className={`${pkg.prefix}-about-modal-legal-text`}>
                  {legalText}
                </p>
              ) : null}
              {copyrightText ? (
                <p className={`${pkg.prefix}-about-modal-copyright-text`}>
                  {copyrightText}
                </p>
              ) : null}
            </ModalBody>
            <ModalFooter>
              {technologiesUsed && technologiesUsed.length ? (
                <Tabs className={`${pkg.prefix}-about-modal-tab-container`}>
                  <Tab
                    id="about-modal-technologies-used-tab"
                    label="Technologies used">
                    <div
                      className={`${pkg.prefix}-about-modal-tab-content-flex`}>
                      {technologiesUsed &&
                        technologiesUsed.length &&
                        technologiesUsed.map((tech) => (
                          <img
                            key={tech.alt}
                            src={tech.src}
                            alt={tech.alt}
                            className={`${pkg.prefix}-about-modal-tech-used-item`}
                          />
                        ))}
                    </div>
                  </Tab>
                  <Tab
                    id="about-modal-version-number-tab"
                    label="Version number">
                    <div
                      className={`${pkg.prefix}-about-modal-tab-content-flex ${pkg.prefix}-about-modal-tab-content-version-flex`}>
                      <p className={`${pkg.prefix}-about-modal-version-label`}>
                        Version number
                      </p>
                      <p className={`${pkg.prefix}-about-modal-version-number`}>
                        {versionNumber}
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              ) : (
                <>
                  <p className={`${pkg.prefix}-about-modal-version-label`}>
                    Version number
                  </p>
                  <p className={`${pkg.prefix}-about-modal-version-number`}>
                    {versionNumber}
                  </p>
                </>
              )}
            </ModalFooter>
            {hasScrollableContent && (
              <div className={`${pkg.prefix}-about-modal-scroll-gradient`} />
            )}
          </div>
        </ComposedModal>
      </div>
    </ReactResizeDetector>
  );
};

AboutModal.propTypes = {
  /**
   * About modal body content
   */
  body: PropTypes.string.isRequired,

  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes.string,

  /**
   * About modal product copyright text
   */
  copyrightText: PropTypes.string,
  /**
   * About modal product legal text
   */
  legalText: PropTypes.string,
  /**
   * About modal product links
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  /**
   * About modal product logo
   */
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * About modal close function
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * About modal is open
   */
  open: PropTypes.bool.isRequired,
  /**
   * About modal product name
   */
  productName: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /**
   * About modal list of technologies
   */
  technologiesUsed: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  /**
   * About modal product version number
   */
  versionNumber: PropTypes.string.isRequired,
};

AboutModal.defaultProps = {
  copyrightText: '',
  legalText: '',
  links: [],
  onRequestClose: () => {},
  technologiesUsed: [],
};
