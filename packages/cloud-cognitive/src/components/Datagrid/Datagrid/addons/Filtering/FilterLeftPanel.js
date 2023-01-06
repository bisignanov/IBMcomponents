/* eslint-disable react/jsx-key */

import React, {
  useRef,
  useMemo,
  useEffect,
  useContext,
  useCallback,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  Button,
  Search,
  Checkbox,
  DatePicker,
  DatePickerInput,
  Dropdown,
  FormGroup,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from 'carbon-components-react';
import { pkg } from '../../../../../settings';
import {
  BATCH,
  CHECKBOX,
  CLEAR_FILTERS,
  DATE,
  DROPDOWN,
  INSTANT,
  NUMBER,
  PANEL,
  RADIO,
} from './constants';
import cx from 'classnames';
import { Close32 } from '@carbon/icons-react';
import { ActionSet } from '../../../../ActionSet';
import { FilterContext } from '.';
import useInitialStateFromFilters from './hooks/useInitialStateFromFilters';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-left-panel`;

const FilterLeftPanel = ({
  title,
  updateMethod = BATCH,
  filterSections,
  tableID,
  setAllFilters,
  onApply = () => {},
  onCancel = () => {},
}) => {
  /** State */
  const [filtersState, setFiltersState] = useInitialStateFromFilters(
    filterSections,
    PANEL
  );
  const [filtersObjectArray, setFiltersObjectArray] = useState([]);

  /** Refs */
  const tableRef = useRef();
  // When using batch actions we have to store the filters to then apply them later
  const prevFiltersRef = useRef(JSON.stringify(filtersState));
  const prevFiltersObjectArrayRef = useRef(JSON.stringify(filtersObjectArray));

  /** Effects */
  useEffect(
    function setRefsOnMount() {
      tableRef.current = document.querySelector(`#${tableID} .bx--data-table`);
    },
    [tableID]
  );

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Context */
  const { leftPanelOpen, setLeftPanelOpen } = useContext(FilterContext);

  /** Methods */
  const closePanel = () => setLeftPanelOpen(false);

  const cancel = () => {
    closePanel();
  };

  const apply = () => {
    setAllFilters(filtersObjectArray);
    closePanel();
    onApply();

    // updates the ref so next time the flyout opens we have records of the previous filters
    prevFiltersRef.current = JSON.stringify(filtersState);
    prevFiltersObjectArrayRef.current = JSON.stringify(filtersObjectArray);
  };

  const applyFilters = ({ column, value, type }) => {
    // If no end date is selected return because we need the end date to do computations
    if (type === DATE && !value[1]) {
      return;
    }

    const filtersObjectArrayCopy = [...filtersObjectArray];
    // // check if the filter already exists in the array
    const filter = filtersObjectArrayCopy.find((item) => item.id === column);

    // // if filter exists in array then update the filter's new value
    if (filter) {
      filter.value = value;
    } else {
      filtersObjectArrayCopy.push({ id: column, value, type });
    }

    setFiltersObjectArray(filtersObjectArrayCopy);

    // // Automatically apply the filters if the updateMethod is instant
    if (updateMethod === INSTANT) {
      setAllFilters(filtersObjectArrayCopy);
    }
  };

  /** Render the individual filter component */
  const renderFilter = ({
    type,
    column,
    props: components,
    sectionTitle,
    subSectionTitle,
  }) => {
    if (type === DATE) {
      return (
        <DatePicker
          {...components.DatePicker}
          onChange={(value) => {
            // Update state
            const filtersStateCopy = { ...filtersState };
            filtersStateCopy[sectionTitle][subSectionTitle][column] = value;
            setFiltersState(filtersStateCopy);

            // Apply the filters to react table
            applyFilters({ column, value, type });

            // Optionally pass the value back to the user
            components.DatePicker.onChange?.(value);
          }}
          value={filtersState[sectionTitle][subSectionTitle][column]}
          datePickerType="range"
        >
          <DatePickerInput
            placeholder="mm/dd/yyyy"
            labelText="Start date"
            {...components.DatePickerInput.start}
          />
          <DatePickerInput
            placeholder="mm/dd/yyyy"
            labelText="End date"
            {...components.DatePickerInput.end}
          />
        </DatePicker>
      );
    } else if (type === NUMBER) {
      return (
        <NumberInput
          step={1}
          allowEmpty
          hideSteppers
          {...components.NumberInput}
          onChange={(event) => {
            // Update state
            const filtersStateCopy = { ...filtersState };
            filtersStateCopy[sectionTitle][subSectionTitle][column] =
              event.target.value;
            setFiltersState(filtersStateCopy);

            // Apply the filters to react table
            applyFilters({ column, value: event.target.value, type });

            // Optionally pass the value back to the user
            components.NumberInput.onChange?.(event);
          }}
          value={filtersState[sectionTitle][subSectionTitle][column]}
        />
      );
    } else if (type === CHECKBOX) {
      return (
        <FormGroup {...components.FormGroup}>
          {filtersState[sectionTitle][subSectionTitle][column].map((option) => (
            <Checkbox
              key={option.labelText}
              {...option}
              onChange={(isSelected) => {
                // Update state
                const checkboxCopy =
                  filtersState[sectionTitle][subSectionTitle][column];
                const foundCheckbox = checkboxCopy.find(
                  (checkbox) => checkbox.value === option.value
                );
                foundCheckbox.selected = isSelected;
                const filtersStateCopy = { ...filtersState };
                filtersStateCopy[sectionTitle][subSectionTitle][column] =
                  checkboxCopy;
                setFiltersState(filtersStateCopy);

                // Apply the filters to react table
                applyFilters({
                  column,
                  value: [
                    ...filtersStateCopy[sectionTitle][subSectionTitle][column],
                  ],
                  type,
                });

                // Optionally pass the value back to the user
                option.onChange?.(isSelected);
              }}
              checked={option.selected}
            />
          ))}
        </FormGroup>
      );
    } else if (type === RADIO) {
      return (
        <FormGroup {...components.FormGroup}>
          <RadioButtonGroup
            {...components.RadioButtonGroup}
            valueSelected={filtersState[sectionTitle][subSectionTitle][column]}
            onChange={(selected) => {
              // Update state
              const filtersStateCopy = { ...filtersState };
              filtersStateCopy[sectionTitle][subSectionTitle][column] =
                selected;
              setFiltersState(filtersStateCopy);

              // Apply the filters to react table
              applyFilters({
                column,
                value: selected,
                type,
              });

              // Optionally pass the value back to the user
              components.RadioButtonGroup.onChange?.(selected);
            }}
          >
            {components.RadioButton.map((radio) => (
              <RadioButton
                key={radio.id ?? radio.labelText ?? radio.value}
                {...radio}
              />
            ))}
          </RadioButtonGroup>
        </FormGroup>
      );
    } else if (type === DROPDOWN) {
      return (
        <Dropdown
          {...components.Dropdown}
          selectedItem={filtersState[sectionTitle][subSectionTitle][column]}
          onChange={({ selectedItem }) => {
            // Update state
            const filtersStateCopy = { ...filtersState };
            filtersStateCopy[sectionTitle][subSectionTitle][column] =
              selectedItem;
            setFiltersState(filtersStateCopy);

            // Apply the filters to react table
            applyFilters({
              column,
              value: selectedItem,
              type,
            });

            // Optionally pass the value back to the user
            components.Dropdown.onChange?.(selectedItem);
          }}
        />
      );
    }
  };

  /** Renders all filters */
  const renderFilters = ({ sectionTitle, subSectionTitle, filters }) =>
    filters.map(({ type, column, props }) =>
      renderFilter({ type, column, props, sectionTitle, subSectionTitle })
    );

  const renderActionSet = () => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: 'Apply',
              onClick: apply,
            },
            {
              key: 3,
              kind: 'secondary',
              label: 'Cancel',
              onClick: cancel,
            },
          ]}
          className={`${componentClass}__action-set`}
        />
      )
    );
  };

  const panelHeight = tableRef.current?.getBoundingClientRect().height;

  return (
    <div
      style={{
        height: panelHeight,
      }}
      className={cx(componentClass, `${componentClass}__container`, {
        [`${componentClass}--open`]: leftPanelOpen,
        [`${componentClass}--batch`]: showActionSet,
        [`${componentClass}--instant`]: !showActionSet,
      })}
    >
      <div className={`${componentClass}__heading`}>
        <h1 className={`${componentClass}__title`}>{title}</h1>
        <Button
          hasIconOnly
          renderIcon={Close32}
          iconDescription="button-chan"
          kind="ghost"
          onClick={cancel}
        />
      </div>
      <div className={`${componentClass}__search`}>
        <Search
          labelText="Filter search"
          placeHolderText="Find filters"
          light={true}
          size="sm"
        />
      </div>
      <div className={`${componentClass}__inner-container`}>
        {filterSections.map((category) => {
          return (
            <div className={`${componentClass}__category`}>
              <div className={`${componentClass}__category-title`}>
                {category.title}
              </div>
              <Accordion>
                {category.subsections.map((subsection) => {
                  return (
                    <AccordionItem
                      title={subsection.title}
                      key={subsection.title}
                    >
                      {renderFilters({
                        sectionTitle: category.title,
                        subSectionTitle: subsection.title,
                        filters: subsection.filters,
                      })}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          );
        })}
      </div>
      {renderActionSet()}
    </div>
  );
};

FilterLeftPanel.propTypes = {
  filterSections: PropTypes.array,
  open: PropTypes.bool,
  tableID: PropTypes.string.isRequired,
  title: PropTypes.string,
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
};

export default FilterLeftPanel;
