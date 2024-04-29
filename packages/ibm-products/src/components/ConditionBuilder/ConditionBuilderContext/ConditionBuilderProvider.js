import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const emptyState = {
  groups: [
    {
      groupSeparateOperator: null,
      groupOperator: 'and',
      statement: 'if',
      conditions: [
        {
          property: undefined,
          operator: '',
          value: '',
          popoverToOpen: 'propertyField',
        },
      ],
    },
  ],
};

export const ConditionBuilderContext = createContext();

// const rootReducer=(state,action)=>{
//   switch(action.type){
//   case 'update':
//      ;
//     return {
//       ...state,
//       ...action.payload
//     }
//     break;
//     default:
//       return state;
//   }

// }

export const ConditionBuilderProvider = (props) => {
  const [rootState, setRootState] = useState({
    groups: [],
  });

  return (
    <ConditionBuilderContext.Provider
      value={{
        rootState,
        setRootState,
        inputConfig: props.inputConfig,
        popOverSearchThreshold: props.popOverSearchThreshold,
        getOptions: props.getOptions,
      }}
    >
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </ConditionBuilderContext.Provider>
  );
};

ConditionBuilderProvider.propTypes = {
  /**
   * Provide the contents of the ConditionBuilder.
   */
  children: PropTypes.node.isRequired,

  /**
   * This is an optional callback function that will be triggered when options array is not passed in the inputConfig against a property. 
   * This can be a asynchronous function that need  to  return a promise, so it will allow to fetch options from API call.
   * options has to be in valid format
   * [{
          label: 'label',
          id: 'id',
        },...] 
   */
  getOptions: PropTypes.func,

  /**
   * This is a mandatory prop that defines the input to the condition builder.
   
   */
  inputConfig: PropTypes.shape({
    properties: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        icon: PropTypes.func,
        type: PropTypes.oneOf(['text', 'number', 'date', 'option']),
        config: PropTypes.shape({
          options: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              label: PropTypes.string,
              icon: PropTypes.func,
            })
          ),
          includeSearch: PropTypes.bool,
        }),
      })
    ),
  }).isRequired,
  /**
   * Provide an mandatory numeric value that will be used to enable search option in the popovers with list.
   */
  popOverSearchThreshold: PropTypes.number.isRequired,

  /* TODO: add types and DocGen for all props. */
};
