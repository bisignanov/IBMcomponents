/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext, useState } from 'react';
import { Close } from '@carbon/react/icons';
import { ConditionBuilderItem } from '../ConditionBuilderItem/ConditionBuilderItem';
import PropTypes from 'prop-types';
import {
  operatorConfig,
  statementConfig,
} from '../ConditionBuilderContext/DataConfigs';
import cx from 'classnames';
import ConditionConnector from '../ConditionBuilderConnector/ConditionConnector';
import { ConditionBuilderItemNumber } from '../ConditionBuilderItem/ConditionBuilderItemNumber/ConditionBuilderItemNumber';
import { ConditionBuilderItemText } from '../ConditionBuilderItem/ConditionBuilderItemText/ConditionBuilderItemText';
import { ConditionBuilderItemDate } from '../ConditionBuilderItem/ConditionBuilderItemDate/ConditionBuilderItemDate';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import { checkIsValid, focusThisField } from '../utils/util';
import { ConditionBuilderItemTime } from '../ConditionBuilderItem/ConditionBuilderItemTime/ConditionBuilderItemTime';
import ConditionBuilderAdd from '../ConditionBuilderAdd/ConditionBuilderAdd';
import { ItemOption } from '../ConditionBuilderItem/ConditionBuilderItemOption/ItemOption';
import { ItemOptionForValueField } from '../ConditionBuilderItem/ConditionBuilderItemOption/ItemOptionForValueField';
import { useTranslations } from '../utils/useTranslations';

/**
 * This component build each block of condition consisting of property, operator value and close button.
 */

const ConditionBlock = (props) => {
  const { property, value, operator } = props.condition;
  const {
    onRemove,
    onChange,
    condition,
    conjunction,
    onConnectorOperatorChange,
    isStatement,
    group,
    onStatementChange,
    conditionIndex,
    addConditionHandler,
    addConditionSubGroupHandler,
    aria,
    hideConditionSubGroupPreviewHandler,
    showConditionSubGroupPreviewHandler,
    hideConditionPreviewHandler,
    showConditionPreviewHandler,
    isLastCondition,
  } = props;
  const { inputConfig, variant, conditionBuilderRef } = useContext(
    ConditionBuilderContext
  );

  const [showDeletionPreview, setShowDeletionPreview] = useState(false);
  const [showAllActions, setShowAllActions] = useState(false);

  const [
    conditionRowText,
    conditionText,
    propertyText,
    operatorText,
    removeConditionText,
  ] = useTranslations([
    'conditionRowText',
    'conditionText',
    'propertyText',
    'operatorText',
    'removeConditionText',
  ]);

  //filtering the current property to access its properties and config options
  const getCurrentConfig = (property) => {
    return (
      inputConfig.properties?.find(
        (eachProperty) => eachProperty.id == property
      ) ?? {}
    );
  };

  const { icon, type, config, label } = getCurrentConfig(property);

  //Below possible input types expected for value field.
  const itemComponents = {
    text: ConditionBuilderItemText,
    number: ConditionBuilderItemNumber,
    date: ConditionBuilderItemDate,
    time: ConditionBuilderItemTime,
    option: ItemOptionForValueField,
    custom: config?.component,
    textarea: ConditionBuilderItemText,
  };
  const ItemComponent = property ? itemComponents[type] : null;

  const showAllActionsHandler = () => {
    setShowAllActions(true);
  };
  const hideAllActionsHandler = () => {
    setShowAllActions(false);
  };
  const onStatementChangeHandler = (v, evt) => {
    focusThisField(evt, conditionBuilderRef);
    onStatementChange(v);
  };

  const onPropertyChangeHandler = (newProperty) => {
    onChange({
      ...condition,
      property: newProperty,
      operator: undefined,
      value: '',
      popoverToOpen: checkIsValid(newProperty) ? 'operatorField' : '',
    });
  };
  const onOperatorChangeHandler = (newOperator) => {
    onChange({
      ...condition,
      operator: newOperator,
      value: undefined,
      popoverToOpen: checkIsValid(newOperator) ? 'valueField' : '',
    });
  };
  const onValueChangeHandler = (newValue) => {
    const currentCondition = { ...condition };
    delete currentCondition.popoverToOpen;

    onChange({
      ...currentCondition,
      value: newValue,
    });
  };
  const handleShowDeletionPreview = () => {
    setShowDeletionPreview(true);
  };
  const handleHideDeletionPreview = () => {
    setShowDeletionPreview(false);
  };
  const manageActionButtons = (conditionIndex, conditions) => {
    if (variant === 'tree') {
      return true;
    }
    return isLastCondition(conditionIndex, conditions);
  };
  const getOperators = () => {
    if (config?.operators) {
      return config.operators;
    }
    return operatorConfig.filter(
      (operator) => operator.type.indexOf(type) != -1 || operator.type == 'all'
    );
  };
  const getAriaAttributes = () => {
    return variant == 'tree'
      ? {
          'aria-level': aria.level,
          'aria-posinset': aria.posinset,
          'aria-setsize': aria.setsize,
        }
      : {};
  };

  const renderChildren = (popoverRef) => {
    return (
      <ItemComponent
        conditionState={{
          property,
          operator,
          value,
        }}
        onChange={onValueChangeHandler}
        config={config}
        data-name="valueField"
        parentRef={popoverRef}
        type={type}
      />
    );
  };
  return (
    <div
      className={cx(
        `${blockClass}__condition-block`,
        {
          [`${blockClass}__condition__deletion-preview`]: showDeletionPreview,
        },
        {
          [`${blockClass}__gap-bottom`]: variant == 'tree',
        },
        {
          [`${blockClass}__gap ${blockClass}__gap-bottom`]:
            variant == 'sentence',
        },
        {
          [`${blockClass}__condition--interacting`]: showAllActions,
        }
      )}
      role="row"
      aria-label={conditionRowText}
      {...getAriaAttributes()}
      tabIndex={-1}
      onMouseEnter={showAllActionsHandler}
      onMouseLeave={hideAllActionsHandler}
      onBlur={hideAllActionsHandler}
    >
      {conjunction ? (
        <ConditionConnector
          className={`${blockClass}__gap`}
          operator={conjunction}
          onChange={(op) => onConnectorOperatorChange(op)}
        />
      ) : (
        <div role="gridcell" />
      )}

      {isStatement && (
        <ConditionBuilderItem
          label={group.statement}
          title={conditionText}
          data-name="connectorField"
          popOverClassName={`${blockClass}__gap`}
          className={`${blockClass}__statement-button`}
          tabIndex={0}
        >
          <ItemOption
            conditionState={{
              value: group.statement,
              label: conditionText,
            }}
            onChange={onStatementChangeHandler}
            config={{ options: statementConfig }}
          />
        </ConditionBuilderItem>
      )}

      {/* <div className={`${blockClass}__block`}> */}

      <ConditionBuilderItem
        label={label ?? condition?.property}
        title={propertyText}
        renderIcon={icon ?? null}
        className={`${blockClass}__property-field`}
        data-name="propertyField"
        condition={condition}
        type={type}
        onChange={onPropertyChangeHandler}
      >
        <ItemOption
          conditionState={{
            value: property,
            label: propertyText,
          }}
          onChange={onPropertyChangeHandler}
          config={{ options: inputConfig.properties }}
        />
      </ConditionBuilderItem>
      {checkIsValid(property) && (
        <ConditionBuilderItem
          label={operator}
          title={operatorText}
          data-name="operatorField"
          condition={condition}
          type={type}
          onChange={onOperatorChangeHandler}
        >
          <ItemOption
            config={{
              options: getOperators(),
            }}
            conditionState={{
              value: operator,
              label: operatorText,
            }}
            onChange={onOperatorChangeHandler}
          />
        </ConditionBuilderItem>
      )}
      {checkIsValid(property) && checkIsValid(operator) && (
        <ConditionBuilderItem
          label={value}
          type={type}
          title={label}
          showToolTip={true}
          data-name="valueField"
          condition={condition}
          config={config}
          onChange={onValueChangeHandler}
          renderChildren={renderChildren}
        />
      )}
      <span role="gridcell" aria-label={removeConditionText}>
        <ConditionBuilderButton
          hideLabel
          label={removeConditionText}
          onClick={onRemove}
          onMouseEnter={handleShowDeletionPreview}
          onMouseLeave={handleHideDeletionPreview}
          onFocus={handleShowDeletionPreview}
          onBlur={handleHideDeletionPreview}
          renderIcon={Close}
          className={`${blockClass}__close-condition`}
          data-name="closeCondition"
        />
      </span>
      {/* </div> */}
      {manageActionButtons(conditionIndex, group.conditions) && (
        <ConditionBuilderAdd
          onClick={() => {
            addConditionHandler(conditionIndex);
          }}
          addConditionSubGroupHandler={() => {
            addConditionSubGroupHandler(conditionIndex);
          }}
          showConditionSubGroupPreviewHandler={
            showConditionSubGroupPreviewHandler
          }
          hideConditionSubGroupPreviewHandler={
            hideConditionSubGroupPreviewHandler
          }
          enableSubGroup={variant == 'tree'}
          showConditionPreviewHandler={showConditionPreviewHandler}
          hideConditionPreviewHandler={hideConditionPreviewHandler}
          className={`${blockClass}__gap ${blockClass}__gap-left`}
        />
      )}
    </div>
  );
};

