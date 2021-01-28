/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkgPrefix } from '../../global/js/settings';
import { Button, Link, ToggleSmall } from 'carbon-components-react';
import {
  ErrorFilled16,
  WarningAltFilled16,
  CheckmarkFilled16,
  InformationSquareFilled16,
  ChevronDown16,
  Close16,
  Settings16,
} from '@carbon/icons-react';
import { timeAgo } from './utils';
import { EmptyState } from '../EmptyState';
import useClickOutside from './useClickOutside';

const Notifications = ({
  data,
  open,
  setOpen,
  onDoNotDisturbChange,
  title,
  dismissAllLabel,
  doNotDisturbLabel,
  todayLabel,
  yesterdayLabel,
  previousLabel,
  onViewAllClick,
  onSettingsClick,
  onDismissAllNotifications,
  onDismissSingleNotification,
}) => {
  const notificationPanelRef = useRef();
  const [shouldRender, setRender] = useState(open);
  const [allNotifications, setAllNotifications] = useState([]);

  useClickOutside(notificationPanelRef, () => {
    setOpen(!open);
  });

  useEffect(() => {
    // Set the notifications passed to the state within this component
    setAllNotifications(data);
  }, [data]);

  useEffect(() => {
    // initialize the notification panel to open
    if (open) setRender(true);
  }, [open]);

  const onAnimationEnd = () => {
    // initialize the notification panel to close
    if (!open) setRender(false);
  };

  // Notifications should be grouped by "Today", "Yesterday", and "Previous", the variables
  // below filter the notifications based on those conditions and then render them in those groups
  let yesterdayDate = new Date();
  yesterdayDate = new Date(yesterdayDate.setDate(yesterdayDate.getDate() - 1));
  let dayBeforeYesterdayDate = new Date();
  dayBeforeYesterdayDate = new Date(
    dayBeforeYesterdayDate.setDate(dayBeforeYesterdayDate.getDate() - 2)
  );
  const withinLastDayNotifications =
    allNotifications &&
    allNotifications.length &&
    allNotifications.filter(
      (item) => item.timestamp.getTime() >= yesterdayDate.getTime()
    );
  const previousDayNotifications =
    allNotifications &&
    allNotifications.length &&
    allNotifications.filter(
      (item) =>
        item.timestamp.getTime() < yesterdayDate.getTime() &&
        item.timestamp.getTime() >= dayBeforeYesterdayDate.getTime()
    );
  const previousNotifications =
    allNotifications &&
    allNotifications.length &&
    allNotifications.filter(
      (item) => item.timestamp.getTime() < dayBeforeYesterdayDate.getTime()
    );

  const renderDescription = (id) => {
    const notification =
      allNotifications &&
      allNotifications.length &&
      allNotifications.filter((item) => item.id === id)[0];
    const trimLength = 88;
    const description = notification.description;
    const descriptionClassName = cx([
      `${pkgPrefix}-notifications-panel-notification-description`,
      {
        [`${pkgPrefix}-notifications-panel-notification-long-description`]: notification.showAll,
        [`${pkgPrefix}-notifications-panel-notification-short-description`]: !notification.showAll,
      },
    ]);
    const showMoreButtonClassName = cx([
      {
        [`${pkgPrefix}-notifications-panel-notification-read-less-button`]: notification.showAll,
        [`${pkgPrefix}-notifications-panel-notification-read-more-button`]: !notification.showAll,
      },
    ]);
    return (
      <div>
        <p className={descriptionClassName}>{description}</p>
        {description.length > trimLength && (
          <Button
            kind="ghost"
            size="small"
            renderIcon={ChevronDown16}
            iconDescription={notification.showAll ? 'Read less' : 'Read more'}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              const newData = allNotifications.map((item) => {
                if (item.id === notification.id)
                  return Object.assign({}, item, { showAll: !item.showAll });
                return item;
              });
              setAllNotifications(newData);
            }}
            className={showMoreButtonClassName}>
            {notification.showAll ? 'Read less' : 'Read more'}
          </Button>
        )}
      </div>
    );
  };

  const renderNotification = (group, notification, index) => {
    const notificationClassName = cx([
      `${pkgPrefix}-notifications-panel-notification`,
      `${pkgPrefix}-notifications-panel-notification-${group}`,
    ]);
    const notificationHeaderClassName = cx([
      `${pkgPrefix}-notifications-panel-notification-title`,
      {
        [`${pkgPrefix}-notifications-panel-notification-title-unread`]: notification.unread,
      },
    ]);
    return (
      <div
        aria-label={`Notification: ${notification.title}`}
        key={`${notification.timestamp}-${notification.title}-${index}`}
        className={notificationClassName}
        type="button"
        role="button"
        tabIndex={0}
        onClick={() => notification.onNotificationClick(notification)}
        onKeyDown={(event) => {
          if (
            event.target.classList.contains(
              `${pkgPrefix}-notifications-dismiss-single-button`
            )
          )
            return;
          if (event.which === 13) {
            notification.onNotificationClick(notification);
          }
        }}>
        {notification.type === 'error' && (
          <ErrorFilled16
            className={cx([
              `${pkgPrefix}-notifications-panel-notification-status-icon`,
              `${pkgPrefix}-notifications-panel-notification-status-icon-error`,
            ])}
          />
        )}
        {notification.type === 'success' && (
          <CheckmarkFilled16
            className={cx([
              `${pkgPrefix}-notifications-panel-notification-status-icon`,
              `${pkgPrefix}-notifications-panel-notification-status-icon-success`,
            ])}
          />
        )}
        {notification.type === 'warning' && (
          <WarningAltFilled16
            className={cx([
              `${pkgPrefix}-notifications-panel-notification-status-icon`,
              `${pkgPrefix}-notifications-panel-notification-status-icon-warning`,
            ])}
          />
        )}
        {notification.type === 'informational' && (
          <InformationSquareFilled16
            className={cx([
              `${pkgPrefix}-notifications-panel-notification-status-icon`,
              `${pkgPrefix}-notifications-panel-notification-status-icon-informational`,
            ])}
          />
        )}
        <div
          className={`${pkgPrefix}-notifications-panel-notification-content`}>
          <p
            className={`${pkgPrefix}-notifications-panel-notification-time-label`}>
            {timeAgo(notification.timestamp)}
          </p>
          <h6 className={notificationHeaderClassName}>{notification.title}</h6>
          {notification.description &&
            notification.description.length &&
            renderDescription(notification.id)}
          {notification.link &&
            notification.link.text &&
            notification.link.url && (
              <Link
                href={notification.link.url}
                className={`${pkgPrefix}-notifications-panel-notifications-link`}>
                {notification.link.text}
              </Link>
            )}
        </div>
        <Button
          kind="ghost"
          size="small"
          renderIcon={Close16}
          iconDescription="Dismiss"
          tooltipPosition="left"
          className={`${pkgPrefix}-notifications-dismiss-single-button`}
          onClick={(event) => dismissSingleNotification(event, notification)}
        />
      </div>
    );
  };

  const dismissSingleNotification = (event, notification) => {
    event.preventDefault();
    event.stopPropagation();
    onDismissSingleNotification(notification);
  };

  const mainSectionClassName = cx([
    `${pkgPrefix}-notifications-panel-main-section`,
    {
      [`${pkgPrefix}-notificaitons-panel-main-section-empty`]: !allNotifications.length,
    },
  ]);

  return (
    shouldRender && (
      <div
        id={`${pkgPrefix}-notifications-panel`}
        className={`${pkgPrefix}-notifications-panel-container`}
        style={{ animation: `${open ? 'fadeIn 250ms' : 'fadeOut 250ms'}` }}
        onAnimationEnd={onAnimationEnd}
        ref={notificationPanelRef}>
        <div className={`${pkgPrefix}-notifications-header-container`}>
          <div className={`${pkgPrefix}-notifications-header-flex`}>
            <h1 className={`${pkgPrefix}-notifications-header`}>{title}</h1>
            <Button
              size="small"
              kind="ghost"
              className={`${pkgPrefix}-notifications-dismiss-button`}
              onClick={() => onDismissAllNotifications()}>
              {dismissAllLabel}
            </Button>
          </div>
          <ToggleSmall
            className={`${pkgPrefix}-notifications-do-not-disturb-toggle`}
            id={`${pkgPrefix}-notifications-do-not-disturb-toggle-component`}
            labelA={doNotDisturbLabel}
            labelB={doNotDisturbLabel}
            onToggle={(event) => onDoNotDisturbChange(event)}
            aria-label={doNotDisturbLabel}
          />
        </div>
        <div className={mainSectionClassName}>
          {withinLastDayNotifications && withinLastDayNotifications.length ? (
            <>
              <h6
                className={`${pkgPrefix}-notifications-panel-time-section-label`}>
                {todayLabel}
              </h6>
              {withinLastDayNotifications.map((notification, index) =>
                renderNotification('today', notification, index)
              )}
            </>
          ) : null}
          {previousDayNotifications && previousDayNotifications.length ? (
            <>
              <h6
                className={`${pkgPrefix}-notifications-panel-time-section-label`}>
                {yesterdayLabel}
              </h6>
              {previousDayNotifications.map((notification, index) =>
                renderNotification('yesterday', notification, index)
              )}
            </>
          ) : null}
          {previousNotifications && previousNotifications.length ? (
            <>
              <h6
                className={`${pkgPrefix}-notifications-panel-time-section-label`}>
                {previousLabel}
              </h6>
              {previousNotifications.map((notification, index) =>
                renderNotification('previous', notification, index)
              )}
            </>
          ) : null}
          {!allNotifications.length && (
            <EmptyState
              illustration="notifications"
              illustrationTheme="dark"
              heading=""
              subtext="You do not have any notifications"
            />
          )}
        </div>
        {onViewAllClick &&
        onSettingsClick &&
        allNotifications &&
        allNotifications.length ? (
          <div className={`${pkgPrefix}-notifications-bottom-actions`}>
            <Button
              kind="ghost"
              className={`${pkgPrefix}-notifications-view-all-button`}
              onClick={() => onViewAllClick()}>
              View all ({allNotifications.length})
            </Button>
            <Button
              kind="ghost"
              size="small"
              className={`${pkgPrefix}-notifications-settings-button`}
              renderIcon={Settings16}
              iconDescription="Settings"
              onClick={() => onSettingsClick()}
            />
          </div>
        ) : null}
      </div>
    )
  );
};

