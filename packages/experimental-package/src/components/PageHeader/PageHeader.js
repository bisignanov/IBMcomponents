//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

// import { settings } from 'carbon-components';
// const { prefix } = settings;

import { expPrefix } from '../../global/js/settings';

import { /* useWindowResize, */ useWindowScroll } from '../../global/js/use';

import {
  BreadcrumbItem,
  Grid,
  Column,
  Row,
  Breadcrumb,
} from 'carbon-components-react';

import { ActionBar } from './ActionBar';

const blockClass = `${expPrefix}-page-header`;

export const PageHeader = ({
  actionBarItems,
  availableSpace,
  background,
  breadcrumbItems,
  className,
  navigation,
  pageActions,
  subtitle,
  tags,
  title,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [titleInBreadcrumbs, setTitleInBreadcrumbs] = useState({
    visible: false,
    opacity: 0,
    scrollY: 0,
  });
  const [componentCssCustomProps, setComponentCssCustomProps] = useState({});
  const headerEl = useRef(null);
  const breadcrumbTitleEl = useRef(null);

  // const halfColumns = { sm: 2, md: 4, lg: 8 };

  // const halfOrFull = (test) => (test ? { ...halfColumns } : {});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // would love to do this differently but digging in the dom seems easier
    // than getting a ref to a conditionally rendered item
    breadcrumbTitleEl.current = headerEl.current.querySelector(
      `.${blockClass}--breadcrumb-title`
    );

    let breadcrumbHeight = '0px';
    if (window !== undefined && breadcrumbTitleEl.current !== null) {
      breadcrumbHeight = window
        .getComputedStyle(breadcrumbTitleEl.current)
        .getPropertyValue('height');
    }

    setComponentCssCustomProps((previous) => ({
      ...previous,
      [`--${blockClass}--breadcrumb-height-unitless`]: parseInt(
        breadcrumbHeight,
        10
      ),
      [`--${blockClass}--breadcrumb-height`]: breadcrumbHeight,
    }));
  }, [title, breadcrumbItems]);

  useWindowScroll(({ previous, current }) => {
    if (previous.scrollY !== current.scrollY) {
      setComponentCssCustomProps((previous) => ({
        ...previous,
        [`--${blockClass}--breadcrumb-title-visibility`]:
          current.scrollY > 0 ? 'visible' : 'hidden',
        [`--${blockClass}--scroll`]: `${current.scrollY}`,
        [`--${blockClass}--scroll-px`]: `${current.scrollY}px`,
        [`--${blockClass}--breadcrumb-title-top`]: `max(0px, calc(100% - var(--${blockClass}--scroll-px)))`,
        [`--${blockClass}--breadcrumb-title-opacity`]: `calc(var(--${blockClass}--scroll) / var(--${blockClass}--breadcrumb-height-unitless))`,
      }));
    }
  });

  // useWindowResize(({ previous, current }) => {
  //   if (previous.innerHeight !== current.innerHeight) {
  //     console.dir(JSON.stringify({ on: 'resize', previous, current }));
  //   }
  // });

  return (
    <section
      className={cx([
        blockClass,
        className,
        { [`${blockClass}--background`]: background },
      ])}
      ref={headerEl}
      style={componentCssCustomProps}>
      <Grid>
        {!(breadcrumbItems === undefined && actionBarItems === undefined) ? (
          <Row
            className={cx(`${blockClass}--breadcrumb-row`, {
              [`${blockClass}--breadcrumb-row--with-actions`]:
                actionBarItems !== undefined,
            })}>
            <Column className={`${blockClass}--breadcrumb-colum`}>
              {/* keeps actionBar right even if empty */}

              {breadcrumbItems !== undefined ? (
                <Breadcrumb
                  className={`${blockClass}--breadcrumb`}
                  noTrailingSlash={titleInBreadcrumbs && !!title}>
                  {breadcrumbItems}
                  {title ? (
                    <BreadcrumbItem
                      href="#"
                      isCurrentPage={true}
                      className={`${blockClass}--breadcrumb-title`}>
                      {title}
                    </BreadcrumbItem>
                  ) : (
                    ''
                  )}
                </Breadcrumb>
              ) : (
                <div className="just-for-spacing"></div>
              )}
            </Column>

            {actionBarItems !== undefined ? (
              <Column className={`${blockClass}--action-bar-colum`}>
                <ActionBar className={`${blockClass}--action-bar`}>
                  {actionBarItems}
                </ActionBar>
              </Column>
            ) : null}
          </Row>
        ) : null}

        {!(title === undefined && pageActions === undefined) ? (
          <Row className={`${blockClass}--title-row`}>
            <Column className={`${blockClass}--title-colum`}>
              {/* keeps page actions right even if empty */}
              {title !== undefined ? (
                <div className={`${blockClass}--title`}>{title}</div>
              ) : null}
            </Column>

            {pageActions !== undefined ? (
              <Column className={`${blockClass}--page-actions`}>
                {pageActions}
              </Column>
            ) : null}
          </Row>
        ) : null}

        {subtitle !== undefined ? (
          <Row className={`${blockClass}--subtitle-row`}>
            <Column className={`${blockClass}--subtitle`}>{subtitle}</Column>
          </Row>
        ) : null}

        {availableSpace !== undefined ? (
          <Row className={`${blockClass}--available-row`}>
            <Column className={`${blockClass}--available-colum`}>
              {availableSpace}
            </Column>
          </Row>
        ) : null}

        {!(navigation === undefined && tags === undefined) ? (
          <Row className={`${blockClass}--navigation-row`}>
            {navigation !== undefined ? (
              <Column
                className={`${blockClass}--navigation-tabs`}
                // {...halfOrFull(tags !== undefined)}
              >
                {navigation}
              </Column>
            ) : null}
            {tags !== undefined ? (
              <Column
                className={`${blockClass}--navigation-tags`}
                // {...halfColumns}
              >
                {tags}
              </Column>
            ) : null}
          </Row>
        ) : null}
      </Grid>
    </section>
  );
};

