//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { Tag, Accordion, AccordionItem, Button } from 'carbon-components-react';
import { SubtractAlt32 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
import { AddSelectMetaPanel } from './AddSelectMetaPanel';
const componentName = 'AddSelectSidebar';

export let AddSelectSidebar = ({
  closeIconDescription,
  displayMetalPanel,
  influencerTitle,
  items,
  metaPanelTitle,
  multiSelection,
  noSelectionDescription,
  noSelectionTitle,
  removeIconDescription,
  setDisplayMetaPanel,
  setMultiSelection,
}) => {
  const blockClass = `${pkg.prefix}--add-select__sidebar`;

  const handleItemRemove = (id) => {
    const newSelections = multiSelection.filter((v) => v !== id);
    setMultiSelection(newSelections);
  };

  const sidebarItems = multiSelection.reduce((acc, cur) => {
    const selectedItem = items.find((item) => item.id === cur);
    // certain properties should not be displayed in the sidebar
    // eslint-disable-next-line no-unused-vars
    const { meta, icon, avatar, ...newItem } = selectedItem;
    acc.push(newItem);
    return acc;
  }, []);

  const getTitle = ({ title, subtitle, id }) => (
    <div className={`${blockClass}-accordion-title`}>
      <div className={`${blockClass}-selected-item`}>
        <p className={`${blockClass}-selected-item-title`}>{title}</p>
        <p className={`${blockClass}-selected-item-subtitle`}>{subtitle}</p>
      </div>
      <Button
        renderIcon={SubtractAlt32}
        iconDescription={removeIconDescription}
        hasIconOnly
        onClick={() => handleItemRemove(id)}
        kind="ghost"
        className={`${blockClass}-item-remove-button`}
        size="sm"
      />
    </div>
  );

  if (Object.keys(displayMetalPanel).length !== 0) {
    return (
      <AddSelectMetaPanel
        closeIconDescription={closeIconDescription}
        meta={displayMetalPanel.meta}
        setDisplayMetaPanel={setDisplayMetaPanel}
        title={metaPanelTitle}
      />
    );
  }

  return (
    <div className={blockClass}>
      <div className={`${blockClass}-header`}>
        <p className={`${blockClass}-title`}>{influencerTitle}</p>
        <Tag type="gray" size="sm">
          {multiSelection.length}
        </Tag>
      </div>
      {multiSelection.length > 0 ? (
        <Accordion align="start">
          {sidebarItems.map((item) => (
            <AccordionItem title={getTitle(item)} key={item.id}>
              {Object.keys(item).map((key) => (
                <div className={`${blockClass}-item`} key={key}>
                  <p className={`${blockClass}-item-header`}>{key}</p>
                  <p className={`${blockClass}-item-body`}>{item[key]}</p>
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className={`${blockClass}-body`}>
          <NoDataEmptyState
            subtitle={noSelectionDescription}
            title={noSelectionTitle}
            size="sm"
          />
        </div>
      )}
    </div>
  );
};

AddSelectSidebar.propTypes = {
  closeIconDescription: PropTypes.string,
  displayMetalPanel: PropTypes.object,
  influencerTitle: PropTypes.string,
  items: PropTypes.array,
  metaPanelTitle: PropTypes.string,
  multiSelection: PropTypes.array,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
  removeIconDescription: PropTypes.string,
  setDisplayMetaPanel: PropTypes.func,
  setMultiSelection: PropTypes.func,
};

AddSelectSidebar.displayName = componentName;
