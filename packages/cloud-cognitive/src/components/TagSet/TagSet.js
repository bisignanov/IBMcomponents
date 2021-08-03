//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { TagSetOverflow } from './TagSetOverflow';
import { TagSetModal } from './TagSetModal';
import { Tag } from 'carbon-components-react';
import { useResizeDetector } from 'react-resize-detector';

import { pkg } from '../../settings';
import { prepareProps, isRequiredIf } from '../../global/js/utils/props-helper';

const componentName = 'TagSet';
const blockClass = `${pkg.prefix}--tag-set`;

const allTagsModalSearchThreshold = 10;

export let TagSet = React.forwardRef(
  (
    {
      align,
      className,
      maxVisible,
      overflowAlign,
      overflowClassName,
      overflowDirection,
      allTagsModalTitle,
      allTagsModalSearchLabel,
      allTagsModalSearchPlaceholderText,
      showAllTagsLabel,
      tags,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [displayCount, setDisplayCount] = useState(3);
    const [displayedTags, setDisplayedTags] = useState([]);
    const [hiddenSizingTags, setHiddenSizingTags] = useState([]);
    const [showAllModalOpen, setShowAllModalOpen] = useState(false);
    const localTagSetRef = useRef(null);
    const tagSetRef = ref || localTagSetRef;
    const sizingContainerRef = useRef();
    const displayedArea = useRef(null);
    const [sizingTags, setSizingTags] = useState([]);
    const overflowTag = useRef(null);

    const handleShowAllClick = () => {
      setShowAllModalOpen(true);
    };

    useEffect(() => {
      const newSizingTags = [];
      // create sizing tags
      setHiddenSizingTags(
        tags && tags.length > 0
          ? tags.map(({ label, ...other }, index) => {
              return (
                <div
                  key={index}
                  className={`${blockClass}__sizing-tag`}
                  ref={(el) => (newSizingTags[index] = el)}>
                  <Tag {...other} filter={false}>
                    {label}
                  </Tag>
                </div>
              );
            })
          : []
      );
      setSizingTags(newSizingTags);
    }, [tags]);

    useEffect(() => {
      // create visible and overflow tags
      let newDisplayedTags =
        tags && tags.length > 0
          ? tags.map(({ label, ...other }, index) => (
              <Tag {...other} filter={false} key={`displayed-tag-${index}`}>
                {label}
              </Tag>
            ))
          : [];

      // separate out tags for the overflow
      const newOverflowTags = newDisplayedTags.splice(
        displayCount,
        newDisplayedTags.length - displayCount
      );

      // add wrapper around displayed tags
      newDisplayedTags = newDisplayedTags.map((tag, index) => (
        <div key={index} className={`${blockClass}__displayed-tag`}>
          {tag}
        </div>
      ));

      newDisplayedTags.push(
        <TagSetOverflow
          allTagsModalSearchThreshold={allTagsModalSearchThreshold}
          className={overflowClassName}
          onShowAllClick={handleShowAllClick}
          overflowTags={newOverflowTags}
          overflowAlign={overflowAlign}
          overflowDirection={overflowDirection}
          showAllTagsLabel={showAllTagsLabel}
          key="displayed-tag-overflow"
          ref={overflowTag}
        />
      );

      setDisplayedTags(newDisplayedTags);
    }, [
      displayCount,
      overflowAlign,
      overflowClassName,
      overflowDirection,
      showAllTagsLabel,
      tags,
    ]);

    const checkFullyVisibleTags = useCallback(() => {
      // how many will fit?
      let willFit = 0;

      if (sizingTags.length > 0) {
        let spaceAvailable = tagSetRef.current.offsetWidth;

        for (let i in sizingTags) {
          const tagWidth = sizingTags[i].offsetWidth;

          if (spaceAvailable >= tagWidth) {
            spaceAvailable -= tagWidth;
            willFit += 1;
          } else {
            break;
          }
        }

        if (willFit < sizingTags.length) {
          while (
            willFit > 0 &&
            spaceAvailable < overflowTag.current.offsetWidth
          ) {
            // Highly unlikely any useful tag is smaller
            willFit -= 1; // remove one tag
            spaceAvailable += sizingTags[willFit].offsetWidth;
          }
        }
      }

      if (willFit < 1) {
        setDisplayCount(0);
      } else {
        setDisplayCount(maxVisible ? Math.min(willFit, maxVisible) : willFit);
      }
    }, [maxVisible, sizingTags, tagSetRef]);

    useEffect(() => {
      checkFullyVisibleTags();
    }, [checkFullyVisibleTags, maxVisible, sizingTags]);

    /* don't know how to test resize */
    /* istanbul ignore next */
    const handleResize = () => {
      /* istanbul ignore next */ // not sure how to test resize
      checkFullyVisibleTags();
    };

    /* don't know how to test resize */
    /* istanbul ignore next */
    const handleSizerTagsResize = () => {
      /* istanbul ignore next */ // not sure how to test resize
      checkFullyVisibleTags();
    };

    const handleModalClose = () => {
      setShowAllModalOpen(false);
    };

    useResizeDetector({
      onResize: handleSizerTagsResize,
      targetRef: sizingContainerRef,
    });

    useResizeDetector({
      onResize: handleResize,
      targetRef: tagSetRef,
    });

    return (
      <div {...rest} className={cx([blockClass, className])} ref={tagSetRef}>
        <div
          className={cx([
            `${blockClass}__space`,
            `${blockClass}__space--align-${align}`,
          ])}>
          <div
            className={`${blockClass}__tag-container ${blockClass}__tag-container--hidden`}
            aria-hidden={true}
            ref={sizingContainerRef}>
            {hiddenSizingTags}
          </div>

          <div className={`${blockClass}__tag-container`} ref={displayedArea}>
            {displayedTags}
          </div>
        </div>

        {tags && displayCount < tags.length ? (
          <TagSetModal
            allTags={tags}
            open={showAllModalOpen}
            title={allTagsModalTitle}
            onClose={handleModalClose}
            searchLabel={allTagsModalSearchLabel}
            searchPlaceholder={allTagsModalSearchPlaceholderText}
          />
        ) : null}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
TagSet = pkg.checkComponentEnabled(TagSet, componentName);

/**
 * The strings shown in the showAllModal are only shown if we have more than allTagsModalSearchLThreshold
 * @returns null if no problems
 */
export const string_required_if_more_than_10_tags = isRequiredIf(
  PropTypes.string,
  ({ tags }) => tags && tags.length > allTagsModalSearchThreshold
);

// copied from carbon-components-react/src/components/Tag/Tag.js for DocGen
const TYPES = {
  red: 'Red',
  magenta: 'Magenta',
  purple: 'Purple',
  blue: 'Blue',
  cyan: 'Cyan',
  teal: 'Teal',
  green: 'Green',
  gray: 'Gray',
  'cool-gray': 'Cool-Gray',
  'warm-gray': 'Warm-Gray',
  'high-contrast': 'High-Contrast',
};
const tagTypes = Object.keys(TYPES);

TagSet.types = tagTypes;

TagSet.propTypes = {
  /**
   * align the Tags displayed by the TagSet. Default start.
   */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * label text for the show all search. **Note: Required if more than 10 tags**
   */
  allTagsModalSearchLabel: string_required_if_more_than_10_tags,
  /**
   * placeholder text for the show all search. **Note: Required if more than 10 tags**
   */
  allTagsModalSearchPlaceholderText: string_required_if_more_than_10_tags,
  /**
   * title for the show all modal. **Note: Required if more than 10 tags**
   */
  allTagsModalTitle: string_required_if_more_than_10_tags,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * maximum visible tags
   */
  maxVisible: PropTypes.number,
  /**
   * overflowAlign from the standard tooltip. Default center.
   */
  overflowAlign: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * overflowClassName for the tooltip popup
   */
  overflowClassName: PropTypes.string,
  /**
   * overflowDirection from the standard tooltip
   */
  overflowDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * label for the overflow show all tags link.
   *
   * **Note:** Required if more than 10 tags
   */
  showAllTagsLabel: string_required_if_more_than_10_tags,
  /**
   * The tags to be shown in the TagSet. Each tag is specified as an object
   * with properties: **label**\* (required) to supply the tag content, and
   * other properties will be passed to the Carbon Tag component, such as
   * **type**, **disabled**, **ref**, **className** , and any other Tag props.
   * NOTE: **filter** is not supported. Any other fields in the object will be passed through to the HTML element
   * as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-tag--default
   */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      ...prepareProps(Tag.propTypes, 'filter'),
      label: PropTypes.string.isRequired,
      // we duplicate this prop to improve the DocGen
      type: PropTypes.oneOf(tagTypes),
    })
  ),
};

TagSet.defaultProps = {
  align: 'start',
  overflowAlign: 'center',
  overflowDirection: 'bottom',
};

TagSet.displayName = componentName;

export default TagSet;
