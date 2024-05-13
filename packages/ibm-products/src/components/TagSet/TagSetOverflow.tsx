//
// Copyright IBM Corp. 2021, 2024
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, {
  ForwardedRef,
  PropsWithChildren,
  ReactNode,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

/**@ts-ignore */
import { Link, Tag, Popover, PopoverContent } from '@carbon/react';
import { useClickOutside } from '../../global/js/hooks';
import { pkg } from '../../settings';

const componentName = 'TagSetOverflow';
const blockClass = `${pkg.prefix}--tag-set-overflow`;

// Default values for props
const defaults = {
  allTagsModalSearchThreshold: 10,
};

type OverflowAlign =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top';
type OverflowType = 'default' | 'tag';
interface TagSetOverflowProps {
  /**
   * count of overflowTags over which a modal is offered
   */
  allTagsModalSearchThreshold?: number;
  /**
   * className
   */
  className?: string;
  /**
   * function to execute on clicking show all
   */
  onShowAllClick: () => void;
  /**
   * overflowAlign from the standard tooltip
   */
  overflowAlign?: OverflowAlign;
  /** @type {Array<any>}
   * tags shown in overflow
   */
  overflowTags: ReactNode[];
  /**
   * Type of rendering displayed inside of the tag overflow component
   */
  overflowType?: OverflowType;
  /**
   * Open state of the popover
   */
  popoverOpen?: boolean;
  /**
   * Setter function for the popoverOpen state value
   */
  setPopoverOpen?: ((value: boolean) => void) | undefined;
  /**
   * label for the overflow show all tags link
   */
  showAllTagsLabel?: string;
}

export const TagSetOverflow = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      allTagsModalSearchThreshold = defaults.allTagsModalSearchThreshold,
      className,
      onShowAllClick,
      overflowAlign = 'bottom',
      overflowTags,
      overflowType,
      showAllTagsLabel,
      popoverOpen,
      setPopoverOpen,
      // Collect any other property values passed in.
      ...rest
    }: PropsWithChildren<TagSetOverflowProps>,
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
    const localRef = useRef<HTMLSpanElement>(null);
    const overflowTagContent = useRef(null);

    useClickOutside(ref || localRef, () => {
      if (popoverOpen) {
        setPopoverOpen?.(false);
      }
    });

    const handleShowAllTagsClick = (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      setPopoverOpen?.(false);
      onShowAllClick();
    };

    const handleEscKeyPress = (event) => {
      const { key } = event;
      if (key === 'Escape') {
        setPopoverOpen?.(false);
      }
    };

    return (
      <span
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        aria-hidden={overflowTags.length === 0}
        className={cx(`${blockClass}`, {
          [`${blockClass}--hidden`]: overflowTags.length === 0,
        })}
        ref={ref || localRef}
      >
        <Popover
          align={overflowAlign}
          className={cx(className, `${blockClass}__tagset-popover`)}
          dropShadow
          highContrast
          onKeyDown={handleEscKeyPress}
          open={popoverOpen}
        >
          <Tag
            onClick={() => setPopoverOpen?.(!popoverOpen)}
            className={cx(`${blockClass}__popover-trigger`)}
          >
            +{overflowTags.length}
          </Tag>
          <PopoverContent>
            <div ref={overflowTagContent} className={`${blockClass}__content`}>
              <ul className={`${blockClass}__tag-list`}>
                {overflowTags
                  .filter((_, index) =>
                    overflowTags.length > allTagsModalSearchThreshold
                      ? index < allTagsModalSearchThreshold
                      : index <= allTagsModalSearchThreshold
                  )
                  .map((tag, index) => {
                    type TagProps = { type?: string; filter?: boolean };
                    const tagProps: TagProps = {};
                    if (overflowType === 'tag') {
                      tagProps.type = 'high-contrast';
                    }
                    if (overflowType === 'default') {
                      tagProps.filter = false;
                    }
                    if (React.isValidElement(tag)) {
                      return (
                        <li
                          className={cx(`${blockClass}__tag-item`, {
                            [`${blockClass}__tag-item--default`]:
                              overflowType === 'default',
                            [`${blockClass}__tag-item--tag`]:
                              overflowType === 'tag',
                          })}
                          key={index}
                        >
                          {React.cloneElement(tag, tagProps)}
                        </li>
                      );
                    }
                  })}
              </ul>
              {overflowTags.length > allTagsModalSearchThreshold && (
                <Link
                  className={`${blockClass}__show-all-tags-link`}
                  href=""
                  onClick={handleShowAllTagsClick}
                  role="button"
                >
                  {showAllTagsLabel}
                </Link>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </span>
    );
  }
);

TagSetOverflow.displayName = componentName;

TagSetOverflow.propTypes = {
  /**
   * count of overflowTags over which a modal is offered
   */
  allTagsModalSearchThreshold: PropTypes.number,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * function to execute on clicking show all
   */
  onShowAllClick: PropTypes.func.isRequired,
  /**
   * overflowAlign from the standard tooltip
   */
  overflowAlign: PropTypes.oneOf([
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
    'left',
    'left-bottom',
    'left-top',
    'right',
    'right-bottom',
    'right-top',
  ]),
  /**
   * tags shown in overflow
   */
  /**@ts-ignore */
  overflowTags: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Type of rendering displayed inside of the tag overflow component
   */
  overflowType: PropTypes.oneOf(['default', 'tag']),
  /**
   * Open state of the popover
   */
  popoverOpen: PropTypes.bool,
  /**
   * Setter function for the popoverOpen state value
   */
  setPopoverOpen: PropTypes.func,
  /**
   * label for the overflow show all tags link
   */
  showAllTagsLabel: PropTypes.string,
};