Notifications.propTypes = {
  /**
   * Array of data for Notifications component to render
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      type: PropTypes.oneOf(['error', 'warning', 'success', 'informational']),
      timestamp: PropTypes.instanceOf(Date),
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string,
      }),
      unread: PropTypes.bool,
      onNotificationClick: PropTypes.func,
    })
  ).isRequired,
  /**
   * Label for Dismiss all button
   */
  dismissAllLabel: PropTypes.string,
  /**
   * Label for Do not disturb toggle
   */
  doNotDisturbLabel: PropTypes.string,
  /**
   * Function that will dismiss all notifications
   */
  onDismissAllNotifications: PropTypes.func.isRequired,
  /**
   * Function that will dismiss a single notification
   */
  onDismissSingleNotification: PropTypes.func.isRequired,
  /**
   * Function that returns the current selected value of the disable notification toggle
   */
  onDoNotDisturbChange: PropTypes.func,
  /**
   * Event handler for the View all button
   */
  onSettingsClick: PropTypes.func,
  /**
   * Event handler for the View all button
   */
  onViewAllClick: PropTypes.func,
  /**
   * Determines whether the notifications panel should render or not
   */
  open: PropTypes.bool.isRequired,
  /**
   * Sets the previous label text
   */
  previousLabel: PropTypes.string,
  /**
   * Sets the notifications panel open state
   */
  setOpen: PropTypes.func.isRequired,
  /**
   * Sets the title for the Notifications panel
   */
  title: PropTypes.string,
  /**
   * Sets the today label text
   */
  todayLabel: PropTypes.string,
  /**
   * Sets the yesterday label text
   */
  yesterdayLabel: PropTypes.string,
};

Notifications.defaultProps = {
  doNotDisturbLabel: 'Do not disturb',
  dismissAllLabel: 'Dismiss all',
  previousLabel: 'Previous',
  title: 'Notifications',
  todayLabel: 'Today',
  yesterdayLabel: 'Yesterday',
  onDismissAllNotifications: () => {},
  onDismissSingleNotification: () => {},
};

export default Notifications;