export default ConditionBlock;

ConditionBlock.propTypes = {
  /**
   * callback to add a new condition
   */
  addConditionHandler: PropTypes.func,
  /**
   * callback to add a new condition subgroup
   */
  addConditionSubGroupHandler: PropTypes.func,
  /**
   * object hold aria attributes
   */
  aria: PropTypes.object,

  condition: PropTypes.object,
  conditionIndex: PropTypes.number,
  /**
   * string that decides to show the condition connector
   */
  conjunction: PropTypes.string,

  /**
   * object that hold the current group object where is condition is part of
   */
  group: PropTypes.object,
  /**
   * handler for hiding sub group preview
   */
  hideConditionPreviewHandler: PropTypes.func,
  /**
   * handler for hiding sub group preview
   */
  hideConditionSubGroupPreviewHandler: PropTypes.func,

  isLastCondition: PropTypes.func,
  /**
   *  boolean that decides to show the statement(if/ excl.if)
   */
  isStatement: PropTypes.bool,
  /**
   * callback to update the current condition of the state tree
   */
  onChange: PropTypes.func,
  /**
   * callback to handle the connector(and/or) change
   */
  onConnectorOperatorChange: PropTypes.func,
  /**
   * callback for Remove a condition
   */
  onRemove: PropTypes.func,

  /**
   * callback to handle the statement(if/ excl.if) change
   */
  onStatementChange: PropTypes.func,
  /**
   * handler for showing add condition preview
   */
  showConditionPreviewHandler: PropTypes.func,
  /**
   * handler for showing sub group preview
   */
  showConditionSubGroupPreviewHandler: PropTypes.func,
  /**
   * object that hold the current condition
   */
  state: PropTypes.object,
};
