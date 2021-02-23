import React from 'react';
import cx from 'classnames';
import { Button } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { pkgPrefix } from '../../global/js/settings';

export const Card = ({
  actionIcon: ActionIcon,
  children,
  className,
  href,
  label,
  media,
  mediaPosition,
  onClick,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  pictogram: Pictogram,
  primaryButtonKind,
  primaryButtonText,
  secondaryButtonKind,
  secondaryButtonText,
  title,
}) => {
  const cardClasses = cx({
    [`${pkgPrefix}-card`]: true,
    [`${pkgPrefix}-card--clickable`]: onClick,
    [`${pkgPrefix}-card--media-left`]: mediaPosition === 'left',
    className,
  });

  const CardContent = (
    <div className={cardClasses}>
      {media && <div className={`${pkgPrefix}-card-media`}>{media}</div>}
      {Pictogram && (
        <div className={`${pkgPrefix}-card-pictogram`}>
          <Pictogram />
        </div>
      )}
      <div className={`${pkgPrefix}-card-content-container`}>
        <div className={`${pkgPrefix}-card-header`}>
          <p className={`${pkgPrefix}-card-label`}>{label}</p>
          <p className={`${pkgPrefix}-card-title`}>{title}</p>
        </div>
        <div className={`${pkgPrefix}-card-body`}>{children}</div>
        <div className={`${pkgPrefix}-card-actions`}>
          {secondaryButtonText && (
            <Button kind={secondaryButtonKind} onClick={onSecondaryButtonClick}>
              {secondaryButtonText}
            </Button>
          )}
          {primaryButtonText && (
            <Button kind={primaryButtonKind} onClick={onPrimaryButtonClick}>
              {primaryButtonText}
            </Button>
          )}
          {ActionIcon && (
            <ActionIcon
              className={`${pkgPrefix}-card-action-icon`}
              onClick={onPrimaryButtonClick}
            />
          )}
        </div>
      </div>
    </div>
  );

  if (!href) return CardContent;

  return (
    <a className={`${pkgPrefix}-card-link`} href={href}>
      {CardContent}
    </a>
  );
};

Card.propTypes = {
  /**
   * Icon to display in the bottom right of the card
   */
  actionIcon: PropTypes.object,
  /**
   * Content that shows in the body of the card
   */
  children: PropTypes.node,
  /**
   * Optional user provided class
   */
  className: PropTypes.string,
  /**
   * Providing an href turns the card into a clickable link
   */
  href: PropTypes.string,
  /**
   * Optional label for the top of the card
   */
  label: PropTypes.string,
  /**
   * Optional media content like an image to be placed in the card
   */
  media: PropTypes.node,
  /**
   * Establishes the position of the media in the card
   */
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  /**
   * Provides the callback for a clickable card
   */
  onClick: PropTypes.func,
  /**
   * Function that's called from the primary button or action icon
   */
  onPrimaryButtonClick: PropTypes.func,
  /**
   * Function that's called from the secondary button
   */
  onSecondaryButtonClick: PropTypes.func,
  /**
   * Provides the icon that's displayed at the top of the card
   */
  pictogram: PropTypes.object,
  /**
   * Establishes the kind of button displayed for the primary button
   */
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Establishes the kind of button displayed for the secondary button
   */
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  /**
   * The text that's displayed in the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * Title that's displayed at the top of the card
   */
  title: PropTypes.string,
};

Card.defaultProps = {
  actionIcon: null,
  children: '',
  className: '',
  href: '',
  label: '',
  media: null,
  mediaPosition: 'top',
  onClick: null,
  onPrimaryButtonClick: null,
  onSecondaryButtonClick: null,
  pictogram: null,
  primaryButtonKind: 'primary',
  primaryButtonText: '',
  secondaryButtonKind: 'secondary',
  secondaryButtonText: '',
  title: '',
};
