//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import cx from 'classnames';
import {
  Button,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import PropTypes from 'prop-types';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import { pkg } from '../../settings';
const componentName = 'Card';

export let Card = forwardRef(
  (
    {
      actionIcons,
      actionsPlacement,
      caption,
      children,
      className,
      clickZone,
      label,
      media,
      mediaPosition,
      onClick,
      onKeyDown,
      onPrimaryButtonClick,
      overflowActions,
      onSecondaryButtonClick,
      pictogram: Pictogram,
      primaryButtonKind,
      primaryButtonText,
      productive,
      secondaryButtonKind,
      secondaryButtonText,
      title,
      titleSize,
      ...rest
    },
    ref
  ) => {
    const blockClass = `${pkg.prefix}--card`;
    const hasActions = actionIcons.length > 0 || overflowActions.length > 0;
    const hasFooterActions = hasActions && actionsPlacement === 'bottom';
    const hasFooterButton = !!secondaryButtonText || !!primaryButtonText;
    const hasBottomBar = hasFooterActions || hasFooterButton;
    const hasClickEvent = !!onClick || !!onKeyDown;
    const clickableProps = {
      onClick,
      onKeyDown,
      role: 'button',
      tabIndex: '0',
    };

    // actions can either be an overflow menu or series of icons
    const getActions = () => {
      if (overflowActions.length > 0) {
        const pos = actionsPlacement === 'top' ? 'bottom' : 'top';
        const size = actionsPlacement === 'top' ? 'sm' : 'xl';
        return (
          <OverflowMenu size={size} direction={pos} flipped>
            {overflowActions.map(({ id, ...rest }) => (
              <OverflowMenuItem key={id} {...rest} />
            ))}
          </OverflowMenu>
        );
      }

      const icons = actionIcons.map(
        ({ id, icon: Icon, onClick, iconDescription, onKeyDown }) => {
          if (productive) {
            return (
              <Button
                key={id}
                renderIcon={Icon}
                hasIconOnly
                onClick={onClick}
                size={actionsPlacement === 'top' ? 'sm' : 'field'}
                iconDescription={iconDescription}
                kind="ghost"
              />
            );
          }
          return (
            <div
              key={id}
              className={`${blockClass}__icon`}
              onClick={onClick}
              onKeyDown={onKeyDown}
              role="button"
              tabIndex="0">
              <Icon aria-label={iconDescription} />
            </div>
          );
        }
      );

      return icons;
    };

    const getCardProps = () => {
      const clickable =
        (hasClickEvent && !productive) ||
        (hasClickEvent && productive && clickZone === 'one');
      const cardProps = {
        ...rest,
        ref,
        className: cx(
          blockClass,
          {
            [`${blockClass}__productive`]: productive,
            [`${blockClass}__clickable`]: clickable,
            [`${blockClass}__media-left`]: mediaPosition === 'left',
          },
          className
        ),
        ...(clickable && clickableProps),
      };

      return cardProps;
    };

    // the only reason this is necessary is for click zone 2
    const getHeaderBodyProps = () => {
      const clickable = hasClickEvent && clickZone === 'two';
      const headerBodyProps = {
        className: cx(`${blockClass}__header-body-container`, {
          [`${blockClass}__clickable`]: clickable,
        }),
        ...(clickable && clickableProps),
      };

      return headerBodyProps;
    };

    const getHeaderProps = () => ({
      actions: getActions(),
      actionsPlacement,
      caption,
      hasActions: hasActions && actionsPlacement === 'top',
      label,
      title,
      titleSize,
    });

    const getBodyProps = () => {
      const clickable = hasClickEvent && clickZone === 'three';
      const bodyProps = {
        className: cx(`${blockClass}__body`, {
          [`${blockClass}__clickable`]: clickable,
        }),
        ...(clickable && clickableProps),
      };

      return bodyProps;
    };

    const getFooterProps = () => ({
      actions: getActions(),
      actionsPlacement,
      hasActions: hasFooterActions,
      hasButton: hasFooterButton,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      primaryButtonKind,
      primaryButtonText,
      productive,
      secondaryButtonKind,
      secondaryButtonText,
    });

    return (
      <div {...getCardProps()}>
        {media && <div className={`${blockClass}__media`}>{media}</div>}
        {Pictogram && (
          <div className={`${blockClass}__pictogram`}>
            <Pictogram />
          </div>
        )}
        <div className={`${blockClass}__content-container`}>
          <div {...getHeaderBodyProps()}>
            <CardHeader {...getHeaderProps()} />
            <div {...getBodyProps()}>{children}</div>
          </div>
          {hasBottomBar && <CardFooter {...getFooterProps()} />}
        </div>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
Card = pkg.checkComponentEnabled(Card, componentName);

Card.propTypes = {
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      onKeyDown: PropTypes.func,
      onClick: PropTypes.func,
      iconDescription: PropTypes.string,
    })
  ),
  actionsPlacement: PropTypes.oneOf(['top', 'bottom']),
  caption: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  clickZone: PropTypes.oneOf(['one', 'two', 'three']),
  label: PropTypes.string,
  media: PropTypes.node,
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  overflowActions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      itemText: PropTypes.string,
      onClick: PropTypes.func,
      onKeyDown: PropTypes.func,
    })
  ),
  pictogram: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonText: PropTypes.string,
  productive: PropTypes.bool,
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonText: PropTypes.string,
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['default', 'large']),
};

Card.defaultProps = {
  actionIcons: [],
  actionsPlacement: 'bottom',
  clickZone: 'one',
  mediaPosition: 'top',
  overflowActions: [],
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary',
  titleSize: 'default',
};

Card.displayName = componentName;
