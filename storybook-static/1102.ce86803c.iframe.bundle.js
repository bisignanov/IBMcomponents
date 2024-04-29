"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[1102],{"../ibm-products/src/components/ActionSet/ActionSet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>ActionSet});var _InlineLoading,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_settings__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../ibm-products/src/settings.js"),_global_js_utils_props_helper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../ibm-products/src/global/js/utils/props-helper.js"),_carbon_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["className","disabled","kind","label","loading","isExpressive"],_excluded2=["actions","buttonSize","className","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(_settings__WEBPACK_IMPORTED_MODULE_5__.K.prefix,"--action-set"),ActionSetButton=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,disabled=_ref.disabled,kind=_ref.kind,label=_ref.label,loading=_ref.loading,_ref$isExpressive=_ref.isExpressive,isExpressive=void 0===_ref$isExpressive||_ref$isExpressive,rest=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.zxk,_objectSpread(_objectSpread({},rest),{},{isExpressive,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,["".concat(blockClass,"__action-button"),_defineProperty(_defineProperty({},"".concat(blockClass,"__action-button--ghost"),"ghost"===kind||"danger--ghost"===kind),"".concat(blockClass,"__action-button--expressive"),isExpressive)]),disabled:disabled||loading||!1,kind,ref,children:[label,loading&&(_InlineLoading||(_InlineLoading=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.lSo,{})))]}))}));ActionSetButton.displayName="ActionSetButton",ActionSetButton.propTypes=_objectSpread(_objectSpread({},_carbon_react__WEBPACK_IMPORTED_MODULE_3__.zxk.PropTypes),{},{kind:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,loading:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool});var willStack=function willStack(size,numberOfActions){return"sm"===size||"md"===size&&numberOfActions>2},defaults_size="md",ActionSet=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var _actions$slice,actions=_ref3.actions,buttonSize=_ref3.buttonSize,className=_ref3.className,_ref3$size=_ref3.size,size=void 0===_ref3$size?defaults_size:_ref3$size,rest=_objectWithoutProperties(_ref3,_excluded2),buttons=actions&&(null===(_actions$slice=actions.slice)||void 0===_actions$slice?void 0:_actions$slice.call(actions,0))||[],stacking=willStack(size,buttons.length),buttonOrder=function buttonOrder(kind){var _ghost$dangerGhost$;return null!==(_ghost$dangerGhost$={ghost:1,"danger--ghost":2,danger:4,primary:5}[kind])&&void 0!==_ghost$dangerGhost$?_ghost$dangerGhost$:3};return buttons.sort((function(action1,action2){return(buttonOrder(action1.kind||"primary")-buttonOrder(action2.kind||"primary"))*(stacking?-1:1)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.uVA,_objectSpread(_objectSpread({},rest),{},{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(blockClass,className,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"".concat(blockClass,"--row-single"),!stacking&&1===buttons.length),"".concat(blockClass,"--row-double"),!stacking&&2===buttons.length),"".concat(blockClass,"--row-triple"),!stacking&&3===buttons.length),"".concat(blockClass,"--row-quadruple"),!stacking&&buttons.length>=4),"".concat(blockClass,"--stacking"),stacking),"".concat(blockClass,"--").concat(size)),ref,role:"presentation",stacked:stacking,children:buttons.map((function(action,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionSetButton,_objectSpread(_objectSpread({},action),{},{size:buttonSize}),action.key||index)}))}))}));ActionSet.displayName="ActionSet",ActionSet.validateActions=function(sizeFn){return function(props,propName,componentName,location,propFullName){var name=propFullName||propName,prop=props[name],actions=prop&&(null==prop?void 0:prop.length),problems=[];if(actions>0){var size=sizeFn?sizeFn(props):props.size||defaults_size,stacking=willStack(size,actions),countActions=function countActions(kind){return prop.filter((function(action){return(action.kind||"primary")===kind})).length},primaryActions=countActions("primary"),secondaryActions=countActions("secondary"),dangerActions=countActions("danger"),ghostActions=countActions("ghost")+countActions("danger--ghost");stacking&&actions>3&&problems.push("you cannot have more than three actions in this size of ".concat(componentName)),actions>4&&problems.push("you cannot have more than four actions in a ".concat(componentName)),primaryActions>1&&problems.push("you cannot have more than one 'primary' action in a ".concat(componentName)),ghostActions>1&&problems.push("you cannot have more than one 'ghost' action in a ".concat(componentName)),stacking&&actions>1&&ghostActions>0&&problems.push("you cannot have a 'ghost' button in conjunction with other action types in this size of ".concat(componentName)),actions>primaryActions+secondaryActions+dangerActions+ghostActions&&problems.push("you can only have 'primary', 'danger', 'secondary', 'ghost' and 'danger--ghost' buttons in a ".concat(componentName))}return problems.length>0?new Error("Invalid ".concat(location," `").concat(name,"` supplied to `").concat(componentName,"`: ").concat(problems.join(", and "),".")):null}},ActionSet.propTypes={actions:(0,_global_js_utils_props_helper__WEBPACK_IMPORTED_MODULE_2__.UL)([ActionSet.validateActions(),prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape(_objectSpread(_objectSpread({},_carbon_react__WEBPACK_IMPORTED_MODULE_3__.zxk.propTypes),{},{kind:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,loading:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onClick:_carbon_react__WEBPACK_IMPORTED_MODULE_3__.zxk.propTypes.onClick})))]),buttonSize:_carbon_react__WEBPACK_IMPORTED_MODULE_3__.zxk.propTypes.size,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["sm","md","lg","xl","2xl"])},ActionSet.__docgenInfo={description:"An ActionSet presents a set of action buttons, constructed from bundles\nof prop values and applying some layout rules. When the size is 'sm'\nthe buttons are stacked, and should only include primary and secondary\nkinds. When the size is 'md' the buttons are stacked if there are three or\nmore. When the size is 'md' or 'lg', two buttons share the horizontal space.\nWhen the size is 'lg', three or more buttons use a quarter of the available\nhorizontal space, and if the size is 'xlg' or 'max' the buttons always use\na quarter of the available horizontal space. If there is a ghost button,\nit appears at the left side. If there is a primary button it appears at the\nright.",methods:[{name:"validateActions",docblock:"A validator function to help validate the actions supplied for a particular\nsize of component. When the size is sm, or md with three actions, the\nbuttons will be stacked and a maximum of three buttons is applied with no\nghosts unless the ghost is the only button. Otherwise a maximum of four\nbuttons with a maximum of one ghost is applied. In either case, a maximum\nof one primary button is allowed.\n@param sizeFn An optional function which will be passed all the props and\nreturns the size that the component should be treated as being: if not\nprovided, a 'size' prop is used to determine the size of the component.\n@returns null if the actions meet the requirements, or an Error object with\nan explanatory message.",modifiers:["static"],params:[{name:"sizeFn",description:"An optional function which will be passed all the props and\nreturns the size that the component should be treated as being: if not\nprovided, a 'size' prop is used to determine the size of the component.",optional:!1}],returns:{description:"null if the actions meet the requirements, or an Error object with\nan explanatory message."},description:"A validator function to help validate the actions supplied for a particular\nsize of component. When the size is sm, or md with three actions, the\nbuttons will be stacked and a maximum of three buttons is applied with no\nghosts unless the ghost is the only button. Otherwise a maximum of four\nbuttons with a maximum of one ghost is applied. In either case, a maximum\nof one primary button is allowed."}],displayName:"ActionSet",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:"The action buttons to show. Each action is specified as an object\nrepresentation of a Carbon button.\n\nSee https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api",type:{name:"custom",raw:"allPropTypes([\n  /**@ts-ignore*/\n  ActionSet.validateActions(),\n  PropTypes.arrayOf(\n    PropTypes.shape({\n      ...Button.propTypes,\n      kind: PropTypes.oneOf([\n        'ghost',\n        'danger--ghost',\n        'secondary',\n        'danger',\n        'primary',\n      ]),\n      label: PropTypes.string,\n      loading: PropTypes.bool,\n      // we duplicate this Button prop to improve the DocGen here\n      onClick: Button.propTypes.onClick,\n    })\n  ),\n])"}},buttonSize:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ButtonSizes)[number]"},description:"The size of buttons to use for the actions. The allowed values are\nthose for the size prop of carbon Button. If this prop is specified, all\nthe buttons will be set to this size, overriding any 'size' values (if any)\nsupplied in the actions array (if any).",type:{name:"custom",raw:"Button.propTypes.size"}},className:{required:!1,tsType:{name:"string"},description:"An optional class or classes to be added to the outermost element.",type:{name:"string"}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ButtonSizes)[number]"},description:"The size of the action set. Different button arrangements are used at\ndifferent sizes, to make best use of the available space.",defaultValue:{value:"'md'",computed:!1},type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]}}}}},"../ibm-products/src/global/js/utils/props-helper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I3:()=>isRequiredIf,UL:()=>allPropTypes,W:()=>getDeprecatedArgTypes,eG:()=>prepareProps,jc:()=>deprecateProp});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_pconsole__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ibm-products/src/global/js/utils/pconsole.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var prepareProps=function prepareProps(){for(var _len=arguments.length,values=new Array(_len),_key=0;_key<_len;_key++)values[_key]=arguments[_key];var merged=Object.assign.apply(Object,[{}].concat(_toConsumableArray(values.map((function toNulls(arg){return"string"==typeof arg?_defineProperty({},arg,null):Array.isArray(arg)?Object.fromEntries(arg.map((function(key){return[key,null]}))):arg})))));return Object.entries(merged).reduce((function(result,_ref2){var _ref3=_slicedToArray(_ref2,2),key=_ref3[0],value=_ref3[1];return null!==value&&(result[key]=value),result}),{})},propHasValue=function propHasValue(props,propName){var result=null!==props[propName]&&void 0!==props[propName];if(result&&"children"===propName&&Array.isArray(props[propName])){result=!1;for(var i=0;!result&&i<props[propName].length;i++)result=null!==props[propName][i]&&void 0!==props[propName][i]}return result},deprecateProp=function deprecateProp(validator,additionalInfo){return function(props,propName,comp,loc,propFullName,secret){return propHasValue(props,propName)&&_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.warn("The ".concat(loc," `").concat(propFullName||propName,"` of `").concat(comp,"` has been deprecated and will soon be removed. ").concat(additionalInfo)),validator(props,propName,comp,loc,propFullName,secret)}},getDeprecatedArgTypes=function getDeprecatedArgTypes(deprecatedProps){return Object.keys(deprecatedProps).reduce((function(acc,cur){return acc[cur]={table:{disable:!0}},acc}),{})},allPropTypes=_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.shimIfProduction((function(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers))return _pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.error("Warning: Invalid argument supplied to allPropTypes, expected an instance of array."),_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.noop;for(var i=0;i<arrayOfTypeCheckers.length;i++)if("function"!=typeof arrayOfTypeCheckers[i])return _pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.error("Invalid argument supplied to allPropTypes. Expected an array of check functions, but received ".concat(arrayOfTypeCheckers[i]," at index ").concat(i,".")),_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.noop;var checkType=function checkType(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];var error=null;return arrayOfTypeCheckers.some((function(checker){return error=checker.apply(void 0,args)})),error};return checkType.isRequired=function(props,propName,comp,loc,propFullName,secret){var prop=propFullName||propName;return null==props[prop]?new Error("The ".concat(loc," `").concat(prop,"` is marked as required in `").concat(comp||"<<anonymous>>","`, but its value is `").concat(null===props[prop]?"null":"undefined","`.")):checkType(props,prop,comp,loc,propFullName,secret)},checkType})),isRequiredIf=function isRequiredIf(checker,conditionFn){return function(props,propName,componentName,location,propFullName,secret){return(conditionFn(props)?checker.isRequired:checker)(props,propName,componentName,location,propFullName,secret)}};for(var checker in isRequiredIf.decorate=function(checker){checker.isRequired.if=_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.isProduction?_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.noop:isRequiredIf.bind(null,checker)},prop_types__WEBPACK_IMPORTED_MODULE_2___default())prop_types__WEBPACK_IMPORTED_MODULE_2___default()[checker].isRequired&&isRequiredIf.decorate(prop_types__WEBPACK_IMPORTED_MODULE_2___default()[checker])}}]);