PageHeader.propTypes = {
  /**
   * One or more ActionBarItem components, passed in as React element(s).
   * If provided, these are rendered at the top right of the header as
   * action icons. Optional.
   */
  actionBarItems: PropTypes.element, // expect actionBarItems
  /**
   * A zone for placing high-level, client content above the page tabs.
   * Accepts arbitrary renderable content as a React node. Optional.
   */
  availableSpace: PropTypes.node,
  /**
   * Specifies if the PageHeader should have a background color or not.
   * Optional.
   */
  background: PropTypes.bool,
  /**
   * One or more Carbon BreadcrumbItem components, passed in as React element(s).
   * If provided, these are rendered at the top left of the header as
   * a breadcrumb. Optional.
   */
  breadcrumbItems: PropTypes.element, // expects BreadcrumbItems,
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
  /**
   * Content for the navigation area in the PageHeader. Should
   * be a React element that is normally either a Carbon Tabs component or a
   * Carbon ContentSwitcher. Optional.
   */
  navigation: PropTypes.element, // Supports Tabs or ContentSwitcher
  /**
   * Specifies the primary page actions as a React element. Normally this
   * is one or more Carbon Button components. Optional.
   */
  pageActions: PropTypes.element,
  /**
   * A subtitle or description that provides additional context to
   * identify the current page. Optional.
   */
  subtitle: PropTypes.string,
  /**
   * One or more tags, specified as a Carbon Tags component.
   * Optional.
   */
  tags: PropTypes.element,
  /**
   * The title of the page.
   * Optional.
   */
  title: PropTypes.string,
  /**
   * An icon to be included to the left of the title text.
   * Optional.
   */
  titleIcon: PropTypes.PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

PageHeader.defaultProps = {
  background: false,
  className: '',
};
